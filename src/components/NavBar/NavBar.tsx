import React from 'react';
import NextLink from 'next/link';
import { useMeQuery } from '../../generated/graphql';

type NavBarProps = unknown;

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();

  let body;
  // data is loading
  if (fetching) {
    body = null;
    // user not logged in
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <a className="mx-2 text-white">Login</a>
        </NextLink>
        <NextLink href="/register">
          <a className="mx-2 text-white">Register</a>
        </NextLink>
      </>
    );
    // user is logged in
  } else {
    body = (
      <>
        <a className="mx-2 text-white">{data.me.username}</a>
        <button className="mx-2 text-white">Logout</button>
      </>
    );
  }

  return (
    <nav className="bg-cool-gray-800">
      <div className="flex h-16 items-center">
        <div className="ml-auto mr-2">{body}</div>
      </div>
    </nav>
  );
};

export default NavBar;
