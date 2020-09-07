import React, { ReactElement, FC } from 'react';
import Register from './register';
// import Card from '../components/CardClassic/card';
// import Card from '../components/CardWithStyles/card';
// import Card from '../components/CardWithElements/card';

const IndexPage: FC = (): ReactElement => {
    return (
        <>
            <Register />
            {/* <Card /> */}
        </>
    );
};

export default IndexPage;
