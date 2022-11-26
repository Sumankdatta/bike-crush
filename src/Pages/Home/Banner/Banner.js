import React from 'react';
import ban1 from '../../../assets/image/ban1.jpg'
import ban2 from '../../../assets/image/ban2.jpg'
import ban3 from '../../../assets/image/ban3.jpg'
import BannerItems from '../Home/BannerItems/BannerItems';
import '../Banner/Banner.css'


const bannerData = [
    {
        image: ban1,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: ban2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: ban3,
        prev: 2,
        id: 3,
        next: 1
    }

]

const Banner = () => {
    return (
        <div className="carousel w-full">
            {
                bannerData.map(slide => <BannerItems
                    key={slide.id}
                    slide={slide}
                ></BannerItems>)
            }
        </div>
    );
};

export default Banner;