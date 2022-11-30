import React from 'react';

const BannerItems = ({slide}) => {

    const {image,id,prev,next}=slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
    
    
   
        <div className="carusal-img">
        <img src={image} alt="" className='w-screen max-h-screen' />
        </div>
        
         
         
         <div className="absolute flex justify-between transform -translate-y-1/2 left-24 top-1/4">
           <h1 className='lg:text-5xl text-3xl font-bold text-white banner'>Perfect Way To Buy <br /> and Sell Bike On Our <br /> Platform</h1>
         </div>
         <div className="absolute flex justify-between transform -translate-y-1/2 left-24 top-1/2">
           <p className='text-xl text-white banneritems'>Want to Sell your bike? List your used bike for sale at BikeCrush <br /> and get Best Price Deals for your bike from 100% Verified and Genuine Buyers.
           </p>
         </div>
         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
           <a href={`#slide${prev}`} className="btn btn-circle">❮</a> 
           <a href={`#slide${next}`} className="btn btn-circle">❯</a>
         </div>
       </div>
    );
};

export default BannerItems;