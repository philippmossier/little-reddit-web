import { withUrqlClient } from 'next-urql';
import { NextPage } from 'next';
import React, { useState } from 'react';
import * as styles from '../../page-styles/styles';
import { toErrorMap } from '../../utils/toErrorMap';
import { useChangePasswordMutation } from '../../generated/graphql';
import { useRouter } from 'next/dist/client/router';
import { useForm } from 'react-hook-form';
import createUrqlClient from '../../utils/createUrqlClient';
import NextLink from 'next/link';
import AlertSvg from '../../assets/svg/AlertSvg';
import ExternalLinkSvg from '../../assets/svg/ExternalLinkSvg';

type FormValues = {
  newPassword: string;
  token: string;
};

const ChangePassword: NextPage<{ token: string }> = ({ token }) => {
  const [, changePasswordMut] = useChangePasswordMutation(); // mutation hook from '@graphql-codegen/typescript-urql'
  const { register, handleSubmit, formState, setError, errors } = useForm<FormValues>();
  const { isSubmitting } = formState;
  const router = useRouter();
  // token has no form field and no state, so we create a state for it:
  const [tokenError, setTokenError] = useState('');

  const onSubmit = async (data: FormValues) => {
    const response = await changePasswordMut({
      newPassword: data.newPassword,
      token,
    });
    // if no connection
    if (!response) console.log('Promise unresolved, check connection');
    if (response.error) console.log('Error occured in onSubmit:', response.error);
    if (response.data?.changePassword.errors) {
      console.log(toErrorMap(response.data.changePassword.errors));
      const errorObj = toErrorMap(response.data.changePassword.errors);
      if ('newPassword' in errorObj) setError('newPassword', { message: errorObj.newPassword });
      // as token is not a formfield wie have to use our tokenError hook here
      // to set the error manually and render its message in a custom alert-box
      if ('token' in errorObj) setTokenError(errorObj.token);
    } else if (response.data?.changePassword.user) {
      console.log('Changed password succesfully as:', response.data.changePassword.user);
      router.push('/');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h2 className={styles.headerTitle}>Enter your new password</h2>
      </div>

      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="newPassword" className={styles.usernameLabel}>
              New password
            </label>
            <div className={styles.usernameInputContainer}>
              <input
                name="newPassword"
                type="password"
                ref={register({ required: true })}
                className={styles.usernameInputField}
              />
              {errors.newPassword && <div className="text-red-500 font-bold text-sm">{errors.newPassword.message}</div>}
            </div>
          </div>
          {tokenError ? (
            <div>
              <div className="flex bg-red-500 mb-4 my-4 w-full">
                <div className="w-16 bg-red">
                  <div className="p-4">
                    <AlertSvg />
                  </div>
                </div>
                <div className="w-full text-black bg-red-300 items-center p-4">
                  <span className="text-lg font-bold pb-4">Heads Up!</span>
                  <p className="leading-tight">{tokenError}</p>
                </div>
              </div>

              <NextLink href="/forgot-password">
                <a className="flex justify-center py-2 bg-gray-200 hover:bg-gray-300 border rounded-md">
                  <p className="pr-2">click here to get a new one</p>
                  <ExternalLinkSvg />
                </a>
              </NextLink>
            </div>
          ) : null}

          <div className="mt-6">
            {isSubmitting ? (
              <button type="submit" disabled={isSubmitting} className={styles.submitButton(isSubmitting)}>
                Submit
              </button>
            ) : (
              <button type="submit" className={styles.submitButton(isSubmitting)}>
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
// special function which gets all query params
ChangePassword.getInitialProps = ({ query }) => {
  return {
    token: query.token as string,
  };
};
export default withUrqlClient(createUrqlClient)(ChangePassword);
