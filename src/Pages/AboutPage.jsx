import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import './CSS/AboutPage.css'
import aboutpic1 from '../assets/aboutpage1.png'
import aboutpic from '../assets/6.png'
import aboutpic2 from '../assets/5.png'
import Popup from '../components/Popup/Popup';
import { Helmet } from 'react-helmet';

import AboutCard from '../components/AboutCard/AboutCard'
import Footer from '../components/Footer/Footer';
import Scrollbar from '../components/Scrollbar/Scrollbar'


const AboutPage = ({ onOpenPopup }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    // const [menu, setMenu] = useState("home")

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <>
            <Navbar onOpenPopup={onOpenPopup} />

            <Helmet>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <title>About Faiz Accountax - Chartered Certified Accountants and Tax Experts in the UKz</title>
                <meta name="description" content="Learn about Faiz Accountax, your trusted Chartered Certified Accountants
and Tax Advisers in the UK. Our team is dedicated to helping businesses and individuals manage
their finances efficiently." />
                <meta name="keywords" content="about Faiz Accountax, UK accountants, Chartered Certified Accountants, tax
experts UK" />
                <meta name="author" content="Faiz Accountax" />
            </Helmet>
            <div className='aboutpage'>
                <Scrollbar onOpenPopup={onOpenPopup} />
                <h1 className='about-head'>About Faiz Accountax - Chartered Certified Accountants and Tax Experts in the UK</h1>
                <hr />
                <div className="aboutpage1">
                    <div className="aboutpage1-left">
                        <p className='aboutpage1-para'>
                            Welcome To Faiz Accountax</p>
                        <h2 className='aboutpage1-heading'>Our Commitment to Excellence in Tax and Accounting Services</h2>
                        <p className='aboutpage1-chotapara'>Welcome to Faiz Accountax, where we blend expertise with personalized service. As esteemed members of the Association of Chartered Certified Accountants (ACCA), the Chartered Institute of Taxation (CIOT), and the Association of Taxation Technicians (ATT), we bring a wealth of knowledge to every client interaction. Our firm provides both in-office and remote tax and accountancy services, ensuring flexibility and convenience for our diverse clientele. We are dedicated to understanding your specific financial needs and delivering tailored solutions that support your goals. At Faiz Accountax, we are committed to excellence and building lasting relationships founded on trust and professional integrity.</p>
                    </div>
                    <div className="aboutpage1-right">
                        {/* <img src={aboutpic1} alt="" /> */}
                        <img className='aboutpic2' src={aboutpic2} alt="" />
                    </div>
                </div>
                <div className="aboutpage-2">
                    <div>
                        <h2 className='work-head'>How We Work </h2>
                        <hr />
                    </div>
                    <div className="aboutpage2">

                        <div className="aboutpage2-left">
                            <img className='aboutpic' src={aboutpic} alt="" />
                        </div>
                        <div className="aboutpage2-right">
                            <h2  >Find The Right Accounting For Your Business</h2>
                            <p>Navigating the complexities of business accounting requires expertise and precision. At Faiz Accountax, we provide tailored accounting solutions that meet the unique needs of your business. Our experienced team is dedicated to helping you manage your finances efficiently, ensuring compliance and fostering growth. Trust us to deliver the right accounting services that support your business success.</p>
                        </div>
                    </div>

                </div>
                <AboutCard />
                <div className="unsure-box">
                    <h2>Unsure About Our Services? Schedule a Consultation</h2>
                    <p>If you’re unsure which of our services best fits your needs, our team is here to help. Schedule a consultation with one of our experts to discuss your specific requirements and get personalized advice. We’ll guide you through our offerings and help you find the perfect solution for your accounting and tax requirements.</p>
                    <button onClick={onOpenPopup}>Get A Quote</button>
                </div>
            </div>

            <Footer onOpenPopup={onOpenPopup} />

        </>
    )
}

export default AboutPage
