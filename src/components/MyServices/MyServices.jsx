import React from 'react'
import { Link } from 'react-router-dom'
import "./MyServices.css"
import personal from '../../assets/3.png'
import business from '../../assets/business4.png'
import services from '../../assets/7.png'
import payroll from '../../assets/4.png'
import secratary from '../../assets/secratary4.png'
import bookkeeping from '../../assets/bookkeeping4.png'



const MyServices = () => {
    return (
        <div id='services' className='service'>
            <h2 className='service-heading'>Comprehensive Tax and Accounting Services for Small Businesses</h2>
            <p className='service-para'>Explore our range of tailored services designed to meet your specific financial needs</p>
            <div className="card-container">
                <div className="service-card">
                    <div className="image-box">
                        <img src={personal} alt="" />
                    </div>
                    <p className='card-heading'>Personal Taxes</p>
                    <p className='card-para'>Navigating personal taxes can be complex and time-consuming. We offer personalized tax planning and compliance services to ensure you maximize your tax benefits while staying compliant with the latest regulations. Our expert advisers are dedicated to providing clear, actionable advice tailored to your unique financial situation.
                        <Link className="card-link" to='/personal' ><p>Read More</p><i class="fa-solid fa-arrow-right"></i></Link>

                    </p>
                </div>
                <div className="service-card">
                    <div className="image-box">
                        <img src={business} alt="" />
                    </div>
                    <p className='card-heading'>Business Taxes</p>
                    <p className='card-para'>Managing business taxes efficiently is crucial for your company's success. We provide comprehensive tax solutions designed to minimize your tax liabilities and enhance your financial health. Our expert team stays up-to-date with the latest tax laws and regulations, ensuring your business remains compliant and optimized for growth.
                        <Link className="card-link" to='/business' ><p>Read More</p><i class="fa-solid fa-arrow-right"></i></Link>

                    </p>
                </div>
                <div className="service-card">
                    <div className="image-box">
                        <img src={services} alt="" />
                    </div>
                    <p className='card-heading'>Accounting Services</p>
                    <p className='card-para'>Whether you're a company, sole trader, or partnership, accurate accounting is essential for financial success. we provide tailored accounting services to meet the unique needs of your business structure. Our experienced team ensures your accounts are thoroughly maintained, offering clarity and compliance to support your business growth.
                        <Link className="card-link" to='/accounting' ><p>Read More</p><i class="fa-solid fa-arrow-right"></i></Link>

                    </p>
                </div>
                <div className="service-card">
                    <div className="image-box">
                        <img src={payroll} alt="" />
                    </div>
                    <p className='card-heading'>Payroll & CIS</p>
                    <p className='card-para'>Efficient payroll and Construction Industry Scheme (CIS) management are vital for smooth business operations.we offer comprehensive payroll services and CIS management to ensure timely and accurate processing. Our expert team handles all aspects, from compliance to reporting, allowing you to focus on running your business with peace of mind.
                        <Link className="card-link" to='/payroll' ><p>Read More</p><i class="fa-solid fa-arrow-right"></i></Link>

                    </p>
                </div>
                <div className="service-card">
                    <div className="image-box">
                        <img src={bookkeeping} alt="" />
                    </div>
                    <p className='card-heading'>Bookkeeping</p>
                    <p className='card-para'>Accurate and timely bookkeeping is the foundation of a successful business.At Faiz Accountax We offer professional bookkeeping services to keep your financial records organized and up-to-date. Our meticulous approach ensures you have a clear and precise understanding of your financial position, allowing you to make informed business decisions with confidence.
                        <Link className="card-link" to='/bookkeeping' ><p>Read More</p> <i class="fa-solid fa-arrow-right"></i></Link>

                    </p>
                </div>
                <div className="service-card">
                    <div className="image-box">
                        <img src={secratary} alt="" />
                    </div>
                    <p className='card-heading'>Company Secretarial</p>
                    <p className='card-para'>Effective secretarial services are crucial for maintaining legal and regulatory compliance. We offer comprehensive company secretarial support to ensure your business adheres to statutory requirements and corporate governance standards. From managing company records to filing annual returns, our expert team handles the details so you can focus on growing your business.
                        <Link className="card-link" to='/secretary' ><p>Read More</p> <i class="fa-solid fa-arrow-right"></i></Link>

                    </p>
                </div>
            </div>
        </div>
    )
}

export default MyServices
