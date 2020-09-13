import { useRouter } from 'next/dist/client/router';
import React, { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../generated/graphql';
import * as styles from '../page-styles/styles';
import { toErrorMap } from '../utils/toErrorMap';

type FormValues = {
  username: string;
  password: string;
};

const Login: FC<FormValues> = (): ReactElement => {
  const [, loginMut] = useLoginMutation(); // mutation hook from '@graphql-codegen/typescript-urql'
  const { register, handleSubmit, formState, setError, errors } = useForm<FormValues>();
  const { isSubmitting } = formState;
  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    const response = await loginMut({ options: data });
    // if no connection
    if (!response) console.log('Promise unresolved, check connection');
    if (response.error) console.log('Error occured in onSubmit:', response.error);

    if (response.data?.login.errors) {
      console.log(toErrorMap(response.data.login.errors));
      const errorObj = toErrorMap(response.data.login.errors);
      if ('username' in errorObj) setError('username', { message: errorObj.username });
      if ('password' in errorObj) setError('password', { message: errorObj.password });
    } else if (response.data?.login.user) {
      console.log('Login succesfully as:', response.data.login.user);
      router.push('/');
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
            <label htmlFor="username" className={styles.usernameLabel}>
              Username
            </label>
            <div className={styles.usernameInputContainer}>
              <input name="username" ref={register({ required: true })} className={styles.usernameInputField} />
              {errors.username && <div className="text-red-500 font-bold text-sm">{errors.username.message}</div>}
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="password" className={styles.passwordLabel}>
              Password
            </label>
            <div className={styles.passwordInputContainer}>
              <input name="password" ref={register({ required: true })} className={styles.passwordInputField} />
              {errors.password && <div className="text-red-500 font-bold text-sm">{errors.password.message}</div>}
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

export default Login;
