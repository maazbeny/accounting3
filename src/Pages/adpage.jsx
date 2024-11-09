import React from 'react'
import './CSS/adpage.css'
import ad from '../assets/ad.jpg'
import ad2 from '../assets/ad2.jpg'
import ad3 from '../assets/ad3.jpg'
import admain from '../assets/ad-main.png'
import adpersonal from '../assets/ad-personal.png'
import adaccountant from '../assets/ad-accountant.png'
import adpartner from '../assets/ad-partner.png'
import adplan from '../assets/ad-plan.png'
import adpayroll from '../assets/ad-payroll.png'
import adsecretary from '../assets/ad-secretary.png'
import adbookkeeping from '../assets/ad-bookkeeping.png'
import Scrollbar from '../components/Scrollbar/Scrollbar'



import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { Helmet } from 'react-helmet';

const adpage = ({ onOpenPopup }) => {
    return (
        <>
            <Navbar onOpenPopup={onOpenPopup} />
            <Scrollbar onOpenPopup={onOpenPopup} />
            <Helmet>
                <title>Faiz Accountax | High Wycombe Accountants for Personal & Business Tax Services</title>
                <meta name="description" content="Discover expert accounting and tax services at Faiz Accountax in High Wycombe. Offering online and face-to-face consultations for personal tax returns, business accounts, and tax planning. Book your consultation today!" />
                <meta name="keywords" content="High Wycombe accountants, Faiz Accountax, accounting services High Wycombe, tax planning, personal tax returns, business accounting, local accountants High Wycombe, tax advisory services, in-person accounting High Wycombe" />
            </Helmet>
            <div className="ad-page">

                <div className='adpage'>

                    <div className="ad-home">

                        <div className="ad-home-box">
                            <div className="ad-home-left">

                                <h2>Welcome to Faiz Accountax</h2>

                                <h1>

                                    Your Local Accountants in High Wycombe</h1>
                                <p>Are you looking for professional accounting and tax services with the option of meeting face-to-face? At Faiz Accountax, we provide expert online accounting services, but for clients based in High Wycombe, we offer the flexibility of in-person consultations at our local office.</p>
                            </div>
                            <div className="ad-home-right">
                                <img className='ad-main' src={admain} alt="" />
                            </div>
                        </div>

                    </div>



                    <h2 className='ad-heading'> Why Choose Faiz Accountax?</h2>

                    <div className="ad-choose">

                        <div className="ad-choose-left">

                            <p>As members of the Association of Chartered Certified Accountants (ACCA), the Chartered Institute of Taxation (CIOT), and the Association of Taxation Technicians (ATT), we bring years of expertise to every client interaction. Our services are designed to meet your specific needs, whether you require assistance with personal tax returns, business accounting, or tax planning.
                            </p>
                        </div>
                        <div className="ad-choose-right"> <img className='ad-img
                    ' src={ad3} alt="" /></div>


                    </div>
                    <div className="ad-card-box">
                        <div className="ad-card">
                            <h3 className='ad-card-heading'>In-Person Consultations in High Wycombe</h3>
                            <p>While we specialize in offering online services, we understand that some clients prefer face-to-face meetings. Our home-based office, with a separate entry and exit, provides a comfortable and private space for consultations.</p>
                        </div>
                        <div className="ad-card">
                            <h3 className='ad-card-heading'>Tailored Accounting and Tax Solutions</h3>
                            <p>Whether you’re an individual, sole trader, or company, we offer customized solutions to help manage your finances effectively and comply with tax regulations.</p>
                        </div>
                        <div className="ad-card">
                            <h3 className='ad-card-heading'>Local Expertise with a Personal Touch</h3>
                            <p>As a local firm, we understand the unique needs of businesses and individuals in High Wycombe and surrounding areas. We’re here to offer personal, reliable, and flexible support.</p>
                        </div>
                    </div>
                    <div className="our-services">
                        <div className="our-left">
                            <h3 className='ad-heading2'>Our Services</h3>
                            <p>We offer a wide range of services to meet all your accounting and tax needs, including:</p>
                        </div>
                        <div className="our-right">
                            <div className="our-card">
                                <img className='ad-icon' src={adpersonal} alt="" />
                                <h4>Personal Tax Returns</h4>
                            </div>
                            <div className="our-card">
                                <img className='ad-icon' src={adaccountant} alt="" />

                                <h4>Company Accounts</h4>
                            </div>

                            <div className="our-card">
                                <img className='ad-icon' src={adplan} alt="" />

                                <h4>Tax Planning and Advisory</h4>
                            </div>
                            <div className="our-card">
                                <img className='ad-icon' src={adpayroll} alt="" />

                                <h4>Payroll and CIS Services</h4>
                            </div>
                            <div className="our-card">
                                <img className='ad-icon' src={adbookkeeping} alt="" />

                                <h4>Bookkeeping</h4>
                            </div>
                            <div className="our-card  ">
                                <img className='ad-icon' src={adsecretary} alt="" />

                                <h4>Company Secretarial Services</h4>
                            </div>
                            <div style={{ transform: "translateX(105%)" }} className="our-card last-card">
                                <img className='ad-icon' src={adpartner} alt="" />

                                <h4>Sole Trader and Partnership Accounts</h4>
                            </div>
                        </div>
                    </div>
                    <div className="book">

                        <div className="book-left">
                            <img className='consultation-img' src={ad2} alt="" />
                        </div>
                        <div className="book-right">
                            <div className="book-right-box box1">
                                <h3>Book a Face-to-Face Consultation</h3>
                                <p>If you prefer a personal approach, we’re here to meet with you in our High Wycombe office. Whether you want to discuss your financial situation, need advice on tax planning, or have questions about your business accounts, we’re available for in-person consultations.
                                </p>
                            </div>
                            <div className="book-right-box box2">
                                <h3>How to Book</h3>
                                <p>Simply fill out the form below, and we’ll contact you to arrange a convenient time for your visit. Alternatively, you can call us directly at 0208 191 0732 to schedule your consultation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="location-touch">

                        <div className="touch">
                            <h2>Get in Touch</h2>
                            <p>Don’t wait—contact us today to arrange a consultation. Whether you choose to meet us in person or online, Faiz Accountax is here to support your financial needs.</p>
                        </div>

                        <div className="location">

                            <h2>Conveniently Located in High Wycombe</h2>
                            <p>Our office is based in a quiet, private location in High Wycombe with easy access and parking available. We’re committed to providing flexible, high-quality accounting services, whether you prefer online or face-to-face meetings.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>

    )
}

export default adpage
