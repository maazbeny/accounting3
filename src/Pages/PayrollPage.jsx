import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Scrollbar from '../components/Scrollbar/Scrollbar';
import Footer from '../components/Footer/Footer';
import './CSS/PayrollPage.css'
import payrollcis from '../assets/payroll-cis.jpg'
import payroll_1 from '../assets/Payroll Services/Informed Decision Making.png'
import payroll_2 from '../assets/Payroll Services/Monthly CIS Payments.png'
import payroll_3 from '../assets/Payroll Services/Monthly CIS Returns.png'
import payroll_4 from '../assets/Payroll Services/Performance Monitoring.png'
import Question from '../components/Question/Question';
import Cards from '../components/Cards/Cards';
import { Helmet } from 'react-helmet';



const PayrollPage = ({ onOpenPopup }) => {
    // useEffect(() => {
    //     document.title = 'Payroll  | Faiz Accountax';
    // }, []);
    return (
        <>
            <Helmet>
                <title>Payroll &amp; CIS Services for Contractors and Employers in the UK - Faiz Accountax</title>
                <meta name="description" content="Faiz Accountax offers comprehensive payroll and CIS services, ensuring timely
submissions and compliance with UK regulations for contractors and employers." />
                <meta name="keywords" content="payroll services, CIS compliance, UK contractors, payroll management, CIS
returns" />
                <meta name="author" content="Faiz Accountax" />
            </Helmet>
            <Scrollbar onOpenPopup={onOpenPopup} />
            <div className="buisness-top">
                <div className="nav-head">
                    <Navbar onOpenPopup={onOpenPopup} />

                    <h1 className='buisness-head'>Payroll Services <hr /></h1>
                </div>

                <div className='buisnesspage'>
                    <div className="accounting-left">
                        <div className="simple-para">
                            <h2 className='page-heading'>Payroll & CIS Services - Complete Payroll Management for UK Contractors and Businesses</h2>
                            <p className='page-para'>
                                At <strong>Faiz Accountax</strong>,we understand that managing payroll and staying compliant with the Construction Industry Scheme (CIS) can be time-consuming and complex for businesses. Our expert team is here to take the burden off your shoulders, offering comprehensive payroll processing and CIS compliance services that ensure smooth operations and adherence to all regulatory requirements. With our help, you can focus on running your business while we handle the administrative tasks.

                            </p>

                        </div>
                        <div className="double-reverse-section">
                            <div className="written-section">
                                <h2 className='written-heading'>What Are Payroll and CIS?</h2>
                                <p className='written-para'>
                                    Payroll is the process of managing employee wages, deductions, and payments, ensuring that your staff is paid accurately and on time. For businesses in the UK, payroll also involves managing PAYE (Pay As You Earn) and National Insurance Contributions (NICs), making sure that the correct deductions are made and reported to HMRC.
                                </p>
                                <p className='accounting-para'>The Construction Industry Scheme (CIS) is a specific tax requirement for contractors and subcontractors in the construction industry. It involves the deduction of tax from payments to subcontractors, which must then be reported and paid to HMRC. Both payroll and CIS come with strict deadlines and complex rules, making professional management essential for businesses to remain compliant and avoid penalties.</p>
                            </div>
                            <div className="image-section">
                                <img className='payroll-img' src={payrollcis} alt="" />
                            </div>
                        </div>

                        <div className="simple-para">
                            <h2 className='page-heading'>How We Can Help with Payroll</h2>
                            <p className='page-center-para'>At Faiz Accountax, we provide a fully managed payroll service, ensuring your employees are paid accurately, on time, and in compliance with HMRC requirements. Our payroll services include:</p>
                            <div className="page-cards-shadows2">



                                <Cards title="Payroll Processing" des="We handle the complete payroll process, from calculating wages to applying PAYE and NIC deductions, ensuring your employees are paid accurately and on schedule." />


                                <Cards title="Payslip Generation" des="We provide detailed payslips for each employee, which can be delivered electronically or printed based on your preference." />



                                <Cards title="HMRC Submissions" des="We manage all payroll-related submissions to HMRC, including Real Time Information (RTI) filings, which are required each time you run payroll." />

                                <Cards title="Auto-Enrolment Pension " des="We assist with workplace pension schemes, ensuring that auto-enrolment requirements are met, and employee contributions are managed correctly." />


                                <Cards position="50%" title="Year-End Payroll Services" des=" At the end of each tax year, we prepare and submit all relevant year-end payroll reports, including P60s for your employees and P11D forms where applicable." />


                            </div>
                        </div>

                        <div className="simple-para">
                            <h2 className='page-heading'>Key Payroll Deadlines</h2>
                            <div className="benefit-cards3">
                                <ul className='benefit-card2'>
                                    <h2>RTI Submission</h2>
                                    <li> Every time you pay employees, an RTI report must be submitted to HMRC on or before payday.
                                    </li>
                                </ul>

                                <ul className='benefit-card2'>
                                    <h2>Monthly PAYE Payments</h2>
                                    <li>  PAYE and NIC payments must be made to HMRC by the 22nd of each month (or the 19th if paying by cheque).</li>
                                </ul>
                                <ul className='benefit-card2'>
                                    <h2> Year-End Reporting</h2>
                                    <li> By 5th April, all year-end payroll processes must be completed, and final submissions made to HMRC. P60s must be provided to employees by 31st May.</li>
                                </ul>

                            </div>
                        </div>

                        <div className="simple-para">
                            <h2 className='page-heading'>How We Can Help with CIS Compliance</h2>
                            <p className='page-center-para'>
                                Managing CIS can be particularly challenging for businesses in the construction industry, but with Faiz Accountax, you can stay fully compliant with CIS regulations. Our CIS services include:

                            </p>
                            <div className="page-cards-shadows2">


                                <Cards title="CIS Registration" des=" We help contractors and subcontractors register with HMRC under the CIS scheme, ensuring that you’re compliant from the outset." />


                                <Cards title="Monthly CIS Returns" des=" We handle the submission of your monthly CIS returns to HMRC, ensuring all deductions and payments are reported accurately." />

                                <Cards title="Deduction Calculations" des=" We manage the calculation of tax deductions from subcontractor payments and ensure these are in line with HMRC’s guidelines." />

                                <Cards title="Subcontractor Verification" des=" Before making any payments, we verify subcontractors with HMRC to ensure the correct deductions are made and avoid any penalties." />

                                <Cards position="50%" title="CIS Statements" des=" We provide detailed monthly CIS statements to subcontractors, ensuring transparency and accuracy in the tax deductions made." />
                            </div>

                        </div>

                        <div className="simple-para">
                            <h2 className='page-heading'>Key CIS Deadlines</h2>
                            <div className="benefit-cards">

                                <ul className='benefit-card'>
                                    <img className="buisness_img" src={payroll_3} alt="" />

                                    <h2>Monthly CIS Returns</h2>
                                    <li> These must be submitted to HMRC by the 19th of every month for the previous tax month’s payments and deductions.</li>
                                </ul>
                                <ul className='benefit-card'>
                                    <img className="buisness_img" src={payroll_2} alt="" />

                                    <h2>Monthly CIS Payments</h2>
                                    <li> Any CIS tax deducted from subcontractors must be paid to HMRC by the 22nd of the month (or the 19th if paying by cheque).</li>
                                </ul>
                                <ul className='benefit-card'>
                                    <img className="buisness_img" src={payroll_4} alt="" />

                                    <h2>Performance Monitoring</h2>
                                    <li> We customize our management accounts to highlight the KPIs that matter most to your business. By regularly tracking these indicators, you can spot trends, address potential problems early, and make decisions that drive long-term success.</li>
                                </ul>
                                <ul className='benefit-card'>
                                    <img className="buisness_img" src={payroll_1} alt="" />
                                    <h2>Informed Decision Making</h2>
                                    <li>  With detailed, regular insights into your finances, you can make decisions based on current data rather than waiting for year-end results. Whether it’s controlling costs, expanding operations, or planning investments, management accounts give you the information you need to act decisively.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="simple-para">
                            <h2 className='page-heading'>The Payroll and CIS Process with Faiz Accountax</h2>
                            <div className="benefit-cards2">
                                <ul className='benefit-card2'>
                                    <div className="process-circle">
                                        <p>1</p>
                                    </div>
                                    <h2>Initial Consultation</h2>
                                    <li> We begin with a consultation to understand your business needs. Whether you're managing a large team or a small group of subcontractors, we customize our payroll and CIS services to fit your specific requirements.
                                    </li>
                                </ul>

                                <ul className='benefit-card2'>
                                    <div className="process-circle">
                                        <p>2</p>
                                    </div>
                                    <h2>Onboarding</h2>
                                    <li> Once we understand your payroll and CIS needs, we handle all onboarding processes. This includes setting up employee payroll data, verifying subcontractors with HMRC, and registering you for any necessary services.</li>
                                </ul>
                                <ul className='benefit-card2'>
                                    <div className="process-circle">
                                        <p>3</p>
                                    </div>
                                    <h2> Ongoing Compliance </h2>
                                    <li> We process payroll at your specified frequency (weekly, monthly, or otherwise) and handle all CIS deductions and submissions on a monthly basis. Our systems ensure that RTI submissions and CIS returns are filed accurately and on time with HMRC.</li>
                                </ul>
                                <ul className='benefit-card2'>
                                    <div className="process-circle">
                                        <p>4</p>
                                    </div>
                                    <h2>Reports and Payslips </h2>
                                    <li>  After each payroll run, we provide detailed reports on employee wages, deductions, and taxes. For CIS, we ensure that subcontractor tax statements are generated and shared each month.</li>
                                </ul>


                            </div>

                            <div className="simple-para">
                                <h2 className='page-heading'>Why Choose Faiz Accountax for Payroll & CIS Services?</h2>

                                <div className="page-cards-shadows2">


                                    <Cards title="Accuracy and Compliance" des="Our team of qualified accountants ensures that every aspect of payroll and CIS is handled accurately and in full compliance with HMRC regulations. You never have to worry about missed deadlines or incorrect submissions." />

                                    <Cards title="Time and Cost Efficiency" des=" Outsourcing your payroll and CIS to Faiz Accountax saves you time, reduces errors, and ensures that your business remains fully compliant with tax laws, avoiding costly fines and penalties." />

                                    <Cards title="Tailored Solutions" des=" Whether you're a small business with a handful of employees or a contractor managing multiple subcontractors, we provide payroll and CIS services that are tailored to your business's size and complexity." />


                                    <Cards title="Experienced Team" des="  With years of experience in payroll and CIS compliance, we stay updated on the latest regulations, ensuring that your business is always in line with HMRC requirements." />
                                </div>
                                <div className="simple-para">
                                    <h2 className='page-heading'>Contact Us for Expert Payroll & CIS Services</h2>
                                    <p className='page-contact-para'>
                                        Managing payroll and CIS doesn’t have to be a hassle. Let Faiz Accountax take care of the details, ensuring that your business runs smoothly, your employees are paid on time, and your subcontractors are fully compliant with HMRC regulations. Contact us today to learn more about how we can simplify your payroll and CIS processes and keep your business on track.

                                    </p>

                                </div>
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

export default PayrollPage
