import React from 'react';
import NextLink from 'next/link';
import { useDeletePostMutation, useMeQuery } from '../generated/graphql';

interface EditDeletePostButtonsProps {
  id: number;
  creatorId: number;
  className?: string;
}

const EditDeletePostButtons: React.FC<EditDeletePostButtonsProps> = ({ id, creatorId, className }) => {
  // we can use the meQuery in multiple places and it only runs once because urql caches it
  const [{ data: meData }] = useMeQuery();

  const [, deletePost] = useDeletePostMutation();

  if (meData?.me?.id !== creatorId) {
    return null;
  }

  return (
    <div className={`${className}`}>
      <NextLink href="/post/edit/[id]" as={`/post/edit/${id}`}>
        <button className="hover:bg-gray-300 flex-2 w-8 h-8 mr-4 bg-gray-200 rounded" type="button">
          <i className="far fa-edit" aria-hidden />
        </button>
      </NextLink>
      <button
        className="hover:bg-gray-300 flex-2 w-8 h-8 bg-gray-200 rounded"
        type="button"
        onClick={() => deletePost({ id })}
      >
        <i className="fas fa-trash" aria-hidden />
      </button>
    </div>
  );
};

export default EditDeletePostButtons;
