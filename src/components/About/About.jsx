import React from 'react';
import './About.css';
import blob from '../../assets/blob.svg';
import div from '../../assets/div.png'
import div2 from '../../assets/div7.png'
import homelogo from '../../assets/home-logo.png'


const About = () => {
  return (
    <div id='about' name="about" className='about'>
      <div className="about-left">
        {/* <img className='img-bg' src={div} alt="" /> */}
        <img className='upper-image' src={div2} alt="" />
      </div>
      <div className="about-right">
        <div className="sub-right">
          <h2 className='about-heading'>Welcome to Faiz Accountax- Chartered Certified Accountants and Chartered Tax Advisers</h2>

          <p className='about-chota-para'>  Welcome to Faiz Accountax, where expertise meets approachability. As proud members of the Association of Chartered Certified Accountants (ACCA), the Chartered Institute of Taxation (CIOT), and the Association of Taxation Technicians (ATT), we bring a wealth of knowledge and professionalism to our clients. Whether you’re an individual or a business, our dedicated team is here to provide top-tier accounting and tax advisory services tailored to your specific needs.  With an office in Central London and High Wycombe, we are committed to delivering exceptional service and building long-lasting relationships with our clients. Discover the Faiz Accountax difference today.</p>

        </div>
      </div>
    </div>
  );
}

export default About;
