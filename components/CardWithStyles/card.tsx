import React, { FC, ReactElement } from 'react';
import * as styles from './styles';

interface cardProps {}

const Card: FC<cardProps> = ({}: cardProps): ReactElement => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img
                    className={styles.image}
                    src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
                    alt="Woman paying for a purchase"
                />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.label}>Marketing</div>
                <a href="/" className={styles.title}>
                    Finding customers for your new business
                </a>
                <p className={styles.description}>
                    Getting a new business off the ground is a lot of hard work. Here are five ideas
                    you can use to find your first customers.
                </p>
            </div>
        </div>
    );
};
export default Card;
