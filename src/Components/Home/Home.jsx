import React from 'react';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Career | Home </title>
            </Helmet>
            <Banner />
            <CategoryList />
            <FeaturedJobs />
        </div>
    );
};

export default Home;