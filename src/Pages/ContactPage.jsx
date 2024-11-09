import React, { useState, useEffect } from 'react';
import './CSS/ContactPage.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Scrollbar from '../components/Scrollbar/Scrollbar';
import Popup from '../components/Popup/Popup';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [sent, setSent] = useState("");

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  // useEffect(() => {
  //   document.title = 'Contact Us | Faiz Accountax';
  // }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "5f2cdd6f-17f5-43b2-b9af-e287cda03e09");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await res.json();

      if (result.success) {
        setSent(result.message);
        event.target.reset();
        setTimeout(() => {
          setSent("");
        }, 1000);
      } else {
        setSent(result.error || 'Submission failed. Please try again.');
      }
    } catch (error) {
      setSent('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <title>Contact Faiz Accountax - Get in Touch with Our Expert Team</title>
        <meta name="description" content="Contact Faiz Accountax today to discuss how our tax, accounting, and
bookkeeping services can help your business grow." />
        <meta name="keywords" content="contact Faiz Accountax, accounting services contact, tax advisory contact UK" />
        <meta name="author" content="Faiz Accountax" />
      </Helmet>
      <Navbar onOpenPopup={openPopup} />
      <Scrollbar onOpenPopup={openPopup} />
      <Popup isOpen={isPopupOpen} onClose={closePopup} />

      <div className="contactpage">
        <h1 className='contact-head'>Contact Us</h1>
        <hr />
        <div className='contact-container'>
          <div className="contact-left">
            <h1>Get In Touch</h1>
            <div className="info-list">
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <p>Suite 2685, 124 City Road, London, EC1V 2NX</p>
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <p>Faiz house 3 Greenhill, High Wycombe, HP13 5QJ</p>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <p>0208 191 0732</p>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <p>info@faizaccountax.com</p>
              </li>
            </div>
          </div>
          <form className="contact-right" onSubmit={onSubmit}>
            <div className="name-field">
              <div className="label-field">
                <label htmlFor="first-name">First Name</label>
                <input type="text" name='first-name' placeholder='first name' required />
              </div>
              <div className="label-field">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" name='last-name' placeholder='last name' required />
              </div>
            </div>
            <div className="label-field">
              <label htmlFor="email">Email</label>
              <input type="email" name='email' placeholder='example@gmail.com' required />
            </div>
            <div className="label-field">
              <label htmlFor="subject">Subject</label>
              <input type="text" name='subject' placeholder='subject' required />
            </div>
            <div className="label-field">
              <label htmlFor="message">Message</label>
              <textarea name="message" placeholder='Tell us what we can help you with' rows="4" required></textarea>
            </div>
            {sent && <p className="success-message">{sent}</p>}
            <button className='contact-form-btn' type='submit'>Submit</button>
          </form>
        </div>
      </div>

      <Footer onOpenPopup={openPopup} />
    </>
  );
};

export default Contact;
