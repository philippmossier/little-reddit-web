import { withUrqlClient } from 'next-urql';
import React, { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useForgotPasswordMutation } from '../generated/graphql';
import * as styles from '../page-styles/styles';
import createUrqlClient from '../utils/createUrqlClient';
import NextLink from 'next/link';

type FormValues = {
  email: string;
};

const ForgotPasswordPage: React.FC = (): ReactElement => {
  const [complete, setComplete] = useState(false);
  const [, forgotPasswordMut] = useForgotPasswordMutation();
  const { register, handleSubmit, formState, setError, errors } = useForm<FormValues>();
  const { isSubmitting } = formState;
  const onSubmit = async (data: FormValues) => {
    const response = await forgotPasswordMut(data);
    if (response.data?.forgotPassword) {
      setComplete(true);
      console.log('Email sent sucessfull:', response.data);
    }
    // if no connection
    else if (!response) console.log('Promise unresolved, check connection');
    // error handling:
    else if (response.error) {
      setError('email', { message: 'sending email failed, pls check spelling' });
    }
  };

  return complete ? (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="h-1/6 w-1/3 mx-12 bg-white rounded-md shadow">
        <div className="sm:p-6 px-4 py-5">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Done!</h3>
          <div className="max-w-xl mt-2 text-sm text-gray-500">
            <p>If an account with that email exists, we sent you an email to reset your password.</p>
          </div>
          <NextLink href="/">
            <div className="hover:text-indigo-500 mt-3 text-sm font-medium text-indigo-600 cursor-pointer">
              Go back to Home <span aria-hidden="true">&rarr;</span>
            </div>
          </NextLink>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <img
          className={styles.headerLogo}
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className={styles.headerTitle}>Forgot Password</h2>
      </div>

      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 mb-2">
            <label htmlFor="email" className={styles.label}>
              email
            </label>
            <div className={styles.inputContainer}>
              <input name="email" ref={register({ required: true })} className={styles.inputField} />
              {errors.email && <div className="text-sm font-bold text-red-500">{errors.email.message}</div>}
            </div>
          </div>

          <div className="mt-4">
            {isSubmitting ? (
              <button type="submit" disabled={isSubmitting} className={styles.submitButton(isSubmitting)}>
                forgot password
              </button>
            ) : (
              <button type="submit" className={styles.submitButton(isSubmitting)}>
                forgot password
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(ForgotPasswordPage);
