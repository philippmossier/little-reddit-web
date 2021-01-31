import React from 'react';
import NextLink from 'next/link';
import { useLogoutMutation, useMeQuery } from '../../generated/graphql';
import { useRouter } from 'next/router';

type NavBarProps = unknown;

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery({
    // only load query in browser (because cookie only works in browser and so we dont waste a request which we dont need)
    // Note: This gives browser Warning: Did not expect server HTML to contain...
    // pause: isServer(),
    // i use request policy 'cache-and-network' (default is cache-first) for this particular case because if we pause the server we get the same result
    // but we get a console warning that client and server is out of sync (because cookie only works in browser)
    // requestPolicy: 'cache-and-network', // use this line if neccessary
  });
  const router = useRouter();
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
        <button
          onClick={async () => {
            await logout();
            router.reload();
          }}
          disabled={logoutFetching}
          className="mx-2 text-white"
        >
          Logout
        </button>
      </>
    );
  }

  return (
    <nav className="bg-gray-800">
      <div className="flex items-center h-16">
        <div className="ml-auto mr-2">{body}</div>
      </div>
    </nav>
  );
};

export default NavBar;
