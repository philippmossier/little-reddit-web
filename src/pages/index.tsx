import { withUrqlClient } from 'next-urql';
import React, { ReactElement, FC } from 'react';
import { Layout } from '../components/Layout/Layout';
import { usePostsQuery } from '../generated/graphql';
import createUrqlClient from '../utils/createUrqlClient';
import NextLink from 'next/link';

const IndexPage: FC = (): ReactElement => {
  const [{ data, fetching }] = usePostsQuery({ variables: { limit: 10 } });
  return (
    <Layout>
      <div className="lg:w-1/2 flex items-center justify-between p-6 m-auto">
        <h1 className="text-5xl font-bold text-red-600">Little Rabbit</h1>
        <NextLink href="/create-post">
          <a className="px-4 py-2 text-black bg-yellow-500 border-solid rounded-lg shadow-sm">Create Post</a>
        </NextLink>
      </div>

      <div className="px-4">
        {!data ? (
          <div>loading ...</div>
        ) : (
          data.posts.map((p) => (
            <div className="lg:w-1/2 p-4 m-auto mt-8 border-2 border-solid shadow-md" key={p.id}>
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="mt-4">{p.text}</p>
            </div>
          ))
        )}
      </div>
      {data ? (
        <div className="flex">
          {fetching ? (
            <div className="h-2 m-auto">
              <span className="relative block w-0 h-0 mx-auto my-0 text-green-500 opacity-75"></span>
            </div>
          ) : (
            <button type="button" className="bg-rose-600 ..." disabled>
              <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                Todo add spinning svg
              </svg>
              Processing
            </button>
          )}
        </div>
      ) : null}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(IndexPage);
