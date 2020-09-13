import classNames, { classnames, TTailwindString } from '../../tailwindcss-classnames';

export const container = classNames(
  'min-h-screen',
  'bg-gray-50',
  'flex',
  'flex-col',
  'justify-center',
  'py-12',
  'sm:px-6',
  'lg:px-8',
);
export const headerContainer = classNames('sm:mx-auto', 'sm:w-full', 'sm:max-w-md');
export const headerLogo = classNames('mx-auto', 'h-12', 'w-auto');
export const headerTitle = classNames(
  'mt-6',
  'text-center',
  'text-3xl',
  'leading-9',
  'font-extrabold',
  'text-gray-900',
);

export const formContainer = classNames(
  'mt-8',
  'sm:w-full',
  'sm:mx-auto',
  'sm:max-w-md',
  'bg-white',
  'py-8',
  'px-4',
  'shadow',
  'sm:rounded-lg',
  'sm:px-10',
);
export const usernameLabel = classNames('block', 'text-sm', 'font-medium', 'leading-5', 'text-gray-700');

export const usernameInputContainer = classNames('mt-1', 'rounded-md', 'shadow-sm');
export const usernameInputField = classNames(
  'appearance-none',
  'block',
  'w-full',
  'px-3',
  'py-2',
  'border',
  'border-gray-300',
  'rounded-md',
  'placeholder-gray-400',
  'focus:outline-none',
  'focus:shadow-outline-blue',
  'focus:border-blue-300',
  'transition',
  'duration-150',
  'ease-in-out',
  'sm:text-sm',
  'sm:leading-5',
);

export const passwordLabel = classNames('block', 'text-sm', 'font-medium', 'leading-5', 'text-gray-700');
export const passwordInputContainer = classNames('mt-1', 'rounded-md', 'shadow-sm');
export const passwordInputField = classNames(
  'appearance-none',
  'block',
  'w-full',
  'px-3',
  'py-2',
  'border',
  'border-gray-300',
  'rounded-md',
  'placeholder-gray-400',
  'focus:outline-none',
  'focus:shadow-outline-blue',
  'focus:border-blue-300',
  'transition',
  'duration-150',
  'ease-in-out',
  'sm:text-sm',
  'sm:leading-5',
);
export const disabledButton = classNames('opacity-25', 'bg-gray-100');
export const button = classNames(
  'w-full',
  'flex',
  'justify-center',
  'py-2',
  'px-4',
  'border',
  'border-transparent',
  'text-sm',
  'font-medium',
  'rounded-md',
  'text-white',
  'bg-indigo-600',
  'hover:bg-indigo-500',
  'focus:outline-none',
  'focus:border-indigo-700',
  'focus:shadow-outline-indigo',
  'active:bg-indigo-700',
  'transition',
  'duration-150',
  'ease-in-out',
);

export const submitButton = (disabled: boolean): TTailwindString =>
  classnames(button, {
    [disabledButton]: disabled,
  });
