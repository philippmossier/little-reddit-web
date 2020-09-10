import React, { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import * as styles from '../page-styles/register-styles';

type FormValues = {
   email: string;
   password: string;
};

const Register: FC = (): ReactElement => {
   const { register, handleSubmit, errors } = useForm<FormValues>();
   const onSubmit = (data: FormValues) => console.log(data);
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
                     <input name="email" ref={register({ required: true })} className={styles.emailInputField} />
                     {errors.email && <div className="text-red-500 font-bold text-sm">Please enter a email adress</div>}
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
