import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import BestSales from './BestSales/BestSales';
import Category from './Category/Category';

const Home = () => {
    useTitle('Home')
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <BestSales></BestSales>
        </div>
    );
};

export default Home;