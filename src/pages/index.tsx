import { withUrqlClient } from 'next-urql';
import React, { ReactElement, FC } from 'react';
import { Layout } from '../components/Layout/Layout';
import { usePostsQuery } from '../generated/graphql';
import createUrqlClient from '../utils/createUrqlClient';
import NextLink from 'next/link';

const IndexPage: FC = (): ReactElement => {
  const [{ data }] = usePostsQuery();
  return (
    <Layout>
      <NextLink href="/create-post">
        <a className="mx-2 text-black">Create Post</a>
      </NextLink>
      <div>Hello World</div>
      <br />
      {!data ? <div>loading ...</div> : data.posts.map((p) => <div key={p.id}>{p.title}</div>)}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(IndexPage);
