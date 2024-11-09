import React, { forwardRef } from 'react';
import './Homepage.css'
import intro from '../../assets/intro.png'
import homelogo from '../../assets/home-logo.png'
import blob from '../../assets/blob.svg'
import gif from '../../assets/1.png'
import gif2 from '../../assets/Gif2.MOV'




const Homepage = forwardRef((props, ref) => {
    return (
        <div ref={ref} id='home' name="home" className='homepage'>

            <div className="homepage-left">
                <h1 className='hompage-head'><span>Expert Tax and Accounting Services for UK Businesses   </span>
                    Trust The Accounting & Tax To Us
                </h1>
                <p className='homepage-chotapara'>We provide online Accountancy and Tax Service nationwide for a fixed monthly fee. At Faiz Accountax, we pride ourselves on offering top-tier accounting and tax advisory services tailored to meet the unique needs of individuals and businesses alike. With a robust presence in Central London and an office in High Wycombe, we ensure our clients receive personalized, high-quality service, whether they’re seeking expert financial advice or efficient tax solutions.</p>

                <div className="logo-btn">
                    <img className='home-logo' src={homelogo} alt="" />

                    <div className="homepage-btn">
                        <div className="call-btn">
                            <i class="fa-solid fa-phone icon-1" ></i>
                            <a href="https://calendly.com/faizaccountax/30min "><button className='homepage-call-btn'>Request a callback</button>
                            </a>
                        </div>

                    </div>


                </div>

            </div>
            <div className="homepage-right">

                <img src={gif} alt="" />
            </div>


        </div>
    )
}
)

export default Homepage
