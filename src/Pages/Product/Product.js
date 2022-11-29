import React from 'react';

const Product = ({ item,setProductName }) => {
    const {brand,buying_price,img,sell_price,title,used_time}=item;
    console.log(item)
    return (
       <div>
        
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img className='w-48' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Used Time : {used_time}</p>
                <p>Buying Price : {buying_price}</p>
                <p>Selling Price : {sell_price}</p>
                
                <div className="card-actions justify-end">
                    
                    <label onClick={()=>setProductName(item)} htmlFor="booking-modal" className="btn btn-primary">Booking Now</label>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Product;