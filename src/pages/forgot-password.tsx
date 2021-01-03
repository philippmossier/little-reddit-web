import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as styles from '../page-styles/styles';

type FormValues = {
  email: string;
};

const ForgotPassword: React.FC<any> = ({}) => {
  const { register, handleSubmit, formState, setError, errors } = useForm<FormValues>();
  const { isSubmitting } = formState;
  const router = useRouter();
  const onSubmit = async (data: FormValues) => {
    console.log('a');
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <img
          className={styles.headerLogo}
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className={styles.headerTitle}>Reset password</h2>
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

export default ForgotPassword;
