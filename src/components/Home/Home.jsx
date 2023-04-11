import React from 'react';
import Body from '../Body/Body';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Body data={data}></Body>
        </div>
    );
};

export default Home;