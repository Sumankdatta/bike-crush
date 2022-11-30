import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/image/banner.jpg'
import useTitle from '../../../../hooks/useTitle';

const Category = () => {
    useTitle('category')

    const [categories, setCategories] = useState([])
    console.log(categories)

    useEffect(() => {
        fetch('https://bike-sale-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <div >
                <h1 className='text-4xl text-bold text-center mt-20'>Select Your Best Second-Hand <br /> Bike By Category</h1>
                <p className='text-xl text-bold mt-5 text-orange-600 text-center'>Click Your favorite brand and choose your dream bike</p>
            </div>
            <div className='grid grid-cols-3 cols-auto justify-items-center text-4xl mt-32 text-bold'>
            {
                    categories.map(category=> <p key={category._id}>
                        
                        <Link className='bg-orange-600 text-white p-10 mt-10' to={`/category/${category.category_id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Category;