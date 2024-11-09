import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import MyServices from '../components/MyServices/MyServices'
import './CSS/Service.css'
import Footer from '../components/Footer/Footer'
import Scrollbar from '../components/Scrollbar/Scrollbar'
import Popup from '../components/Popup/Popup';
import { Helmet } from 'react-helmet';

const Service = ({ onOpenPopup }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    // const [menu, setMenu] = useState("home")

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);
    // useEffect(() => {
    //     document.title = 'Services | Faiz Accountax';
    // }, []);
    return (
        <div className="servicepage" >
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <title>Accounting, Tax, and Bookkeeping Services - Faiz Accountax</title>
                <meta name="description" content="Explore the full range of services provided by Faiz Accountax, including tax
planning, bookkeeping, payroll, VAT, and more for UK businesses." />
                <meta name="keywords" content="accounting services, tax services, VAT, payroll, bookkeeping services, UK tax
planning" />
                <meta name="author" content="Faiz Accountax" />
            </Helmet>
            <Scrollbar onOpenPopup={openPopup} />
            <Popup isOpen={isPopupOpen} onClose={closePopup} />

            <Navbar onOpenPopup={openPopup} />
            <MyServices />
            <div className="unsure-box">
                <h2>Unsure About Our Services? Schedule a Consultation</h2>
                <p>If you’re unsure which of our services best fits your needs, our team is here to help. Schedule a consultation with one of our experts to discuss your specific requirements and get personalized advice. We’ll guide you through our offerings and help you find the perfect solution for your accounting and tax requirements.</p>
                <button onClick={onOpenPopup}>Get A Quote</button>
            </div>
            <Footer onOpenPopup={openPopup} />
        </div>
    )
}

export default Service
