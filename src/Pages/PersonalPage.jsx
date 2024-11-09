import React, { useState, useEffect } from 'react';
import './CSS/PerosnalPage.css';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar/Navbar';
import Scrollbar from '../components/Scrollbar/Scrollbar';
import Footer from '../components/Footer/Footer';
import personal_1 from '../assets/Personal Taxes/Tax Returns.png'
import personal_2 from '../assets/Personal Taxes/Tax Planning.png'
import personal_3 from '../assets/Personal Taxes/HMRC.png'
import personal_4 from '../assets/Personal Taxes/Expert Advice.png'
import Question from '../components/Question/Question';
import Cards from '../components/Cards/Cards';
import Cards1 from '../components/Cards1/Cards1';

const PersonalPage = ({ onOpenPopup }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    // useEffect(() => {
    //     document.title = 'Personal Taxes | Faiz Accountax';
    // }, []);

    return (
        <>
            <Helmet>
                <title>Personal Tax Services for Individuals and Freelancers - Faiz Accountax</title>
                <meta name="description" content="Faiz Accountax provides personal tax services tailored for individuals and
freelancers in the UK. Get expert advice on income tax, self-assessment, and more." />
                <meta name="keywords" content="personal taxes, income tax, self-assessment, freelancers tax, UK personal tax
services" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <Scrollbar onOpenPopup={onOpenPopup} />
            <div className="buisness-top">
                <div className="nav-head">
                    <Navbar onOpenPopup={onOpenPopup} />

                    <h1 className='buisness-head'>Personal Taxes  <hr /> </h1>
                </div>
                <div className='buisnesspage'>
                    <div className="buisness-left">
                        <div className="simple-para">
                            <h2 className='page-heading'>Personal Taxes Services - UK Tax Solutions for Individuals and Freelancers</h2>
                            <p className='page-para'>
                                Personal taxes in the UK can seem complex, but understanding the system and key deadlines is crucial for ensuring compliance and optimizing your financial situation. Here’s a comprehensive overview to help you navigate the intricacies of personal taxes and see how Faiz Accountax can assist you with tax returns and planning.
                            </p>
                        </div>

                        <div className="simple-para">
                            <h2 className='page-heading'>How Personal Taxes Work in the UK</h2>
                            <div className="page-cards">
                                <div className='page-card'>
                                    <h2> Income Tax</h2>

                                    <li>Levied on earnings from employment, self-employment, pensions, and savings.</li>
                                </div>

                                <div className='page-card'>
                                    <h2 >NICs</h2>

                                    <li>Mandatory contributions for social security benefits and pensions.</li>
                                </div>

                                <div className='page-card'>
                                    <h2> Capital Gains Tax</h2>

                                    <li>Tax on the profit when you sell or dispose of an asset that has increased in value.</li>
                                </div>

                                <div className='page-card'>
                                    <h2> Inheritance Tax</h2>

                                    <li>Tax on the estate (property, money, and possessions) of someone who has died.</li>
                                </div>

                                <div className='page-card'>
                                    <h2> Dividend Tax</h2>

                                    <li>Tax on income from dividends if you own shares in a company.</li>
                                </div>
                            </div>
                        </div>

                        <div className="simple-para">
                            <h2 className='page-heading'>Key Deadlines</h2>
                            <div className="personal-cards">
                                <Cards1 title="Self-Assessment Registration" des="You must register with HMRC by 5th October following the end of the tax year." />
                                <Cards1 title="Paper Tax Returns" des="The deadline for submitting paper tax returns is 31st October following the end of the tax year." />

                                <Cards1 title="Online Tax Returns" des="The deadline for filing online tax returns is 31st January following the end of the tax year." />


                                <Cards1 title="Tax Payment" des="Any tax due must be paid by 31st January following the end of the tax year. For payments on account, the second payment is due by 31st July." />









                            </div>
                        </div>

                        <div className="simple-para">
                            <h2 className='page-heading'>When to Submit a Tax Return</h2>
                            <div className='circle-lines'>
                                <div className="circle-line">
                                    <div className="circle"><i class="fa-solid fa-check check"></i></div>
                                    <li>You need to submit a self-assessment tax return if you are self-employed, a sole trader, or a partner in a business partnership.</li></div>
                                <div className="circle-line">
                                    <div className="circle"><i class="fa-solid fa-check check"></i></div>

                                    <li>You have untaxed income, such as rental income, investment income, or foreign income.</li>
                                </div>
                                <div className="circle-line">
                                    <div className="circle"><i class="fa-solid fa-check check"></i></div>

                                    <li>Your taxable income was over £100,000.</li>
                                </div>
                                <div className="circle-line">
                                    <div className="circle"><i class="fa-solid fa-check check"></i></div>

                                    <li>You need to claim certain tax reliefs or expenses.</li>
                                </div>
                            </div>
                        </div>

                        <div className="simple-para">
                            <h2 className='page-heading'>How Faiz Accountax Can Help</h2>
                            <div className="simple-para">
                                <p className='page-center-para'>
                                    Navigating the UK’s tax system can be challenging, but Faiz Accountax is here to help. Our comprehensive personal tax services include:
                                </p>
                                <div className="simple-card-box">
                                    <div className='simple-card'>
                                        <img className='personal_img' src={personal_1} alt="" />
                                        <h2>Tax Returns</h2>
                                        <li> We assist with the preparation and submission of your self-assessment tax returns, ensuring accuracy and compliance with HMRC requirements.</li>
                                    </div>
                                    <div className='simple-card'>

                                        <img className='personal_img' src={personal_2} alt="" />

                                        <h2>Tax Planning</h2>
                                        <li> We offer personalized tax planning services to help you minimize your tax liabilities and maximize your financial health.</li>
                                    </div>
                                    <div className='simple-card'>
                                        <img className='personal_img' src={personal_4} alt="" />

                                        <h2>Expert Advice</h2>
                                        <li> Our team provides expert advice and support throughout the year, ensuring you understand your tax obligations and opportunities.</li>
                                    </div>
                                    <div className='simple-card'>
                                        <img className='personal_img' src={personal_3} alt="" />
                                        <h2>HMRC </h2>
                                        <li> We act as your representatives, handling all communications and negotiations with HMRC on your behalf.</li>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="simple-para">
                            <h2 className='page-heading'>Get Started</h2>
                            <p className='page-contact-para'>
                                Understanding and managing personal taxes in the UK requires knowledge and attention to detail. At Faiz Accountax, we provide the expertise and support you need to navigate the tax system confidently. From preparing and filing tax returns to offering strategic tax planning, we ensure you stay compliant and make informed financial decisions. Contact us today to learn more about how we can assist you with your personal tax needs.
                            </p>
                        </div>
                        <Question />
                    </div>

                </div>


            </div >
            <Footer onOpenPopup={onOpenPopup} />

        </>
    );
}

export default PersonalPage;
