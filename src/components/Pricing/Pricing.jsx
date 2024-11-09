import React from 'react';
import './Pricing.css'

const Pricing = ({ title, price, description, features, onOpenPopup }) => {
    return (
        <div className="pricing-card">
            <div className="pricing-card-box">
                <div className="card-head">
                    <p className='price-title'>{title}</p>
                    <div>
                        <p className='price-price'> Starting From</p>

                        <p className='price-price'> £{price}</p>
                        <p className='month'>per month</p>
                    </div>
                </div>
                <p className='price-des'>{description}</p>
                <div className="card-features">
                    {features.map((feature, index) => (
                        <div className="arrow-feature">
                            <div className="arrow-circle">
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                            <p className='price-feature'>{feature}</p>
                        </div>
                    ))}

                </div>
            </div>
            <button onClick={onOpenPopup} className='price-btn'>Get An Instant Quote</button>
        </div>
    );
};

export default Pricing;
