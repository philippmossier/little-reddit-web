import { withUrqlClient } from 'next-urql';
import React, { ReactElement, FC, useState } from 'react';
import { Layout } from '../components/Layout/Layout';
import { usePostsQuery } from '../generated/graphql';
import createUrqlClient from '../utils/createUrqlClient';
import NextLink from 'next/link';
import UpvoteSection from '../components/UpvoteSection';

const Index: FC = (): ReactElement => {
  const [variables, setVariables] = useState({
    limit: 15,
    cursor: null as string | null,
  });
  const [{ data, fetching }] = usePostsQuery({ variables });
  // TODO: fetching is always false, urql does not tell us when data is fetching with ur current cache setup on createUrqlClient.ts
  return (
    <Layout>
      <div className="md:w-4/5 lg:w-4/6 flex items-center justify-between p-6 m-auto">
        <h1 className="text-5xl font-bold text-red-600">Little Rabbit</h1>
        <NextLink href="/create-post">
          <a className="px-4 py-2 text-black bg-yellow-500 border-solid rounded-lg shadow-sm">Create Post</a>
        </NextLink>
      </div>

      <div className="px-4">
        {!fetching && !data && <h1>You got no posts for some reason</h1>}

        {!data ? (
          <div>loading ...</div>
        ) : (
          data.posts.posts.map((p) => (
            <div className="md:w-4/5 lg:w-4/6 flex p-4 m-auto mt-8 border-2 border-solid shadow-md" key={p.id}>
              <UpvoteSection post={p} />
              <div>
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <span>Posted by: {p.creator.username}</span>
                <div className="mt-4">{p.textSnippet}</div>
                <div className="mt-4">{p.id}</div>
              </div>
            </div>
          ))
        )}
      </div>
      {data && data.posts.hasMore ? (
        <div className="flex">
          {fetching ? (
            <button
              type="button"
              className="px-4 py-2 m-auto my-4 font-bold text-black bg-gray-300 rounded-md shadow-sm cursor-not-allowed"
              disabled
            >
              <i className="animate-spin fas fa-spinner"></i>
              <span> Processing</span>
            </button>
          ) : (
            <button
              onClick={() =>
                setVariables({
                  limit: variables.limit,
                  cursor: data.posts.posts[data.posts.posts.length - 1].createdAt,
                })
              }
              className="px-4 py-2 m-auto my-4 font-bold text-black bg-gray-300 rounded-md shadow-sm"
            >
              Load more
            </button>
          )}
        </div>
      ) : null}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
