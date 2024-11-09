import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Scrollbar from '../components/Scrollbar/Scrollbar';
import Footer from '../components/Footer/Footer';
import './CSS/AccountingPage.css'
import accounting_1 from '../assets/Accounting Services/Cash Flow Management.png'
import accounting_2 from '../assets/Accounting Services/Informed Decision Making.png'
import accounting_3 from '../assets/Accounting Services/Performance Monitoring.png'
import accounting_4 from '../assets/Accounting Services/Regular Financial Reports.png'
import Question from '../components/Question/Question';
import Cards from '../components/Cards/Cards';
import { Helmet } from 'react-helmet';
const AccountingPage = ({ onOpenPopup }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    // useEffect(() => {
    //     document.title = 'Accounting Service | Faiz Accountax';
    // }, []);
    return (
        <>
            <Helmet>
                <title>Accounting Services for UK Businesses - Faiz Accountax</title>
                <meta name="description" content="Faiz Accountax provides year-end accounts, management accounts, and
strategic financial reports to help businesses make informed decisions.." />
                <meta name="keywords" content="accounting services, year-end accounts, management accounts, UK accounting
firm" />
                <meta name="author" content="Faiz Accountax" />


            </Helmet>
            <Scrollbar onOpenPopup={onOpenPopup} />
            <div className="accounting-top">
                <div className="nav-head">

                    <Navbar onOpenPopup={onOpenPopup} />
                    <div className="head-line">
                        <h1 className='accounting-head'>Accounting Services </h1>
                        <hr />
                    </div>
                </div>


                <div className='buisnesspage'>
                    <div className="accounting-left">
                        <div className="simple-para">
                            <h2 className='page-heading'>Accounting Services for UK Businesses - Year End Accounts and Management Reports</h2>
                            <p className='page-para'>
                                At <strong>Faiz Accountax,</strong> we offer specialized accounting services that help businesses not only meet their statutory obligations but also gain valuable insights into their financial performance. Whether you’re preparing for the end of the financial year or need regular updates to monitor your progress, we’ve got you covered with our expert Year-End Accounts and Management Accounts services.


                            </p>

                        </div>
                        <div className="img-container">
                            <img src="" alt="" />
                            <div className="simple-para">
                                <h2 className='accounting-heading'>Year-End Accounts: Meeting Your Obligations, Unlocking Insights</h2>
                                <p className='accounting-para'>
                                    Year-End Accounts are a critical requirement for businesses, providing a snapshot of your company's financial performance over the course of the year. They not only ensure compliance with HMRC and Companies House regulations but also offer valuable insights into the financial health of your business, which can guide future strategy.

                                </p>
                                <p className='accounting-para'>
                                    At Faiz Accountax, we take the stress out of preparing your year-end financial statements. Our experienced accountants handle the entire process, from gathering and reviewing your financial records to submitting your accounts on time, ensuring that your business complies with all relevant regulations.

                                </p>


                            </div>
                        </div>

                        <div className="simple-para">
                            <h2 className='page-heading'>What We Do</h2>
                            <div className="simple-card-box2">


                                <ul className='simple-card2'>
                                    <h2>Preparation of Financial Statements</h2>
                                    <li> We compile your annual financial statements, including your profit and loss statement, balance sheet, and cash flow statement, ensuring they are accurate and aligned with both HMRC and Companies House standards.</li>
                                </ul>

                                <ul className='simple-card2'>
                                    <h2>Compliance</h2>
                                    <li> We ensure your accounts meet all statutory obligations. Whether it’s your Company Tax Return for HMRC or the statutory annual accounts for Companies House, we make sure everything is correct and filed within deadlines.</li>
                                </ul>

                                <ul className='simple-card2'>
                                    <h2>Filing with Companies House and HMRC</h2>
                                    <li> We handle the submission of your accounts, including your Corporation Tax return (CT600) to HMRC, and your annual accounts to Companies House.</li>
                                </ul>




                            </div>
                        </div>

                        <div className="simple-para">
                            <h2 className='page-heading'>Key Filling Deadlines</h2>
                            <div className="double-card-box">
                                <ul className='double-card'>
                                    <h2>Companies House</h2>
                                    <li> Limited companies must submit their year-end accounts to Companies House <strong>within 9 months</strong>after the end of their financial year. For example, if your company’s financial year ends on 31st December, your accounts must be filed by <strong> 30th September</strong> the following year.</li>
                                </ul>

                                <ul className='double-card'>
                                    <h2>HMRC</h2>
                                    <li>  Your Corporation Tax Return (CT600) must be filed with HMRC <strong> within 12 months</strong> after the end of the accounting period. However, any corporation tax due must be paid <strong> within 9 months and 1 day</strong> after the end of the accounting period. Failing to meet these deadlines can result in penalties and interest charges, which is why our team ensures everything is submitted well in advance.</li>
                                </ul>

                            </div>
                        </div>

                        <div className="accounting1">
                            <h2 className='accounting-heading'>Management Accounts: Real-Time Insights for Better Decision Making</h2>
                            <p className='accounting-para'>
                                While year-end accounts give a summary of your financial position,<strong>Management Accounts</strong> offer ongoing insights that help you make informed decisions throughout the year. With management accounts, you don’t have to wait until the end of the financial year to get a handle on your business’s performance. These reports are vital for tracking key performance indicators (KPIs), managing cash flow, and responding quickly to any issues that may arise.

                            </p>
                            <p className='accounting-para'>Our Management Accounts service includes the preparation of monthly or quarterly financial reports that provide real-time data on your income, expenses, profitability, and more. This level of detail is essential for growing businesses, allowing you to adjust your strategies and make proactive decisions.</p>
                        </div>

                        <div className="simple-para">
                            <h2 className='page-heading'>Benefits of Management Accounts:</h2>
                            <div className="benefit-cards">

                                <ul className='benefit-card'>
                                    <img className="buisness_img" src={accounting_4} alt="" />

                                    <h2>Regular Financial Reports</h2>
                                    <li> We provide up-to-date financial reports, including income statements, balance sheets, and cash flow statements, on a monthly or quarterly basis. This helps you monitor performance in real-time and adjust strategies as needed.</li>
                                </ul>
                                <ul className='benefit-card'>
                                    <img className="buisness_img" src={accounting_1} alt="" />
                                    <h2>Cash Flow Management</h2>
                                    <li> Effective cash flow management is essential to the survival and growth of any business. Our management accounts service includes tracking your cash inflows and outflows to ensure you have the liquidity needed to meet your obligations and take advantage of growth opportunities.</li>
                                </ul>
                                <ul className='benefit-card'>
                                    <img className="buisness_img" src={accounting_3} alt="" />

                                    <h2>Performance Monitoring</h2>
                                    <li> We customize our management accounts to highlight the KPIs that matter most to your business. By regularly tracking these indicators, you can spot trends, address potential problems early, and make decisions that drive long-term success.</li>
                                </ul>
                                <ul className='benefit-card'>
                                    <img className="buisness_img" src={accounting_2} alt="" />

                                    <h2>Informed Decision Making</h2>
                                    <li>With detailed, regular insights into your finances, you can make decisions based on current data rather than waiting for year-end results. Whether it’s controlling costs, expanding operations, or planning investments, management accounts give you the information you need to act decisively.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="simple-para">
                            <h2 className='page-heading'>Why Choose Faiz Accountax for Your Accounting Needs?</h2>
                            <p className='page-center-para'>
                                At Faiz Accountax, we believe that accounting services should do more than just keep you compliant. Our goal is to provide actionable insights that help your business thrive. Here’s why businesses trust us with their accounting:
                            </p>
                            <div className="page-cards-shadows2">


                                <Cards title="Tailored Services" des="We understand that no two businesses are the same. That’s why we offer customized accounting solutions to meet the specific needs of your business, whether you’re a small startup or an established company." />

                                <Cards title="Expert Knowledge" des="As members of the Association of Chartered Certified Accountants, Chartered Institute of Taxation, and Association of Taxation Technicians, our team is highly qualified to handle even the most complex accounting needs." />

                                <Cards title="Focus on Growth" des=" With our detailed year-end and management accounts, you’ll have the financial clarity you need to make informed decisions that promote business growth and sustainability." />

                                <Cards title="Flexible and Convenient" des="Whether you prefer in-office consultations or remote services, our team is here to provide support that fits your schedule and needs." />
                            </div>

                            <div className="simple-para">
                                <h2 className='page-heading'>Contact Us Today</h2>
                                <p className='page-para'>
                                    Don’t let accounting become a burden on your business. Let Faiz Accountax take care of your Year-End Accounts and Management Accounts, providing you with the clarity and confidence you need to succeed. Contact us today to learn more about how we can support your business with our professional accounting services.

                                </p>

                            </div>
                        </div>
                    </div>


                </div>
                <Question />
            </div>
            <Footer onOpenPopup={onOpenPopup} />

        </>
    )
}

export default AccountingPage
