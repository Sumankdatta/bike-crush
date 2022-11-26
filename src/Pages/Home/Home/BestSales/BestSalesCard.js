import React from 'react';

const BestSalesCard = ({popu}) => {
    const {img,title}=popu;
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
        <figure><img className='' src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          
          
        </div>
        
      </div>
    );
};

export default BestSalesCard;