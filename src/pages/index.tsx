import { withUrqlClient } from 'next-urql';
import React, { ReactElement, FC } from 'react';
import NavBar from '../components/NavBar/NavBar';
import { usePostsQuery } from '../generated/graphql';
import createUrqlClient from '../utils/createUrqlClient';

const IndexPage: FC = (): ReactElement => {
  const [{ data }] = usePostsQuery();
  return (
    <>
      <NavBar />
      <div>Hello World</div>
      <br />
      {!data ? <div>loading ...</div> : data.posts.map((p) => <div key={p.id}>{p.title}</div>)}
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(IndexPage);
