import { classnames } from '../../../tailwindcss-classnames';

export const container = classnames('md:flex', 'p-4');

export const imageContainer = classnames('md:flex-shrink-0');

export const image = classnames('rounded-lg', 'md:w-56');

export const textContainer = classnames('mt-4', 'md:mt-0', 'md:ml-6');

export const label = classnames('uppercase', 'tracking-wide', 'text-sm', 'text-indigo-600', 'font-bold');

export const title = classnames(
  'block',
  'mt-1',
  'text-lg',
  'leading-tight',
  'font-semibold',
  'text-gray-900',
  'hover:underline',
);

export const description = classnames('mt-2', 'text-gray-600');
