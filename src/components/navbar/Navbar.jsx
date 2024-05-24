// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Navbar.scss';
import logo from '../../assets/LOGO.png';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-logo'>
          <img src={logo} alt="Logo" />
        </div>
        <div className={`navbar-content ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>HOME</li>
            <li>SERVICE</li>
            <li>PARTNER</li>
          </ul>
         
        </div>
         <button>Contact Us</button>
      </div>
      <div  className="hamburger" onClick={toggleMenu}>
          <GiHamburgerMenu  />
      </div>
    </section>
  );
};

export default Navbar;
