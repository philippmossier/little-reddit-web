import { withUrqlClient } from 'next-urql';
import React, { ReactElement, FC, useState } from 'react';
import { Layout } from '../components/Layout/Layout';
import { usePostsQuery } from '../generated/graphql';
import createUrqlClient from '../utils/createUrqlClient';
import NextLink from 'next/link';
import UpvoteSection from '../components/UpvoteSection';
import EditDeletePostButtons from '../components/EditDeletePostButtons';

const Index: FC = (): ReactElement => {
  const [variables, setVariables] = useState({
    limit: 15,
    cursor: null as string | null,
  });
  const [{ data, fetching }] = usePostsQuery({ variables });
  // TODO: fetching is always false, urql does not tell us when data is fetching with ur current cache setup on createUrqlClient.ts
  return (
    <Layout>
      <div className="px-4">
        {!fetching && !data && <h1>You got no posts for some reason</h1>}

        {!data && fetching ? (
          <div>loading ...</div>
        ) : (
          data!.posts.posts.map((p) =>
            !p ? null : (
              <div
                className="md:w-4/5 lg:w-4/6 flex items-center p-4 m-auto mt-8 border-2 border-solid shadow-md"
                key={p.id}
              >
                <UpvoteSection post={p} />
                <div className="flex-1">
                  <NextLink href="/post/[id]" as={`/post/${p.id}`}>
                    <h3 className="hover:underline text-2xl font-bold cursor-pointer">{p.title}</h3>
                  </NextLink>
                  <span>Posted by: {p.creator.username}</span>
                  <div className="mt-4">{p.textSnippet}</div>
                </div>
                <EditDeletePostButtons id={p.id} creatorId={p.creator.id} />
              </div>
            ),
          )
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
