import React, { FC, ReactElement } from 'react';
import {
    Container,
    ImageWrapper,
    Image,
    ContentContainer,
    Label,
    TitleLink,
    Description,
} from './elements';

const Card: FC = (): ReactElement => {
    return (
        <Container>
            <ImageWrapper>
                <Image
                    url="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
                    description="Woman paying for a purchase"
                />
            </ImageWrapper>
            <ContentContainer>
                <Label>Marketing</Label>
                <TitleLink url="/">Finding customers for your new business</TitleLink>
                <Description>
                    Getting a new business off the ground is a lot of hard work. Here are five ideas
                    you can use to find your first customers.
                </Description>
            </ContentContainer>
        </Container>
    );
};
export default Card;
