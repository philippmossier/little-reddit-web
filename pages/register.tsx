import React, { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import * as styles from './register-styles';

interface formValues {
   flat: string;
   nested: {
      object: { test: string };
      array: { test: boolean }[];
   };
}

const Register: FC = (): ReactElement => {
   const { register, handleSubmit } = useForm<formValues>();
   const onSubmit = (data) => console.log(data);
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
                  <label htmlFor="email" className={styles.emailLabel}>
                     Email address
                  </label>
                  <div className={styles.emailInputContainer}>
                     <input name="email" ref={register} className={styles.emailInputField} />
                  </div>
               </div>
               <div className="mt-6">
                  <label htmlFor="password" className={styles.passwordLabel}>
                     Password
                  </label>
                  <div className={styles.passwordInputContainer}>
                     <input name="password" ref={register} className={styles.passwordInputField} />
                  </div>
               </div>
               <div className="mt-6">
                  <button type="submit" className={styles.submitButton}>
                     Sign in
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Register;
