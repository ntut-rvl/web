import React from 'react';
import RvlLogo from '../assets/images/rvl_logo.png'
import { useAnimateOnScroll, useScrollEffect } from '../Utils';

const Home: React.FC = () => {
    const onScrollEl = useAnimateOnScroll();
    useScrollEffect();

    return (
        <section className="rvl-home rvl-slant rvl-slant-gray" id="home">
        <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center rvl-vh-100">
            <img className="rvl-logo mb-2" src={RvlLogo} alt="RVL Logo" />
            <h1
                ref={onScrollEl}
                className="rvl-heading rvl-animate"
                data-animate-effect="fadeIn"
            >
                Robot Vision Lab
            </h1>
            <h5 
                ref={onScrollEl}
                className="rvl-subheading rvl-animate"
                data-animate-effect="fadeIn"
            >
                機器人視覺實驗室
            </h5>
            </div>
        </div>
        </section>
    );
};

export default Home;
