import React, { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { CombinedError, useMutation } from 'urql';
import * as styles from '../page-styles/styles';

type FormValues = {
  username: string;
  password: string;
};

type ResponseObject = {
  data?: {
    register: {
      errors?: [
        {
          field: string;
          message: string;
        },
      ];
      user?: {
        id: number;
        username: string;
        updatedAt: string;
        createdAt: string;
      };
    };
  };
  error?: CombinedError;
};

const REGISTER_MUT = `
mutation Register($username: String !, $password: String! ) {
  register (options: {username: $username, password: $password }){
    errors{
      field
      message
    } 
    user {
      id
      username
      createdAt
      updatedAt
    }
  }
}
`;

const Register: FC = (): ReactElement => {
  const [, registerMut] = useMutation(REGISTER_MUT);
  const { register, handleSubmit, errors, formState } = useForm<FormValues>();
  const { isSubmitting } = formState;

  const onSubmit = async (data: FormValues) => {
    const result: ResponseObject = await registerMut(data);
    if (!result) console.log('No response from registerMutation. Cant get access to ResponseObject, check connection');
    if (result && !result.error && !result.data?.register.errors) console.log('Successfull registered:', result.data);
    if (result.error) console.log('Error occured in onSubmit:', result.error);
    if (result.data?.register.errors) console.log('register error', result.data.register.errors);
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
              {errors.username && <div className="text-red-500 font-bold text-sm">Please enter a username adress</div>}
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="password" className={styles.passwordLabel}>
              Password
            </label>
            <div className={styles.passwordInputContainer}>
              <input name="password" ref={register({ required: true })} className={styles.passwordInputField} />
              {errors.password && <div className="text-red-500 font-bold text-sm">Please enter a password</div>}
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

export default Register;
