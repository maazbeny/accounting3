import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Scrollbar from '../components/Scrollbar/Scrollbar';
import Footer from '../components/Footer/Footer';
import secretary_services from '../assets/secretary-services.jpg'
import secretary_essential from '../assets/secretary-essential.jpg'
import help from '../assets/help.jpg'
import secetary_1 from '../assets/Company Secretarial Services/Annual Accounts.png'
import secetary_2 from '../assets/Company Secretarial Services/Scalability.png'
import secetary_3 from '../assets/Company Secretarial Services/Confirmation Statement.png'
import secetary_4 from '../assets/Company Secretarial Services/Changes to Shareholding.png'
import secetary_5 from '../assets/Company Secretarial Services/Appointment or Resignation of Directors.png'
import Question from '../components/Question/Question';
import Cards from '../components/Cards/Cards.jsx';
import { Helmet } from 'react-helmet';
import Cards2 from '../Cards2/Cards2.jsx';

const SecrataryPage = ({ onOpenPopup }) => {
  // useEffect(() => {
  //   document.title = 'Secretary Services  | Faiz Accountax';
  // }, []);
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <title>Company Secretarial Services - Faiz Accountax</title>
        <meta name="description" content="Faiz Accountax offers expert company secretarial services, including annual
returns, company formations, and statutory compliance for UK businesses." />
        <meta name="keywords" content="company secretarial services, UK company formation, annual returns, statutory
compliance" />
        <meta name="author" content="Faiz Accountax" />



      </Helmet>
      <Scrollbar onOpenPopup={onOpenPopup} />
      <div className="accounting-top">
        <div className="nav-head">
          <Navbar onOpenPopup={onOpenPopup} />
          <div className="head-line">
            <h1 className='accounting-head'>Company Secretarial Services
            </h1>

            <hr />
          </div>
        </div>



        <div className='buisnesspage'>
          <div className="accounting-left">
            <div className="simple-para">
              <h2 className='page-heading-top'>Company Secretarial Services - Compliance and Corporate Governance for UK Businesses</h2>
              <p className='page-para'>
                Running a business comes with numerous legal responsibilities, and staying compliant with corporate regulations is crucial to avoid penalties and ensure smooth operations. At Faiz Accountax, we offer comprehensive Company Secretarial Services to ensure that your business meets all statutory requirements. From maintaining statutory records to filing annual returns, we provide expert support, allowing you to focus on growing your business without worrying about compliance.

              </p>

            </div>
            <div className="double-reverse-section">


              <div className="written-section">
                <h2 className='written-heading'>What Are Company Secretarial Services?</h2>
                <p className='written-para'>
                  Company secretarial services are designed to help businesses meet their legal obligations as outlined by Companies House and other regulatory bodies. These services are essential for ensuring that your business operates within the framework of corporate law. Key responsibilities include maintaining statutory books, filing required documents on time, and ensuring compliance with governance standards.
                </p>
                <p className='written-para'>As your dedicated company secretary, we take care of these tasks, ensuring that your business remains compliant with all legal requirements, regardless of your company’s size or structure.</p>
              </div>
              <div className="image-section">
                <img className='secretary-img' src={secretary_services} alt="" />
              </div>
            </div>

            <div className="simple-para">
              <h2 className='page-heading'>Our Company Secretarial Services</h2>

              <div className="page-cards-shadows2">


                <Cards2 title="Annual Returns" des="Every company in the UK is required to file an annual confirmation statement to Companies House. We manage the preparation and submission of these statements, ensuring that they accurately reflect your company’s information and are submitted before the deadline." />



                <Cards2 title="Company Formation" des="Starting a business involves numerous administrative tasks, including registering your company with Companies House. We handle the entire company formation process, ensuring that your business is legally registered and set up for success from day one." />


                <Cards2 title="Change of Directors" des="Companies must inform Companies House of any changes to their directors or company secretaries. We handle all updates related to the appointment, resignation, or change of details for directors, ensuring that your records remain accurate and compliant." />


                <Cards2 title="Filing Annual Accounts" des="Filing annual accounts with Companies House is a legal requirement for all UK companies. We assist in the preparation and submission of your company's financial statements, ensuring they are filed on time and in full compliance with statutory obligations." />

                <Cards2 title="Filing of Statutory Documents" des="Filing documents such as changes in share capital or your company’s registered office address can be tedious and time-consuming. Our team handles all statutory filings with Companies House, ensuring timely submissions to keep your business compliant." />

                <Cards2 title="Board Meeting Support" des="We assist with preparing for and documenting board meetings, ensuring that agendas are properly set and that minutes are recorded and filed according to corporate governance standards." />

                <Cards2 title="Shareholder Communications" des="Managing shareholder communications, including issuing share certificates and recording share transfers, is a critical function of company secretarial services. We ensure that all communications are properly handled, maintaining transparency and accuracy." />



                <Cards2 title="Corporate Governance Advice" des="We provide advice on corporate governance best practices, helping you implement structures and procedures that comply with UK law and align with your business’s objectives." />

              </div>
            </div>
            <div className="simple-para">
              <h2 className='page-heading'>The Company Secretarial Process with Faiz Accountax</h2>
              <div className="benefit-cards2">
                <ul className='benefit-card2'>
                  <div className="process-circle">
                    <p>1</p>
                  </div>
                  <h2>Initial Consultation</h2>
                  <li> We start by understanding your business’s specific needs and current compliance status. This allows us to tailor our services to ensure your company is fully compliant with all relevant legal requirements.
                  </li>
                </ul>

                <ul className='benefit-card2'>
                  <div className="process-circle">
                    <p>2</p>
                  </div>
                  <h2>Setup and Maintenance</h2>
                  <li> Once we’re familiar with your business’s structure, we establish and maintain all required statutory registers, file documents with Companies House, and manage ongoing compliance tasks such as confirmation statements and annual returns.</li>
                </ul>
                <ul className='benefit-card2'>
                  <div className="process-circle">
                    <p>3</p>
                  </div>
                  <h2> Ongoing Compliance </h2>
                  <li> We monitor filing deadlines and regulatory changes, ensuring that your business remains compliant throughout the year. This proactive approach prevents any last-minute rush or risk of penalties.</li>
                </ul>
                <ul className='benefit-card2'>
                  <div className="process-circle">
                    <p>4</p>
                  </div>
                  <h2> Regular Reviews  </h2>
                  <li>  We conduct regular reviews of your company’s compliance status and statutory registers to ensure everything is in order. If changes are required (such as the appointment of a new director or change in shareholding), we handle the filings and updates promptly.</li>
                </ul>

              </div>
            </div>

            <div className="simple-para">
              <h2 className='page-heading'>Key Filing Deadlines</h2>
              <div className="benefit-cards">

                <ul className='benefit-card'>
                  <img src={secetary_2} alt="" className="buisness_img" />

                  <h2>Confirmation Statement</h2>
                  <li> Every company must file a confirmation statement with Companies House at least once a year. This must be done within 14 days of the anniversary of the company’s incorporation or the last confirmation statement date.</li>
                </ul>

                <ul className='benefit-card'>
                  <img src={secetary_1} alt="" className="buisness_img" />
                  <h2>Annual Accounts</h2>
                  <li> Company annual accounts must be filed with Companies House within 9 months of the end of your company’s financial year.</li>
                </ul>

                <ul className='benefit-card'>
                  <img src={secetary_4} alt="" className="buisness_img" />

                  <h2>Appointment or Resignation of Directors</h2>
                  <li> Any changes to the company’s directors or secretaries must be reported to Companies House within 14 days of the change.</li>
                </ul>

                <ul className='benefit-card'>
                  <img src={secetary_3} alt="" className="buisness_img" />

                  <h2>Changes to Shareholding</h2>
                  <li> Any changes to the company’s share structure must be updated in the statutory registers and reported to Companies House within one month.</li>
                </ul>

              </div>


            </div>
            <div className="double-section">
              <div className="image-section">
                <img className='secretary-essential' src={secretary_essential} alt="" />
              </div>
              <div className="written-section">
                <h2 className='written-heading'>Why Company Secretarial Services Are Essential</h2>
                <p className="written-para">
                  Staying on top of your company’s legal obligations is essential to avoid fines, penalties, and potential legal disputes. Company secretarial services ensure that your business complies with all corporate regulations, providing peace of mind and freeing you to focus on growing your business.

                </p>
                <p className="written-para">
                  Failing to file documents or maintain proper records can result in significant penalties from Companies House and, in some cases, could lead to legal consequences. Our team at Faiz Accountax ensures that you meet all your company’s obligations efficiently and accurately.

                </p>
              </div>
            </div>
            <div className="double-reverse-section">
              <div className="written-section">
                <h2 className='written-heading'>How We Can Help Your Business</h2>
                <p className="written-para">
                  At Faiz Accountax, we take the stress out of managing your company’s compliance obligations. Our company secretarial services ensure that your business is compliant with all legal requirements, from filing confirmation statements to maintaining accurate statutory records. We offer a seamless service that not only helps you stay compliant but also ensures that your business is well-organized and legally sound.

                </p>

              </div>
              <div className="image-section">
                <img className='help' src={help} alt="" />
              </div>
            </div>

            <div className="simple-para">
              <h2 className='page-heading'>Why Choose Faiz Accountax for Company Secretarial Services?</h2>

              <div className="page-cards-shadows2">



                <Cards title="Tailored Solutions" des="We have a deep understanding of UK corporate law and the compliance requirements set out by Companies House. Our team ensures that your business meets all legal obligations, helping you avoid penalties and maintain a good standing." />

                <Cards title="Proactive Approach" des=" Our team monitors important deadlines and compliance updates, ensuring that all filings and submissions are made on time. You’ll never have to worry about missing a deadline again." />

                <Cards title="Seamless Process" des="From managing statutory filings to keeping your records up-to-date, we handle all aspects of company secretarial duties, so you can focus on running your business." />

                <Cards title="Year-End Services" des="At the end of the tax year, we prepare all necessary payroll and CIS documentation for your employees and subcontractors. This includes filing year-end reports with HMRC and providing P60s and CIS statements." />


              </div>
              <div className="simple-para">
                <h2 className='page-heading-bottom'>
                  Contact Us for Reliable Company Secretarial Services
                </h2>
                <p className='page-para'>
                  Ensure your business meets all legal requirements with the expert support of Faiz Accountax. From company formation to ongoing compliance, we offer tailored company secretarial services that help keep your business organized and compliant. Contact us today to learn how we can assist your company with our professional secretarial services.

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

export default SecrataryPage
