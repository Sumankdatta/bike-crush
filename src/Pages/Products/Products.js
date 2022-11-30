import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookinModal/BookingModal';
import Product from '../Product/Product';

const Products = () => {
    const [productName,setProductName]=useState(null)
    const items = useLoaderData()
    console.log(items)
    return (
        <div>
            <div className='text-4xl text-bold text-center text-orange-600 mt-10 mb-24'>
                <h1>Select your best bike</h1>
            </div>
            <div className='grid grid-cols-3 my-40 cols-auto justify-items-center'>
                {
                    items?.map(item => <Product 
                        item={item}
                        key={item._id}
                        setProductName={setProductName}
                    ></Product>)
                }
            </div>
            {productName &&
                <BookingModal
                productName={productName}
                setProductName={setProductName}
                ></BookingModal>
            }
        </div>
    );
};

export default Products;