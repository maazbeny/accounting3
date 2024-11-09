import React from 'react'
import Pricing from '../components/Pricing/Pricing'
import solution from '../assets/solution.jpg'
import support from '../assets/support.jpg'
import trust from '../assets/trust.jpg'
import hiddenfees from '../assets/hidden-fees.png'
import tax from '../assets/tax-review.jpg'
import compare from '../assets/compare.jpg'
import meeting from '../assets/meeting.jpg'
import './CSS/PricingPage.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Scrollbar from '../components/Scrollbar/Scrollbar'
import { Helmet } from 'react-helmet';


const PricingPage = ({ onOpenPopup }) => {
    return (
        <>
            <Helmet>
                <title>Affordable Accounting Plans & Pricing - Faiz Accountax</title>
                <meta name="description" content="Explore Faiz Accountax's transparent and affordable accounting plans tailored for individuals and small businesses. Find the right plan to manage your taxes, bookkeeping, and business compliance with ease. Get a quote today!" />
                <meta name="keywords" content="accounting plans, pricing for accountants, Faiz Accountax pricing, small business accounting, bookkeeping services, tax return services, affordable accounting UK" />
            </Helmet>
            <Navbar onOpenPopup={onOpenPopup} />
            <Scrollbar onOpenPopup={onOpenPopup} />
            <div className='pricing-page'>
                <div className="why-head">
                    <h1 className='pricepage-heading'>Plans & Pricing</h1>
                    <p className='pricepage-para'>Affordable, Flexible Accounting Solutions for Individuals, Sole Traders, Limited Companies and Partnerships</p>
                </div>
                <div className="pricing-box">
                    <Pricing onOpenPopup={onOpenPopup} title="Sole Traders" price="20" description="Ideal for self-employed individuals and sole proprietors, this plan includes everything you need to manage your finances effectively." features={[
                        "Dedicated Accountant",
                        "Year-End Accounts",
                        "Self-Assessment Tax Return",
                        "Unlimited Support",
                        "Annual Tax Efficiency Review",
                        "Automated Reminders"
                    ]} />
                    <Pricing onOpenPopup={onOpenPopup} title="Limited Companies" price="40" description="Comprehensive support tailored to limited companies, ensuring your business stays compliant and financially healthy." features={[
                        "Dedicated Accountant",
                        "Year-End Accounts & Submission",
                        "Corporation Tax Return",
                        "Director’s Self-Assessment",
                        "Confirmation Statement",
                        "Unlimited Support",
                        "Annual Tax Planning Review",
                        "Deadline Reminders"
                    ]} />
                    <Pricing onOpenPopup={onOpenPopup} title="Partnerships" price="20" description="Designed for business partnerships, this plan provides essential accounting and tax services to keep your finances organized and compliant." features={[
                        "Dedicated Accountant",
                        "Year-End Accounts Preparation",
                        "Partnership Tax Return",
                        "Unlimited Support",
                        "Annual Tax Efficiency Review",
                    ]} />
                </div>

                <div className="container0">
                    <div className="container0-left">
                        <h2 className='container-heading'>How Our Pricing Compares to Other Accountants</h2>
                        <p className="compare-para">At Faiz Accountax, we combine professional expertise with modern technology to deliver high-quality services at a fraction of the usual cost. By operating as an online-based firm and leveraging efficient, secure accounting software, we’re able to reduce overheads and pass those savings directly to our clients. While many traditional accountants charge upwards of £1,300 per year for basic services, our packages start from just £20 per month for sole traders and partnerships, and £40 per month for limited companies. With no hidden fees, our plans include essential features such as a dedicated accountant, year-end accounts, tax filings, and unlimited support—offering you exceptional value without the high costs.
                        </p>
                    </div>
                    <div className="container0-right">
                        <img className='container-img' src={compare} alt="" />
                    </div>
                </div>

                <div className='why-head'>
                    <h2 className='pricepage-heading'>Why Choose Faiz Accountax?</h2>
                    <p className='pricepage-para'>Choosing the right accounting partner is crucial for your business’s success. Here’s why Faiz Accountax stands out:</p>
                </div>
                <div className="pricepage-choose">
                    <div className="container1">
                        <div className="container1-left">
                            <img className='container-img' src={trust} alt="" />
                        </div>
                        <div className="container1-right">
                            <h3 className="container-heading ">Professional Expertise You Can Trust</h3>
                            <p className='container-choose-para'>At Faiz Accountax, we are proud members of the Association of Chartered Certified Accountants (ACCA), the Chartered Institute of Taxation (CIOT), and the Association of Taxation Technicians (ATT). With our team’s wealth of experience and professional qualifications, you’re in capable hands, whether you’re a sole trader, partnership, or limited company.</p>
                        </div>
                    </div>
                    <div className="container2">
                        <div className="container2-left">
                            <h3 className="container-heading ">Personalized Support Tailored to Your Needs</h3>
                            <p className='container-choose-para'>Every business is unique, and we believe your accounting should be too. Our dedicated accountants provide one-on-one support, offering guidance that’s customized to your specific financial situation and goals. Whether you need regular check-ins or occasional advice, we’re here for you.</p>
                        </div>
                        <div className="container2-right">
                            <img className='container-img' src={support} alt="" />

                        </div>
                    </div>
                    <div className="container1">
                        <div className="container1-left">
                            <img className='container-img' src={meeting} alt="" />

                        </div>
                        <div className="container1-right">
                            <h3 className="container-heading ">Flexible Online Service with VR Meeting Options</h3>
                            <p className='container-choose-para'>
                                We understand that managing a business requires flexibility. That’s why we offer online services that fit around your schedule, including the option for virtual reality (VR) meetings to enhance communication and bring a more personal touch to remote consultations. With access to our secure online platform, you can manage your accounts from anywhere, ensuring seamless interaction with your accountant.
                            </p>

                        </div>
                    </div>
                    <div className="container2">
                        <div className="container2-left">
                            <h3 className="container-heading ">Comprehensive Solutions for Every Business Stage
                            </h3>
                            <p className='container-choose-para'>From startups to established companies, we offer a full range of accounting services designed to support your growth. Our plans include everything from tax returns and bookkeeping to advanced tax planning, allowing you to focus on what matters most—growing your business.</p>
                        </div>
                        <div className="container2-right">
                            <img className='container-img' src={solution} alt="" />

                        </div>
                    </div>
                    <div className="container1">
                        <div className="container1-left">
                            <img className='container-img' src={tax} alt="" />

                        </div>
                        <div className="container1-right">
                            <h3 className="container-heading ">Proactive Tax Efficiency Reviews</h3>
                            <p className='container-choose-para'>
                                We help you keep more of your hard-earned income through proactive tax efficiency reviews. Our team regularly assesses your accounts to find opportunities for tax savings, ensuring you are both compliant and financially optimized.
                            </p>

                        </div>
                    </div>
                    <div className="container2">
                        <div className="container2-left">
                            <h3 className="container-heading">Transparent Pricing with No Hidden Fees
                            </h3>
                            <p className='container-choose-para'>At Faiz Accountax, we believe in straightforward pricing. Our plans are designed with transparency in mind, so you always know what you’re paying for and the value you’re receiving. Plus, our add-on services provide flexibility as your business needs evolve.</p>
                        </div>
                        <div className="container2-right">
                            <img className='container-img' src={hiddenfees} alt="" />

                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </>
    )
}

export default PricingPage
