import React from 'react';
import banner from '../../images/banner/banner-5.jpg'


const Banner = () => {
    return (
        <div className="banner-img ">
            <img src={banner} alt="" />
            <h1 className="banner-text fw-bold ">We Care for Your <br /> Health Every Moment</h1>
        </div>
    );
};

export default Banner;