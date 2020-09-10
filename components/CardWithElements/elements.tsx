import React, { FC, ReactNode, ReactElement } from 'react';
import { classnames } from '../../tailwindcss-classnames';

interface styleProps {
   children?: ReactNode;
   url?: string;
   description?: string;
}

const Container: FC<styleProps> = ({ children }: styleProps): ReactElement => (
   <div className={classnames('md:flex', 'p-4')}>{children}</div>
);

const ImageWrapper: FC<styleProps> = ({ children }: styleProps): ReactElement => (
   <div className={classnames('md:flex-shrink-0')}>{children}</div>
);

const Image: FC<styleProps> = ({ url, description }: styleProps): ReactElement => (
   <img className={classnames('rounded-lg', 'md:w-56')} src={url} alt={description} />
);

const ContentContainer: FC<styleProps> = ({ children }: styleProps): ReactElement => (
   <div className={classnames('mt-4', 'md:mt-0', 'md:ml-6')}>{children}</div>
);

const Label: FC<styleProps> = ({ children }: styleProps): ReactElement => (
   <div className={classnames('uppercase', 'tracking-wide', 'text-sm', 'text-indigo-600', 'font-bold')}>{children}</div>
);

const TitleLink: FC<styleProps> = ({ url, children }: styleProps): ReactElement => (
   <a
      href={url}
      className={classnames(
         'block',
         'mt-1',
         'text-lg',
         'leading-tight',
         'font-semibold',
         'text-gray-900',
         'hover:underline',
      )}
   >
      {children}
   </a>
);

const Description: FC<styleProps> = ({ children }: styleProps): ReactElement => (
   <p className={classnames('mt-2', 'text-gray-600')}>{children}</p>
);

export { Container, ImageWrapper, Image, ContentContainer, Label, TitleLink, Description };
