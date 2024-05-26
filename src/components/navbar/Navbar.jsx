// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Navbar.scss';
import logo from '../../assets/LOGO.png';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-logo'>
          <img src={logo} alt="Logo" />
        </div>
        <div className={`navbar-content ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>HOME</li>
            <li>SERVICE</li>
            <li>PARTNER</li>
          </ul>
          <button>Contact Us</button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
