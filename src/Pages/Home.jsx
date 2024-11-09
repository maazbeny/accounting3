import React, { useEffect } from 'react';
import About from '../components/About/About';
import Choose from '../components/Choose/Choose';
import { Helmet } from 'react-helmet';
import Easy from '../components/Easy/Easy';
import Expertise from '../components/Expertise/Expertise';
import Footer from '../components/Footer/Footer';
import Homepage from '../components/Homepage/Homepage';
import MyServices from '../components/MyServices/MyServices';
import Navbar from '../components/Navbar/Navbar';
import Qoute from '../components/Qoute/Qoute';
import Popup from '../components/Popup/Popup';
import Scrollbar from '../components/Scrollbar/Scrollbar';
import './CSS/Home.css';
import Signup from '../components/Signup/Signup';
import homelogo from '../assets/home-logo.png'

const Home = ({ onOpenPopup, onOpenSignup, closeSignup }) => {
    // useEffect(() => {
    //     document.title = 'Home |  Focus On Growing Your Business ';
    // }, []);

    return (
        <div className="App">
            <Helmet>
                <title>Faiz Accountax - Expert Tax and Accounting Services for UK Businesses</title>
                <meta name="description" content="Faiz Accountax offers professional tax and accounting services for small
businesses and individuals across the UK. Trust our Chartered Accountants to handle your
financial needs." />
                <meta name="keywords" content="accounting services, tax services, UK accountants, small business accounting,
Faiz Accountax" />
                <meta name="robots" content="index, follow" />

            </Helmet>
            <div className="navbar-homepage">

                <Navbar onOpenPopup={onOpenPopup} />

                <img className='home-logo2' src={homelogo} alt="" />

                <Scrollbar onOpenPopup={onOpenPopup} />
                <Homepage />
            </div>
            <About />
            <Expertise />
            <Choose />
            <MyServices />
            <Qoute onOpenSignup={onOpenSignup} />
            <div className="unsure-box">
                <h1>Unsure About Our Services? Schedule a Consultation</h1>
                <p>If you’re unsure which of our services best fits your needs, our team is here to help. Schedule a consultation with one of our experts to discuss your specific requirements and get personalized advice.</p>
                <button onClick={onOpenPopup}>Get A Quote</button>
            </div>
            <Footer onOpenPopup={onOpenPopup} />
        </div>
    );
};

export default Home;
