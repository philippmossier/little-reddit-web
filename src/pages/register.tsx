import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRegisterMutation } from '../generated/graphql';
import * as styles from '../page-styles/styles';
import createUrqlClient from '../utils/createUrqlClient';
import { toErrorMap } from '../utils/toErrorMap';

type FormValues = {
  username: string;
  email: string;
  password: string;
};

const Register: React.FC = () => {
  const [, registerMut] = useRegisterMutation();
  const { register, handleSubmit, formState, setError, errors } = useForm<FormValues>();
  const { isSubmitting } = formState;
  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    const response = await registerMut({ options: data });
    // success:
    if (response.data?.register.user) {
      console.log('Successfull registered:', response.data);
      router.push('/');
    }
    // if no connection:
    else if (!response) console.log('Promise unresolved, check connection');
    // global error:
    //   Its better to catch all global errors through one global function,
    //   like we do with errorExchange in createUrqlClient.ts)
    else if (response.error) console.log('Error occured in onSubmit:', response.error);
    // onSubmit form error:
    else if (response.data?.register.errors) {
      console.log(toErrorMap(response.data.register.errors));
      const errorObj = toErrorMap(response.data.register.errors);
      if ('username' in errorObj) setError('username', { message: errorObj.username });
      if ('email' in errorObj) setError('email', { message: errorObj.email });
      if ('password' in errorObj) setError('password', { message: errorObj.password });
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
        <h2 className={styles.headerTitle}>Register a account</h2>
      </div>

      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <div className={styles.inputContainer}>
              <input name="username" ref={register({ required: false })} className={styles.inputField} />
              {errors.username && <div className="text-sm font-bold text-red-500">{errors.username.message}</div>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <div className={styles.inputContainer}>
              <input name="email" ref={register({ required: false })} className={styles.inputField} />
              {errors.email && <div className="text-sm font-bold text-red-500">{errors.email.message}</div>}
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <div className={styles.inputContainer}>
              <input name="password" ref={register({ required: true })} className={styles.inputField} />
              {errors.password && <div className="text-sm font-bold text-red-500">{errors.password.message}</div>}
            </div>
          </div>

          <div className="mt-6">
            {isSubmitting ? (
              <button type="submit" disabled={isSubmitting} className={styles.submitButton(isSubmitting)}>
                Register
              </button>
            ) : (
              <button type="submit" className={styles.submitButton(isSubmitting)}>
                Register
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default withUrqlClient(createUrqlClient)(Register);
