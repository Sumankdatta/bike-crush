import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import BestSales from './BestSales/BestSales';
import Category from './Category/Category';
import PopularSection from './PopularSection/PopularSection';

const Home = () => {
    useTitle('Home')
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularSection></PopularSection>
           <BestSales></BestSales>
        </div>
    );
};

export default Home;