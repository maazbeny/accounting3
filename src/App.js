import './App.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import ServicePage from './Pages/ServicePage';
import ContactPage from './Pages/ContactPage';
import Popup from './components/Popup/Popup';
import Signup from './components/Signup/Signup';
import ScrollToTop from './components/ScrollToTop';
import BuisnessPage from './Pages/BuisnessPage';
import PersonalPage from './Pages/PersonalPage';
import AccountingPage from './Pages/AccountingPage';
import PayrollPage from './Pages/PayrollPage';
import BookkeepingPage from './Pages/BookkeepingPage';
import SecrataryPage from './Pages/SecrataryPage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import useAnalytics from './useAnalytics';
import AdPage from './Pages/adpage';
import PricingPage from './Pages/PricingPage';

function AnalyticsWrapper() {
  useAnalytics();
  return null;
}


function App() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  const openSignup = () => setSignupOpen(true);
  const closeSignup = () => setSignupOpen(false);


  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnalyticsWrapper />
      <Popup isOpen={isPopupOpen} onOpenSignup={openSignup} onClose={closePopup} />
      <Signup isOpen={signupOpen} onClose={closeSignup} />

      <Routes>
        <Route path='/' element={<Home onOpenPopup={openPopup} onOpenSignup={openSignup} closeSignup={closeSignup} />} />
        <Route path='/about' element={<AboutPage onOpenPopup={openPopup} />} />
        <Route path='/services' element={<ServicePage onOpenPopup={openPopup} />} />
        <Route path='/contact' element={<ContactPage onOpenPopup={openPopup} />} />
        <Route path='/business' element={<BuisnessPage onOpenPopup={openPopup} />} />
        <Route path='/personal' element={<PersonalPage onOpenPopup={openPopup} />} />
        <Route path='/accounting' element={<AccountingPage onOpenPopup={openPopup} />} />
        <Route path='/payroll' element={<PayrollPage onOpenPopup={openPopup} />} />
        <Route path='/bookkeeping' element={<BookkeepingPage onOpenPopup={openPopup} />} />
        <Route path='/secretary' element={<SecrataryPage onOpenPopup={openPopup} />} />
        <Route path='/privacy' element={<PrivacyPolicy onOpenPopup={openPopup} />} />
        <Route path='/accountant-in-highwycombe' element={<AdPage onOpenPopup={openPopup} />} />
        <Route path='/pricing-and-plans' element={<PricingPage onOpenPopup={openPopup} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
