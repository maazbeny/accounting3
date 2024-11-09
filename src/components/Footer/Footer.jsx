import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import homelogo from '../../assets/home-logo.png'

const Footer = ({ onOpenPopup }) => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-container-left">
          <div className="services-section section">
            <h2 className='footer-heading'>Services</h2>
            <div className="footer-list">
              <li><Link to="/personal">Personal Taxes</Link></li>
              <li><Link to="/business">Business Taxes</Link></li>
              <li><Link to="/bookkeeping">Bookkeeping</Link></li>
              <li><Link to="/payroll">Payroll</Link></li>
              <li><Link to="/accounting">Accounting Services</Link></li>
              <li><Link to="/payroll">CIS Returns</Link></li>
              <li><Link to="/secretary">Company Secretary</Link></li>
            </div>
          </div>

          <div className="about-section section">
            <h2 className='footer-heading'>About</h2>
            <div className="footer-list">

              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li style={{ display: "none" }}><a href="/sitemap.xml">Sitemap</a></li>

            </div>
          </div>
          <div className="resources-section section">
            <h1 className='footer-heading'>Resources</h1>
            <div className="footer-list">
              <li><Link to="/pricing-and-plans">Plans and Pricing</Link></li>
              <li><Link to="/accountant-in-highwycombe">Accountant in highwycombe</Link></li>


            </div>


          </div>
          <div className="contact-section contact">
            <h2 className='footer-heading'>Contact</h2>
            <div className="footer-list">


              <div className="footer-icon">
                <i class="fa-solid fa-phone icon-2"></i>
                <li>0208 191 0732</li>
              </div>
              <div className="footer-icon">
                <i class="fa-solid fa-envelope"></i>
                <li>info@faizaccountax.com</li>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-container-right">
          <h1 className='footer-heading'>Contact</h1>
          <div className="footer-list">

            <div className="footer-icon">
              <i class="fa-solid fa-phone icon-2"></i>
              <li>0208 191 0732</li>
            </div>
            <div className="footer-icon">
              <i class="fa-solid fa-envelope"></i>
              <li>info@faizaccountax.com</li>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className='address'>
          <p>© 2024 Faiz Accountax. All rights reserved.</p>
          <div className="address-social">
            <div className="social-icons">
              <a href="https://www.instagram.com/faizaccountax/?hl=en-gb"> <i class="fa-brands fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/73845707 "><i class="fa-brands fa-linkedin-in"></i></a>
              <a href="https://www.facebook.com/faizaccountax">    <i class="fa-brands fa-facebook-f"></i></a>


              <i class="fa-brands fa-twitter"></i>

            </div>
            <img className='home-logo1' src={homelogo} alt="" />

          </div>

        </div>

      </div>

    </div>
  )
}

export default Footer
