import { cacheExchange, Resolver } from '@urql/exchange-graphcache';
import { dedupExchange, fetchExchange, Exchange, stringifyVariables } from 'urql';
import {
  LoginMutation,
  LogoutMutation,
  MeDocument,
  MeQuery,
  RegisterMutation,
  VoteMutationVariables,
} from '../generated/graphql';
import { betterUpdateQuery } from './betterUpdateQuery';
import { pipe, tap } from 'wonka';
import Router from 'next/router';
import gql from 'graphql-tag';
import { isServer } from './isServer';

const errorExchange: Exchange = ({ forward }) => (ops$) => {
  return pipe(
    forward(ops$),
    tap(({ error }) => {
      if (error?.message.includes('not authenticated')) {
        // outside of react we use global Router instead of the useRouter() hook
        console.log('Not authenticated, redirecting to /login ...');
        Router.replace('/login');
      }
      if (error) {
        console.log(error);
      }
    }),
  );
};

// Client side Resolver reads data from the cache and returns it
// modified version of urql SimplePagination
export const cursorPagination = (): Resolver => {
  return (_parent, fieldArgs, cache, info) => {
    const { parentKey: entityKey, fieldName } = info;
    const allFields = cache.inspectFields(entityKey);
    const fieldInfos = allFields.filter((info) => info.fieldName === fieldName);
    const size = fieldInfos.length;
    if (size === 0) {
      return undefined;
    }
    const fieldKey = `${fieldName}(${stringifyVariables(fieldArgs)})`;
    const isItInTheCache = cache.resolve(cache.resolve(entityKey, fieldKey) as string, 'posts');
    info.partial = !isItInTheCache;
    let hasMore = true;
    const results: string[] = [];
    fieldInfos.forEach((fi) => {
      const key = cache.resolve(entityKey, fi.fieldKey) as string;
      const data = cache.resolve(key, 'posts') as string[];
      const _hasMore = cache.resolve(key, 'hasMore');
      if (!_hasMore) {
        hasMore = _hasMore as boolean;
      }
      // console.log('data', hasMore, data);
      results.push(...data);
    });
    return {
      __typename: 'PaginatedPosts',
      hasMore,
      posts: results,
    };
  };
};

const createUrqlClient = (ssrExchange: any, ctx: any) => {
  let cookie = '';
  if (isServer()) {
    // log is shown in the terminal where `npm run dev` gots executed (nextJS logs)
    // console.log('ctx', ctx.req.headers.cookie);
    cookie = ctx.req.headers.cookie;
  }
  return {
    url: 'http://localhost:4000/graphql',
    fetchOptions: {
      credentials: 'include' as const,
      headers: cookie
        ? {
            cookie,
          }
        : undefined,
    },
    exchanges: [
      dedupExchange,
      cacheExchange({
        // client-side resolvers, runs whenever query is run so we can alter how the query result looks
        resolvers: {
          Query: {
            posts: cursorPagination(),
          },
        },
        updates: {
          Mutation: {
            vote: (_result, args, cache, info) => {
              const { postId, value } = args as VoteMutationVariables;
              const data = cache.readFragment(
                gql`
                  fragment __ on Post {
                    id
                    points
                    voteStatus
                  }
                `,
                { id: postId } as any,
              );
              console.log('data', data);
              if (data) {
                if (data.voteStatus === value) {
                  return;
                }
                const newPoints = (data.points as number) + (!data.voteStatus ? 1 : 2) * value;
                cache.writeFragment(
                  gql`
                    fragment __ on Post {
                      points
                      voteStatus
                    }
                  `,
                  { id: postId, points: newPoints, voteStatus: value } as any,
                );
              }
            },
            createPost: (_result, args, cache, info) => {
              // Invalidate the cache and a specific query when a new post is created,
              // so posts get refetched and the newest posts are always on the top.
              // To invalidate a query we have to invalidate all the arguments on the specific query
              const allFields = cache.inspectFields('Query');
              const fieldInfos = allFields.filter((info) => info.fieldName === 'posts');
              fieldInfos.forEach((fi) => {
                cache.invalidate('Query', 'posts', fi.arguments || {});
              });
            },

            login: (_result, args, cache, info) => {
              betterUpdateQuery<LoginMutation, MeQuery>(cache, { query: MeDocument }, _result, (result, query) => {
                if (result.login.errors) {
                  return query;
                } else {
                  return {
                    me: result.login.user,
                  };
                }
              });
            },
            register: (_result, args, cache, info) => {
              betterUpdateQuery<RegisterMutation, MeQuery>(cache, { query: MeDocument }, _result, (result, query) => {
                if (result.register.errors) {
                  return query;
                } else {
                  return {
                    me: result.register.user,
                  };
                }
              });
            },
            logout: (_result, args, cache, info) => {
              betterUpdateQuery<LogoutMutation, MeQuery>(cache, { query: MeDocument }, _result, () => ({
                me: null,
              }));
            },
          },
        },
      }),
      errorExchange,
      ssrExchange,
      fetchExchange,
    ],
  };
};

export default createUrqlClient;
