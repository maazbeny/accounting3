import React from 'react'
import './Choose.css'
import tech from '../../assets/tech4.png'
import dedicated from '../../assets/ded.png'
import homelogo from '../../assets/home-logo.png'
import logo3 from '../../assets/logo-3.png'

import certified from '../../assets/certified5.png'
const Choose = () => {
    return (
        <div id='choose' className='choose'>
            <h2 className='choose-heading'>Why Choose Us</h2>
            <p className='choose-para'>Proactive accountants saving you tax and time by regular meetings and planning during the year.</p>
            <div className="choose-card-container">

                <div className="choose-card">
                    <div className="image-box">
                        <img src={certified} alt="" />
                    </div>
                    <p className='card-heading'>ACCA, CIOT & ATT Registered</p>
                    <p className='choose-card-para'>You are in competent hands. We are fully qualified Chartered Certified Accountants & Chartered Tax Advisers
                        <img src={homelogo} alt="" />

                    </p>

                </div>
                <div className="choose-card">
                    <div className="image-box">
                        <img src={tech} alt="" />
                    </div>
                    <p className='card-heading'>Technology Driven</p>
                    <p className='choose-card-para'>We can integrate with all major accounting software. We give you your own client portal to access important documents on the go.
                        <img src={logo3} alt="" />
                    </p>
                </div>
                <div className="choose-card">
                    <div className="image-box">
                        <img className='dedicated' src={dedicated} alt="" />
                    </div>
                    <p className='card-heading'>Dedicated Accountant</p>
                    <p className='choose-card-para'>Your own dedicated accountant. Meet them face to face, on video meeting or call them directly.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default Choose
