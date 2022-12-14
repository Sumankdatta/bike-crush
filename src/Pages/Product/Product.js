import React from 'react';

const Product = ({ item,setProductName }) => {
    const {location,seller_name,buying_price,img,sell_price,title,used_time}=item;
    console.log(item)
    return (
       <div>
        
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img className='w-48' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='font-bold'>Years Of Use : {used_time}</p>
                <p className='font-bold'>Original Price : {buying_price}</p>
                <p className='font-bold'>Resale Price : {sell_price}</p>
                <p className='font-bold'>Location : {location}</p>
                <p className='font-bold'>Saller Name : {seller_name}</p>

                
                <div className="card-actions justify-end">
                    
                    <label onClick={()=>setProductName(item)} htmlFor="booking-modal" className="btn btn-primary">Booking Now</label>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Product;