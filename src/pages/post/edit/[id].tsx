import React from 'react';
import { withUrqlClient } from 'next-urql';
import createUrqlClient from '../../../utils/createUrqlClient';
import {
  PostInput,
  UpdatePostMutationVariables,
  usePostQuery,
  useUpdatePostMutation,
} from '../../../generated/graphql';
import { useForm } from 'react-hook-form';
import { Layout } from '../../../components/Layout/Layout';
import * as styles from '../../../page-styles/styles';
import { useGetIntId } from '../../../utils/useGetIntId';
import { useRouter } from 'next/router';

// Note: We do not have to update the cache after updatePostMutation because we did not really update.
// After we edit a post we get a new post object back (so urql autoupdates all fields which are in the useUpdatePost.graphql file)
const EditPost: React.FC = () => {
  const router = useRouter();
  const intId = useGetIntId();
  const [{ data, fetching }] = usePostQuery({
    pause: intId === -1,
    variables: {
      id: intId,
    },
  });

  const [, updatePost] = useUpdatePostMutation();

  const { register, handleSubmit, formState } = useForm<PostInput>({
    defaultValues: { title: data?.post?.title, text: data?.post?.text },
  });

  if (fetching) {
    return <div>Loading ...</div>;
  }

  if (!data?.post) {
    return (
      <Layout>
        <div>Could not find post </div>
      </Layout>
    );
  }

  const onSubmit = async (data: UpdatePostMutationVariables) => {
    // success:
    const response = await updatePost({ id: intId, text: data.text, title: data.title });
    if (response.data?.updatePost) {
      console.log('Post succesfully edited:', response.data.updatePost);
      router.back();
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
            <h2 className={styles.headerTitle}>Edit your Post</h2>
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
                {formState.isSubmitting ? (
                  <button
                    type="submit"
                    disabled={formState.isSubmitting}
                    className={styles.submitButton(formState.isSubmitting)}
                  >
                    Edit Post
                  </button>
                ) : (
                  <button type="submit" className={styles.submitButton(formState.isSubmitting)}>
                    Edit Post
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

export default withUrqlClient(createUrqlClient, { ssr: false })(EditPost);
