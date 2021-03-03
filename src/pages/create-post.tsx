import React from 'react';
import { withUrqlClient } from 'next-urql';
import { useForm } from 'react-hook-form';
import { PostInput, useCreatePostMutation } from '../generated/graphql';
import * as styles from '../page-styles/styles';
import createUrqlClient from '../utils/createUrqlClient';
import { useRouter } from 'next/router';
import { Layout } from '../components/Layout/Layout';
import { useIsAuth } from '../utils/useIsAuth';

const CreatePost: React.FC = () => {
  const [, createPostMut] = useCreatePostMutation();
  const { register, handleSubmit, formState } = useForm<PostInput>();
  const { isSubmitting } = formState;
  const router = useRouter();
  useIsAuth();

  const onSubmit = async (data: PostInput) => {
    // success:
    const response = await createPostMut({ input: data });
    if (response.data?.createPost) {
      console.log('Post succesfully created:', response.data.createPost);
      router.push('/');
    }
    // if no connection:
    else if (!response) console.log('Promise unresolved, check connection');
    // global error handling (bad practice, better to handle them in one component):
    // else if (response.error) console.log('Error occured in onSubmit:', response.error);
  };

  return (
    <Layout>
      <div>
        <div className={styles.container}>
          <div className={styles.headerContainer}>
            <img
              className={styles.headerLogo}
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className={styles.headerTitle}>Create a Post !</h2>
          </div>

          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="title" className={styles.label}>
                  Title
                </label>
                <div className={styles.inputContainer}>
                  <input name="title" ref={register({ required: true })} className={styles.inputField} />
                </div>
              </div>

              <div className="mt-4 mb-2">
                <label htmlFor="text" className={styles.label}>
                  text
                </label>
                <div className={styles.inputContainer}>
                  <textarea name="text" ref={register({ required: true })} className={styles.inputField} />
                </div>
              </div>

              <div className="mt-4">
                {isSubmitting ? (
                  <button type="submit" disabled={isSubmitting} className={styles.submitButton(isSubmitting)}>
                    Create Post
                  </button>
                ) : (
                  <button type="submit" className={styles.submitButton(isSubmitting)}>
                    Create Post
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: false })(CreatePost);
