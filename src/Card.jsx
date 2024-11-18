import React from 'react';
import './Card.css';
import Workerimg from './assets/img1.svg'

function Card() {
    return (
        <div className="card">
            <div className="card-image">
                <img src={Workerimg} alt="Recruitment Goals" />
            </div>
            <div className="card-content">
                <h3>Our Recruitment Goals</h3>
                <p>At Kimora and Fraser Recruitment, we are dedicated to identifying and recruiting highly trained and skilled drivers to meet the staffing needs of various organizations. Our mission is to ensure that every driver we place is well-equipped to contribute effectively and safely to their new roles.</p>
            </div>
        </div>
    );
}

export default Card;
