import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/dist/client/router';
import React, { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../generated/graphql';
import * as styles from '../page-styles/styles';
import createUrqlClient from '../utils/createUrqlClient';
import { toErrorMap } from '../utils/toErrorMap';

type FormValues = {
  usernameOrEmail: string;
  password: string;
};

const Login: FC<FormValues> = (): ReactElement => {
  const [, loginMut] = useLoginMutation(); // mutation hook from '@graphql-codegen/typescript-urql'
  const { register, handleSubmit, formState, setError, errors } = useForm<FormValues>();
  const { isSubmitting } = formState;
  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    const response = await loginMut(data);
    // success:
    if (response.data?.login.user) {
      console.log('Login succesfully as:', response.data.login.user);
      router.push('/');
    }
    // if no connection:
    else if (!response) console.log('Promise unresolved, check connection');
    // error handling:
    else if (response.error) console.log('Error occured in onSubmit:', response.error);
    else if (response.data?.login.errors) {
      console.log(toErrorMap(response.data.login.errors));
      const errorObj = toErrorMap(response.data.login.errors);
      if ('usernameOrEmail' in errorObj) setError('usernameOrEmail', { message: errorObj.usernameOrEmail });
      if ('password' in errorObj) setError('password', { message: errorObj.password });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <img
          className={styles.headerLogo}
          src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
          alt="Workflow"
        />
        <h2 className={styles.headerTitle}>Sign in to your account</h2>
      </div>

      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="usernameOrEmail" className={styles.usernameLabel}>
              Username or Email
            </label>
            <div className={styles.usernameInputContainer}>
              <input name="usernameOrEmail" ref={register({ required: true })} className={styles.usernameInputField} />
              {errors.usernameOrEmail && (
                <div className="text-red-500 text-sm font-bold">{errors.usernameOrEmail.message}</div>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="password" className={styles.passwordLabel}>
              Password
            </label>
            <div className={styles.passwordInputContainer}>
              <input name="password" ref={register({ required: true })} className={styles.passwordInputField} />
              {errors.password && <div className="text-red-500 text-sm font-bold">{errors.password.message}</div>}
            </div>
          </div>

          <div className="mt-6">
            {isSubmitting ? (
              <button type="submit" disabled={isSubmitting} className={styles.submitButton(isSubmitting)}>
                Sign in
              </button>
            ) : (
              <button type="submit" className={styles.submitButton(isSubmitting)}>
                Sign in
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(Login);
