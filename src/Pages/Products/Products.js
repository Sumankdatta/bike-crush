import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
   
    const items = useLoaderData()
    console.log(items)
    return (
        <div>
            <div className='text-4xl text-bold text-center text-orange-600 mt-10 mb-24'>
            <h1>Select your best bike</h1>
        </div>
            <div className='grid grid-cols-3 my-20 cols-auto justify-items-center'>
            {
                items?.map(item=><Product item={item}></Product>)
            }
        </div>
        </div>
    );
};

export default Products;