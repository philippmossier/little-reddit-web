import React, { useState } from 'react';
import { PostSnippetFragment, useVoteMutation } from '../generated/graphql';

type UpvoteSectionProps = {
  // post: PostsQuery['posts']['posts'][0]; // without fragment
  post: PostSnippetFragment;
};

const UpvoteSection: React.FC<UpvoteSectionProps> = ({ post }) => {
  const [loadingState, setLoadingState] = useState<'upvote-loading' | 'downvote-loading' | 'not-loading'>(
    'not-loading',
  );
  const [{ fetching }, vote] = useVoteMutation();
  return (
    <div className="flex flex-col items-center justify-center mr-4">
      {loadingState === 'not-loading' ? (
        <button
          onClick={async () => {
            setLoadingState('upvote-loading');
            await vote({
              postId: post.id,
              value: 1,
            });
            setLoadingState('not-loading');
          }}
          className="hover:text-gray-900 focus:outline-none text-gray-500"
        >
          <i aria-hidden className="fas fa-chevron-up" />
        </button>
      ) : (
        <button type="button" disabled>
          <i className="animate-spin fas fa-spinner" />
        </button>
      )}

      <span className="px-2">{post.points}</span>
      {loadingState === 'not-loading' ? (
        <button
          onClick={async () => {
            setLoadingState('upvote-loading');
            await vote({
              postId: post.id,
              value: -1,
            });
            setLoadingState('not-loading');
          }}
          className="hover:text-gray-900 focus:outline-none text-gray-500"
        >
          <i aria-hidden className="fas fa-chevron-down " />
        </button>
      ) : (
        <button type="button" disabled>
          <i className="animate-spin fas fa-spinner" />
        </button>
      )}
    </div>
  );
};

export default UpvoteSection;
