import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Scrollbar from '../components/Scrollbar/Scrollbar';
import Footer from '../components/Footer/Footer';
import './CSS/Bookkeeping.css'
import book_matters from '../assets/book_matters.png'
import growth from '../assets/growth.jpg'
import book_1 from '../assets/Bookkeeping Services/Financial Clarity.png'
import book_2 from '../assets/Bookkeeping Services/Save Time and Reduce Errors.png'
import book_3 from '../assets/Bookkeeping Services/Scalability.png'
import book_4 from '../assets/Bookkeeping Services/Tax Compliance.png'
import Question from '../components/Question/Question';
import Cards from '../components/Cards/Cards';
import { Helmet } from 'react-helmet';


const BookkeepingPage = ({ onOpenPopup }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  // useEffect(() => {
  //   document.title = 'Bookkeeping Services | Faiz Accountax';
  // }, []);
  return (
    <>
      <Helmet>
        <title>Bookkeeping Services for Small Businesses and Freelancers - Faiz Accountax</title>
        <meta name="description" content="Keep your business finances in order with Faiz Accountax’s professional
bookkeeping services, designed for small businesses and freelancers in the UK." />
        <meta name="keywords" content="bookkeeping services, small business bookkeeping, UK freelancers
bookkeeping, accounting services" />
      </Helmet>
      <Scrollbar onOpenPopup={onOpenPopup} />
      <div className="buisness-top">
        <div className="nav-head">
          <Navbar onOpenPopup={onOpenPopup} />
          <div className="head-line">
            <h1 className='buisness-head'>Bookkeeping Services  </h1>
            <hr />
          </div>
        </div>



        <div className='buisnesspage'>
          <div className="accounting-left">
            <div className="simple-para">
              <h2 className='page-heading'>Bookkeeping Services for UK Businesses - Streamlined Accounting Solutions</h2>
              <p className='page-para'>
                At <strong>Faiz Accountax,</strong> we understand that accurate bookkeeping is the backbone of any successful business. Proper financial records are essential for making informed business decisions, ensuring compliance with tax regulations, and maintaining a clear view of your company’s financial health. Our professional Bookkeeping Services provide you with the detailed and organized financial data you need to run your business efficiently, freeing you from the time-consuming task of managing your own accounts.

              </p>

            </div>
            <div className="double-reverse-section">
              <div className="written-section">
                <h2 className='written-heading'>Why Bookkeeping Matters</h2>
                <p className='written-para'>
                  Bookkeeping involves the daily recording of your financial transactions, including sales, purchases, payments, and receipts. It’s more than just a compliance requirement—it’s a valuable tool for monitoring your business’s financial performance, managing cash flow, and planning for growth.
                </p>
                <p className='written-para'>Bookkeeping involves the daily recording of your financial transactions, including sales, purchases, payments, and receipts. It’s more than just a compliance requirement—it’s a valuable tool for monitoring your business’s financial performance, managing cash flow, and planning for growth.</p>
              </div>
              <div className="image-section">
                <img className='booking-img' src={book_matters} alt="" />
              </div>
            </div>

            <div className="simple-para">
              <h2 className='page-heading'>Our Comprehensive Bookkeeping Services</h2>

              <div className="shadow-cards">


                <Cards title="Recording Transactions" des="We ensure that all your financial transactions—whether income or expenses—are recorded systematically and accurately, providing you with a clear, up-to-date picture of your financial position at any given time." />


                <Cards title="Bank Reconciliation" des="We regularly reconcile your business’s financial records with your bank statements to ensure everything matches. This process helps to identify any discrepancies and avoid potential errors in your accounts." />


                <Cards title="Cash Flow Management" des="Proper bookkeeping helps you manage your cash flow effectively, ensuring that you have enough funds to cover operational expenses and make informed financial decisions. Our services include monitoring inflows and outflows, giving you a clearer view of your cash flow status." />

                <Cards title="Invoicing and Accounts Receivable" des="We help you manage your invoicing and accounts receivable processes to ensure you’re paid on time. This includes tracking outstanding invoices and sending reminders to ensure timely payments." />

                <Cards title="Expense Tracking and Categorization" des="Keeping track of your business expenses is essential for understanding where your money is going. We categorize and record your expenses accurately, making it easier to claim tax deductions and prepare financial reports." />



                <Cards title="Preparation for Tax Season" des="With well-maintained books, your business will be fully prepared for tax season. We ensure that all necessary documents and financial statements are in order, making the tax filing process smooth and stress-free." />



              </div>
            </div>

            <div className="simple-para">
              <h2 className='page-heading'>The Bookkeeping Process with Faiz Accountax</h2>
              <p className='page-center-para'>Here’s how our seamless bookkeeping service works:</p>
              <div className="accounting2-lists">
                <div className="benefit-cards2">
                  <ul className='benefit-card2'>
                    <div className="process-circle">
                      <p>1</p>
                    </div>
                    <h2>Initial Setup</h2>
                    <li> We begin by setting up your bookkeeping system, either by using your existing system or transitioning you to a modern cloud-based solution. We’ll work closely with you to understand your specific needs and tailor our services accordingly.
                    </li>
                  </ul>

                  <ul className='benefit-card2'>
                    <div className="process-circle">
                      <p>2</p>
                    </div>
                    <h2>Ongoing Record-Keeping</h2>
                    <li> Once your system is in place, we maintain accurate records of your financial transactions on an ongoing basis. This includes regularly updating your accounts, reconciling statements, and ensuring your records are up-to-date at all times.</li>
                  </ul>
                  <ul className='benefit-card2'>
                    <div className="process-circle">
                      <p>3</p>
                    </div>
                    <h2>Regular Reports </h2>
                    <li> We provide regular financial reports—monthly or quarterly—so you always have a clear view of your business’s financial health. These reports are essential for tracking performance, managing cash flow, and planning for growth.</li>
                  </ul>
                  <ul className='benefit-card2'>
                    <div className="process-circle">
                      <p>4</p>
                    </div>
                    <h2> Tax Preparation  </h2>
                    <li>   When tax season approaches, we ensure that all your financial records are in order and ready for submission. This not only helps with filing your tax return but also ensures that you’re fully compliant with HMRC regulations.</li>
                  </ul>

                </div>

              </div>
            </div>

            <div className="simple-para">
              <h2 className='page-heading'>Key Benefits of Outsourcing Your Bookkeeping</h2>
              <p className='page-center-para'>
                Outsourcing your bookkeeping to Faiz Accountax offers several advantages:
              </p>
              <div className="benefit-cards">

                <ul className='benefit-card'>
                  <img src={book_2} alt="" className="buisness_img" />

                  <h2>Save Time and Reduce Errors</h2>
                  <li> By letting us manage your bookkeeping, you save time and minimize the risk of errors. Our experienced team ensures your records are accurate and compliant, giving you more time to focus on running your business.</li>
                </ul>

                <ul className='benefit-card'>
                  <img src={book_1} alt="" className="buisness_img" />

                  <h2>Financial Clarity</h2>
                  <li> With detailed and accurate records, you’ll have a clear view of your business’s finances at all times. This clarity allows you to make informed decisions, manage your cash flow effectively, and plan for future growth.</li>
                </ul>

                <ul className='benefit-card'>
                  <img src={book_4} alt="" className="buisness_img" />

                  <h2>Tax Compliance</h2>
                  <li> Maintaining accurate records is crucial for tax compliance. Our bookkeeping services ensure that your financial statements are always up-to-date and ready for tax filing, helping you avoid penalties and missed deadlines.</li>
                </ul>

                <ul className='benefit-card'>
                  <img src={book_3} alt="" className="buisness_img" />
                  <h2>Scalability</h2>
                  <li>Whether you’re a small business just starting out or a growing enterprise, our bookkeeping services are tailored to meet the specific needs of your business. As your business grows, we scale our services to keep pace with your changing requirements.</li>
                </ul>

              </div>

            </div>

            <div className="double-section">
              <div className="image-section">
                <img className='growth-img' src={growth} alt="" />
              </div>
              <div className="written-section">
                <h2 className='written-heading'>How We Can Help Your Business Grow</h2>
                <p className='written-para'>
                  At Faiz Accountax, we go beyond just recording transactions. Our bookkeeping services provide valuable insights into your business’s financial performance, helping you identify opportunities for growth and areas for improvement. By providing you with regular, detailed financial reports, we empower you to make data-driven decisions that drive your business forward.

                </p>
              </div>

            </div>

            <div className="simple-para">
              <h2 className='page-heading'>Why Choose Faiz Accountax for Bookkeeping?</h2>
              <div className="payroll-cards2">


                <Cards title="Experienced Team" des="Our team of qualified accountants has extensive experience in managing the bookkeeping needs of businesses across various industries. We ensure that your records are accurate, compliant, and organized." />


                <Cards title="Tailored Solutions" des="We understand that every business is unique, which is why we offer customized bookkeeping services to fit your specific needs and goals." />

                <Cards title="Cloud-Based" des="We use the latest cloud-based bookkeeping solutions, allowing you to access your financial records anytime, anywhere, with full transparency and security." />


                <Cards title="Personalized Support" des="Our team is always available to answer your questions and provide support when needed. Whether you prefer in-person consultations or remote assistance, we’re here to help." />


              </div>
            </div>

            <div className="simple-para">
              <h2 className='page-heading'>Contact Us for Professional Bookkeeping Services</h2>

              <p className='page-center-para'>
                Take control of your business’s finances with the help of our expert bookkeeping services. At Faiz Accountax, we provide accurate, organized, and reliable bookkeeping, ensuring that your business stays compliant and financially healthy. Contact us today to learn more about how we can support your business with tailored bookkeeping solutions.
              </p>

            </div>
          </div>


        </div>
        <Question />
      </div>

      <Footer onOpenPopup={onOpenPopup} />

    </>
  )
}

export default BookkeepingPage
