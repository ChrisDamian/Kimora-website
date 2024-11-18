import React from 'react';
import './Hero.css';
import Workerimg2 from './assets/img2.svg'

function Hero() {
    return (
        <div className="hero">
            <div className="hero-image">
                <img src={Workerimg2} alt="Recruitment" />
            </div>
            <div className="hero-content">
                <h2>Our Recruitment Goals</h2>
                <p>“At Kimora and Fraser Recruitment, our mission is to identify and recruit highly trained and skilled drivers to meet the staffing needs of various organizations.”</p>
            </div>
        </div>
    );
}

export default Hero;
