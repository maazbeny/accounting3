import React, { useEffect } from 'react'
import './Navbar.css'
import logo3 from '../../assets/logo2.jpg'
import logo4 from '../../assets/logo4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link, useLocation } from 'react-router-dom';
import { useRef, useState } from 'react';


const Navbar = ({ onOpenPopup }) => {
    const location = useLocation()
    const [menu, setMenu] = useState(location.pathname)
    console.log(location.pathname)

    const menuRef = useRef();
    const openMenu = () => {
        menuRef.current.style.right = "0"
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-250px"
    }

    console.log(menu)
    return (
        <nav>
            <div className='navbar'>

                <Link to="/">  <img className='logo' src={logo4} alt="" /></Link>

                {/* <i  class="fa-solid fa-bars nav-mob-open"></i> */}
                <FontAwesomeIcon onClick={openMenu} icon="fa-solid fa-bars " className='nav-mob-open' />
                <div ref={menuRef} className="nav-menu">
                    {/* <i  class="fa-solid fa-xmark nav-mob-close"></i> */}
                    <FontAwesomeIcon onClick={closeMenu} icon="fa-solid fa-xmark " className='nav-mob-close' />

                    <li><Link onClick={() => setMenu("/")} to="/">Home</Link>{menu === "/" ? <hr /> : <></>}</li>
                    <li><Link onClick={() => setMenu("/about")} to="/about">About</Link>{menu === "/about" ? <hr /> : <></>}</li>
                    <li><Link onClick={() => setMenu("/services")} to="/services">Services</Link>{menu === "/services" ? <hr /> : <></>}</li>
                    <li><Link onClick={() => setMenu("/contact")} to="/contact">Contact</Link>{menu === "/contact" ? <hr /> : <></>}</li>
                </div>
                <div onClick={onOpenPopup} className="icon-btn">
                    <i class="fa-solid fa-calculator calculator-1"></i>
                    <button className='call-btn'>Get an instant quote</button>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
