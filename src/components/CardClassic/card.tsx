import React, { FC, ReactElement } from 'react';

const Card: FC = (): ReactElement => {
  return (
    <div className="p-4 md:flex">
      <div className="md:flex-shrink-0">
        <img
          className="rounded-lg md:w-56"
          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
          alt="Woman paying for a purchase"
        />
      </div>

      <div className="mt-4 md:ml-6 md:mt-0">
        <div className="text-indigo-600 text-sm font-bold tracking-wide uppercase">Marketing</div>
        <a href="/" className="block mt-1 text-gray-900 hover:underline text-lg font-semibold leading-tight">
          Finding customers for your new business
        </a>
        <p className="mt-2 text-gray-600">
          Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your
          first customers.
        </p>
      </div>
    </div>
  );
};
export default Card;
