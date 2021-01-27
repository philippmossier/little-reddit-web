import React from 'react';
import { PostsQuery } from '../generated/graphql';

type UpvoteSectionProps = {
  post: PostsQuery['posts']['posts'][0];
};

const UpvoteSection: React.FC<UpvoteSectionProps> = ({ post }) => {
  return (
    <div className="flex flex-col items-center justify-center mr-4">
      <button onClick={() => console.log('fwed')} className="hover:text-gray-900 text-gray-500">
        <i aria-hidden className="fas fa-chevron-up" />
      </button>
      <span className="px-2">{post.points}</span>
      <button onClick={() => console.log('fwasde')} className="hover:text-gray-900 text-gray-500">
        <i aria-hidden className="fas fa-chevron-down " />
      </button>
    </div>
  );
};

export default UpvoteSection;
