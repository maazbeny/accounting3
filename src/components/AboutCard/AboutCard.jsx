import React from 'react'
import './AboutCard.css'
import tech from '../../assets/tech4.png'
import dedicated from '../../assets/2.png'
import homelogo from '../../assets/home-logo.png'

import certified from '../../assets/certified5.png'
const AboutCard = () => {
    return (
        <div id='choose' className='choose'>

            <div className="choose-card-container">
                <div className="about-choose-card">
                    <div className="image-box">
                        <img src={dedicated} alt="" />
                    </div>
                    <p className='about-card-heading'>We Are Leading in Accounting Services</p>
                    <p className='choose-card-para'>At Faiz Accountax, we excel in providing top-notch accounting services. Our certified professionals offer expert tax planning, precise bookkeeping, and strategic business advice to ensure your financial success.</p>
                </div>
                <div className="about-choose-card">
                    <div className="image-box">
                        <img src={certified} alt="" />
                    </div>
                    <p className='about-card-heading'>Solutions For Small & Large Business</p>
                    <p className='choose-card-para'>Whether you’re a small startup or a large corporation, Faiz Accountax offers tailored accounting solutions to meet your needs. Our expert team provides comprehensive services that help streamline your finances and support your business growth at every stage.

                    </p>

                </div>
                <div className="about-choose-card">
                    <div className="image-box">
                        <img src={tech} alt="" />
                    </div>
                    <p className='about-card-heading'>Learn From Customer Feedback</p>
                    <p className='choose-card-para'>Our clients’ satisfaction is our top priority at Faiz Accountax. Hear directly from those who have benefited from our expert accounting and tax services. Discover how our tailored solutions have helped businesses thrive and achieve their financial goals.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutCard
