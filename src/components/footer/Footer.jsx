// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Footer.scss';
import logo from '../../assets/LOGO.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';

const Footer = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <section className="footer">
      <hr />
      <div className="container">
        <img src={logo} alt="Logo" />
        <div className="sociais">
          <div className="icon-circle">
            <img src={twitter} alt="Twitter" />
          </div>
          <div className="icon-circle">
            <img src={instagram} alt="Instagram" />
          </div>
          <div className="icon-circle">
            <img src={linkedin} alt="Linkedin" />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="box">
          <button onClick={() => toggleSection('influencers')}>Influencers</button>
          <div className={`content-items ${openSections['influencers'] ? 'open' : ''}`}>
            <p>Content</p>
            <p>About</p>
            <p>Works</p>
            <p>Performer</p>
          </div>
        </div>
        <div className="box">
          <button onClick={() => toggleSection('service')}>Service</button>
          <div className={`content-items ${openSections['service'] ? 'open' : ''}`}>
            <p>Upgrade Rate</p>
            <p>Copy Writing</p>
            <p>Vlogging</p>
            <p>Publishing</p>
          </div>
        </div>
        <div className="box">
          <button onClick={() => toggleSection('community')}>Community</button>
          <div className={`content-items ${openSections['community'] ? 'open' : ''}`}>
            <p>Influencers</p>
            <p>Share Session</p>
            <p>Meet & Greet</p>
          </div>
        </div>
        <div className="box">
          <button onClick={() => toggleSection('about')}>About</button>
          <div className={`content-items ${openSections['about'] ? 'open' : ''}`}>
            <p>Work On</p>
            <p>Profile</p>
            <p>Privacy</p>
          </div>
        </div>
      </div>
      <hr />
      <p className='terms'>Resource by Blogger LandingPage - <span>@2023</span></p>
    </section>
  );
};

export default Footer;
