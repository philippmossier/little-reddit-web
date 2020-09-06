import React, { FC, ReactNode, ReactElement } from 'react';
import { classnames } from 'tailwindcss-classnames';

interface styleProps {
    children?: ReactNode;
    url?: string;
    description?: string;
}

export const Container: FC<styleProps> = ({ children }: styleProps): ReactElement => (
    <div className={classnames('md:flex', 'p-4')}>{children}</div>
);

export const ImageWrapper: FC<styleProps> = ({ children }: styleProps) => (
    <div className={classnames('md:flex-shrink-0')}>{children}</div>
);

export const Image: FC<styleProps> = ({ url, description }: styleProps) => (
    <img className={classnames('rounded-lg', 'md:w-56')} src={url} alt={description} />
);

export const ContentContainer: FC<styleProps> = ({ children }: styleProps) => (
    <div className={classnames('mt-4', 'md:mt-0', 'md:ml-6')}>{children}</div>
);

export const Label: FC<styleProps> = ({ children }: styleProps) => (
    <div
        className={classnames(
            'uppercase',
            'tracking-wide',
            'text-sm',
            'text-indigo-600',
            'font-bold',
        )}
    >
        {children}
    </div>
);

export const TitleLink: FC<styleProps> = ({ url, children }: styleProps) => (
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

export const Description: FC<styleProps> = ({ children }: styleProps) => (
    <p className={classnames('mt-2', 'text-gray-600')}>{children}</p>
);
