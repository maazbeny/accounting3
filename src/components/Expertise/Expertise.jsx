import React from 'react';
import './Expertise.css';

const Expertise = () => {
  return (
    <div className='expertise'>
      <h2>Our Expertises</h2>
      <div className="expertise-table">
        <div className="logo-expertise">
          <div className="icon-bg">
            <i className="fas fa-calculator calculator-2"></i>
          </div>
          Expert Tax Planning
        </div>

        <div id='large-expertise' className="logo-expertise">
          <div className="icon-bg">
            <i className="fas fa-file-invoice"></i>
          </div>
          Accounting Solutions
        </div>

        <div className="logo-expertise">
          <div className="icon-bg">
            <i className="fas fa-briefcase"></i>
          </div>
          Strategic Business Advisory
        </div>

        <div className="logo-expertise">
          <div className="icon-bg">
            <i className="fas fa-money-bill-wave"></i>
          </div>
          Efficient Payroll Management
        </div>

        <div id='large-expertise' className="logo-expertise">
          <div className="icon-bg">
            <i className="fas fa-book"></i>
          </div>
          Professional Bookkeeping
        </div>

        <div className="logo-expertise">
          <div className="icon-bg">
            <i className="fas fa-handshake"></i>
          </div>
          Personalized Client Approach
        </div>


      </div>
    </div>
  );
}

export default Expertise;
