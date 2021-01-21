import { withUrqlClient } from 'next-urql';
import React, { ReactElement, FC } from 'react';
import { Layout } from '../components/Layout/Layout';
import { usePostsQuery } from '../generated/graphql';
import createUrqlClient from '../utils/createUrqlClient';
import NextLink from 'next/link';

const IndexPage: FC = (): ReactElement => {
  const [{ data }] = usePostsQuery({ variables: { limit: 10 } });
  return (
    <Layout>
      <div className="p-6">
        <NextLink href="/create-post">
          <a className="px-4 py-2 text-black bg-yellow-500 border-solid rounded-lg shadow-sm">Create Post</a>
        </NextLink>
      </div>

      <div className="px-4">
        {!data ? (
          <div>loading ...</div>
        ) : (
          data.posts.map((p) => (
            <div className="p-6 border-2 border-solid shadow-md" key={p.id}>
              <h3 className="text-xl">{p.title}</h3>
              <p className="mt-4">{p.text}</p>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(IndexPage);
