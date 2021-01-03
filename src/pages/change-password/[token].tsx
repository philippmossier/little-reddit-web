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
    // success:
    if (response.data?.changePassword.user) {
      console.log('Changed password succesfully as:', response.data.changePassword.user);
      router.push('/');
    }
    // no connection:
    else if (!response) console.log('Promise unresolved, check connection');
    // error handling:
    else if (response.error) console.log('Error occured in onSubmit:', response.error);
    else if (response.data?.changePassword.errors) {
      console.log(toErrorMap(response.data.changePassword.errors));
      const errorObj = toErrorMap(response.data.changePassword.errors);
      if ('newPassword' in errorObj) setError('newPassword', { message: errorObj.newPassword });
      // as token is not a formfield wie have to use our tokenError hook here
      // to set the error manually and render its message in a custom alert-box
      if ('token' in errorObj) setTokenError(errorObj.token);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <img
          className={styles.headerLogo}
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className={styles.headerTitle}>Enter your new password</h2>
      </div>

      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="newPassword" className={styles.label}>
              New password
            </label>
            <div className={styles.inputContainer}>
              <input
                name="newPassword"
                type="password"
                ref={register({ required: true })}
                className={styles.inputField}
              />
              {errors.newPassword && <div className="text-sm font-bold text-red-500">{errors.newPassword.message}</div>}
            </div>
          </div>
          {tokenError ? (
            <div>
              <div className="flex w-full mt-4 mb-2 bg-red-500">
                <div className="bg-red w-16">
                  <div className="p-4">
                    <AlertSvg />
                  </div>
                </div>
                <div className="items-center w-full p-4 text-black bg-red-300">
                  <span className="pb-4 text-lg font-bold">Heads Up!</span>
                  <p className="leading-tight">{tokenError}</p>
                </div>
              </div>

              <div className="flex justify-end">
                <NextLink href="/forgot-password">
                  <span className="hover:text-black hover:border-black text-sm tracking-tighter text-gray-600 border-b border-gray-300 cursor-pointer">
                    Get a new one here
                  </span>
                </NextLink>
              </div>
            </div>
          ) : null}

          <div className="mt-4">
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
