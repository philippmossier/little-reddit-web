import React, { ReactElement, FC } from 'react';
import Card from '../components/CardWithStyles/card';
import NavBar from '../components/NavBar/NavBar';

const IndexPage: FC = (): ReactElement => {
  return (
    <>
      <NavBar />
      <Card />
    </>
  );
};

export default IndexPage;
