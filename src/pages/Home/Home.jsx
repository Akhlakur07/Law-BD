import React from 'react';
import Banner from '../../components/Banner/Banner';
import AllLawyers from '../AllLawyers/AllLawyers';
import { useLoaderData } from 'react-router';

const Home = () => {
    const lawyersData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <AllLawyers data={lawyersData}></AllLawyers>
        </div>
    );
};

export default Home;