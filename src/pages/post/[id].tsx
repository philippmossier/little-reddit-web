import { withUrqlClient } from 'next-urql';
import React from 'react';
import { Layout } from '../../components/Layout/Layout';
import createUrqlClient from '../../utils/createUrqlClient';
import { useGetPostFromUrl } from '../../utils/useGetPostFromUrl';

const Post: React.FC = ({}) => {
  const [{ data, error, fetching }] = useGetPostFromUrl();

  if (fetching) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data?.post) {
    return (
      <Layout>
        <div>Could not find post </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="md:w-4/5 lg:w-4/6 flex flex-col content-center p-2 m-auto mt-8">
        <h1 className="pb-4 text-2xl font-bold">{data?.post?.title}</h1>
        <p className="">{data?.post?.text}</p>
      </div>
    </Layout>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(Post);
