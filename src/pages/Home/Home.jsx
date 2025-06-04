import React from 'react';
import Banner from '../../components/Banner/Banner';
import AllLawyers from '../AllLawyers/AllLawyers';
import { useLoaderData } from 'react-router';
import Services from '../Services/Services';

const Home = () => {
    const lawyersData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <AllLawyers data={lawyersData}></AllLawyers>
            <Services></Services>
        </div>
    );
};

export default Home;