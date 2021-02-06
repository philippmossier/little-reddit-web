import React from 'react';
import NextLink from 'next/link';
import { useLogoutMutation, useMeQuery } from '../../generated/graphql';
import { useRouter } from 'next/router';

const NavBar: React.FC<React.ReactNode> = () => {
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
      <div className="flex">
        <div>
          <NextLink href="/create-post">
            <button
              type="submit"
              className="hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md"
            >
              Create Post
            </button>
          </NextLink>
        </div>
        <a className="m-auto mx-4 text-white">{data.me.username}</a>
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
      </div>
    );
  }

  return (
    <nav className="bg-gray-800">
      <div className="md:w-4/5 lg:w-4/6 flex justify-between p-4 m-auto">
        <NextLink href="/">
          <a className="hover:underline ml-4 text-3xl font-bold text-yellow-600">Readit</a>
        </NextLink>
        <div>{body}</div>
      </div>
    </nav>
  );
};

export default NavBar;
