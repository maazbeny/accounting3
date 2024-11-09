import React, { useState, useEffect } from 'react';
import './CSS/BuisnessPage.css';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar/Navbar'
import Scrollbar from '../components/Scrollbar/Scrollbar'
import Footer from '../components/Footer/Footer';
import buisness_1 from '../assets/Buisness Taxes/Capital Allowances.png'
import buisness_2 from '../assets/Buisness Taxes/Capital Gains Tax.png'
import buisness_6 from '../assets/Personal Taxes/Tax Returns.png'

import buisness_3 from '../assets/Buisness Taxes/Income Tax.png'
import buisness_4 from '../assets/Buisness Taxes/Tax Planning and Advice.png'
import buisness_5 from '../assets/Buisness Taxes/VAT Compliance.png'
import Cards from '../components/Cards/Cards.jsx';
import Question from '../components/Question/Question.jsx';

const BuisnessPage = ({ onOpenPopup }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    // const [menu, setMenu] = useState("home")

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);
    // useEffect(() => {
    //     document.title = 'Buisness Taxes | Faiz Accountax';
    // }, []);
    return (
        <>
            <Helmet>

                <title>Business Tax Services for UK Small and Medium Enterprises - Faiz Accountax</title>

                <meta name="description" content="Our business tax services are designed to help SMEs in the UK with
Corporation Tax, VAT, and tax planning strategies. Faiz Accountax ensures compliance and tax
efficiency." />

                <meta name="keywords" content="business taxes, VAT, Corporation Tax, SME tax services, UK tax planning" />

            </Helmet>
            <Scrollbar onOpenPopup={onOpenPopup} />
            <div className="buisness-top">
                <div className="nav-head">
                    <Navbar onOpenPopup={onOpenPopup} />

                    <h1 className='buisness-head'>Business Taxes <hr /></h1>
                </div>
                <div className='buisnesspage'>
                    <div className="buisness-left">
                        <div className="simple-para">
                            <h2 className='page-heading'>Business Tax Services for Small and Medium Enterprises in the UK</h2>
                            <p className='page-para'>
                                Navigating the complexities of business taxes in the UK is essential for compliance and financial optimization. Whether you operate as a limited company, sole trader, or partnership, understanding your tax obligations and opportunities can significantly impact your business’s success. Here, we provide a comprehensive overview of business taxes and explain how Faiz Accountax can assist you in managing them effectively.
                            </p>
                        </div>

                        <div className="simple-para">
                            <h2 className='page-heading'>Types of Business Taxes</h2>


                            <div className="page-cards-shadows2">

                                <Cards num="1." title="Corporation Tax" des='Limited companies and some other organizations.
                                        Companies must file a Company Tax Return (CT600) and pay any Corporation Tax due.'/>


                                <Cards num="2." title="Income Tax " des='Pay income tax on business profits via the self-assessment system.
                                        Each partner pays income tax on their share of the profits.
                                        The rates are the same as for personal income tax, including basic, higher, and additional rates.'/>



                                <Cards num="3." title="Value Added Tax (VAT)" des='Businesses with a taxable turnover above the VAT threshold (currently £90,000).
                                        Standard rate is 20%, with reduced rates for certain goods and services.
                                        Quarterly VAT returns must be submitted, and VAT payments made accordingly.'/>

                                <Cards num="4." title="NICs" des='Employers pay Class 1 NICs on employees’ earnings.
                                        Pay Class 2 and Class 4 NICs based on profits.'/>


                                <Cards position="55%" num="5." title="Capital Gains Tax (CGT)" des='Businesses that sell or dispose of an asset for profit.
                                        Varies based on whether the asset qualifies for Entrepreneurs’ Relief or other reliefs..'/>
                            </div>
                        </div>

                        <div className="simple-para">
                            <h2 className='page-heading'>Key Deadlines</h2>
                            <div className="page-cards-shadows2">
                                <Cards title="Corporation Tax" des="Payment is due nine months and one day after the end of the accounting period.
                                        Filing the Company Tax Return (CT600) is due 12 months after the end of the accounting period." />


                                <Cards title="Self-Assessment" des="Register by 5th October following the end of the tax year.
                                        File paper returns by 31st October and online returns by 31st January.
                                        Pay any tax due by 31st January, with a second payment on account by 31st July." />

                                <Cards title="Value Added Tax (VAT)" des="Quarterly returns and payments are typically due one month and seven days after the end of the VAT period." />

                                <Cards title="NICs" des="Employers pay Class 1 NICs on employees’ earnings.
                                        Pay Class 2 and Class 4 NICs based on profits." />

                                <Cards position="55%" title="Capital Gains Tax" des="Report and pay within 60 days of selling UK residential property.
                                        For other assets, report and pay by 31st January following the tax year in which the gain was made." />

                            </div>
                        </div>
                        <div />


                        <div className="simple-para">
                            <h2 className='page-heading'>How We Can Help</h2>
                            <p className='page-center-para'>
                                At Faiz Accountax, we offer a comprehensive range of services to help businesses manage their tax obligations efficiently and take advantage of available reliefs and allowances. Here’s how we can assist:
                            </p>
                            <div className="simple-card-box2">

                                <ul className='simple-card2'>
                                    <img className="buisness_img" src={buisness_6} alt="" />

                                    <h2>Company Tax Returns</h2>
                                    <li> We handle the preparation and filing of your Company Tax Return (CT600), ensuring accuracy and compliance with HMRC requirements. Our experts also identify opportunities for tax savings and optimize your Corporation Tax position.</li>
                                </ul>
                                <ul className='simple-card2'>
                                    <img className="buisness_img" src={buisness_3} alt="" />

                                    <h2>Income Tax</h2>
                                    <li> Our team assists with the preparation and filing of self-assessment tax returns, ensuring that all allowable expenses are claimed and you pay the correct amount of tax. We help you navigate the complexities of income tax, NICs, and related obligations.</li>
                                </ul>
                                <ul className='simple-card2'>
                                    <img className="buisness_img" src={buisness_5} alt="" />

                                    <h2>VAT Compliance</h2>
                                    <li> We manage your VAT registration, prepare and file your VAT returns, and ensure timely payments. Our services also include advising on VAT schemes that might benefit your business, such as the Flat Rate Scheme or the Annual Accounting Scheme.</li>
                                </ul>
                                <ul className='simple-card2'>
                                    <img className="buisness_img" src={buisness_1} alt="" />
                                    <h2>Capital Allowances </h2>
                                    <li>We help you maximize your claims for capital allowances on business assets, reducing your taxable profits and improving cash flow. Our experts identify qualifying expenditures and ensure accurate reporting.</li>
                                </ul>
                                <ul className='simple-card2'>
                                    <img className="buisness_img" src={buisness_2} alt="" />

                                    <h2>Capital Gains Tax</h2>
                                    <li> We provide guidance on reporting and paying CGT, advising on reliefs such as Entrepreneurs’ Relief to minimize your tax liability. Our services ensure that you meet all reporting requirements and deadlines.</li>
                                </ul>
                                <ul className='simple-card2'>
                                    <img className="buisness_img" src={buisness_4} alt="" />

                                    <h2>Tax Planning and Advice</h2>
                                    <li> Effective tax planning is crucial for business success. We offer strategic tax advice tailored to your business structure and goals, helping you plan for future growth while remaining tax-efficient.</li>
                                </ul>

                            </div>
                        </div>
                        <div className="simple-para">
                            <h2 className='page-heading'>Get Started</h2>
                            <p className='page-para'>
                                Understanding and managing business taxes in the UK requires expertise and attention to detail. At Faiz Accountax, we provide the knowledge and support you need to navigate the tax landscape confidently. From preparing and filing tax returns to offering strategic tax planning, we are here to help your business thrive. Contact us today to learn more about how we can assist you with your business tax needs.
                            </p>
                        </div>
                        <Question />
                    </div>

                </div>

            </div>
            <Footer onOpenPopup={onOpenPopup} />

        </>
    );
}

export default BuisnessPage;
