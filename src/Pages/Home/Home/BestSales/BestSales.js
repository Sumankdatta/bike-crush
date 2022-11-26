import React, { useEffect, useState } from 'react';
import BestSalesCard from './BestSalesCard';

const BestSales = () => {

    const [popular, setPopular] = useState([])
    useEffect(() => {
        fetch('popular.json')
            .then(res => res.json())
            .then(data => setPopular(data))
    }, [])
    return (
        <div className='my-20'>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-600'>Best Sales</p>
                <h2 className='text-4xl font-semibold'>Choose Your Best Bike</h2>
                <p>We break down things to consider when choosing a bike <br /> Figure out your bike type: The right bike for you will depend on where and how you plan to ride.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20 my-10 gap-12'>

                {
                    popular.map(popu => <BestSalesCard

                        key={popu._id}
                        popu={popu}
                    ></BestSalesCard>
                    )
                }

            </div>

        </div>
    );
};

export default BestSales;