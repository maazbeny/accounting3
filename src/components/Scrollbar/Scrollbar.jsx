import React, { useState, useEffect } from 'react';
import './Scrollbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo3 from '../../assets/logo2.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link, useLocation } from 'react-router-dom';


const Scrollbar = ({ onOpenPopup }) => {

    const [showNavbar, setShowNavbar] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const location = useLocation()
    const [menu, setMenu] = useState(location.pathname)
    const handleScroll = () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > 0) {

            setShowNavbar(true);
        } else {

            setShowNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const openMenu = () => {
        setMenuVisible(true);
    };

    const closeMenu = () => {
        setMenuVisible(false);
    };

    return (
        <nav className={`scrollbar ${showNavbar ? 'show' : 'hide'}`}>
            <Link to="/">  <img className='logo-scroll' src={logo3} alt="Logo" /></Link>
            <div className="menu-btn">
                <ul className={`navmenu ${menuVisible ? 'show' : ''}`}>
                    <FontAwesomeIcon onClick={closeMenu} icon="fa-solid fa-xmark" className='nav-close' />


                    <li><Link onClick={() => setMenu("/")} to="/">Home</Link>{menu === "/" ? <hr /> : <></>}</li>
                    <li><Link onClick={() => setMenu("/about")} to="/about">About</Link>{menu === "/about" ? <hr /> : <></>}</li>
                    <li><Link onClick={() => setMenu("/services")} to="/services">Services</Link>{menu === "/services" ? <hr /> : <></>}</li>
                    <li><Link onClick={() => setMenu("/contact")} to="/contact">Contact</Link>{menu === "/contact" ? <hr /> : <></>}</li>
                </ul>
                <div className="btn-call">
                    <div onClick={onOpenPopup} className="scroll-btn">
                        <i className="fa-solid fa-calculator calculator-4"></i>
                        <button className='scroll-qoute-btn'>Get an instant quote</button>
                    </div>

                    <p>or call today <span>0208 191 0732</span></p>
                </div>
                <FontAwesomeIcon onClick={openMenu} icon="fa-solid fa-bars" className='nav-open' />

            </div>
        </nav>
    );
};

export default Scrollbar;
