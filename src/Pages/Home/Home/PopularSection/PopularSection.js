import React from 'react';
import vaspa from '../../../../assets/image/vaspa.jpg'

const PopularSection = () => {
    return (
        <section className='max-h-full w-full' 
        style={{ background: `url(${vaspa})`,
        backgroundSize:'cover',
        backgroundPosition:'center'
         }}>
             <div className="hero grid h-screen place-items-center mt-48">
            <h1 className='text-white text-5xl mt-96'>Start Your Vespa <br /> Journey now</h1>
             </div>
        </section>
    );
};

export default PopularSection;