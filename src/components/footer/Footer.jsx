// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.scss';
import logo from '../../assets/LOGO.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';

const Footer = () => {

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
            <button>Influencers</button>
            <p>Content</p>
            <p>About</p>
            <p>Wors</p>
            <p>Performacer</p>
        </div>
        <div className="box">
            <button>Service</button>
            <p>Upgrade Rate</p>
            <p>Copy Writing</p>
            <p>Vlogging</p>
            <p>Publishing</p>
        </div>
        <div className="box">
            <button>Comunity</button>
            <p>Influencers</p>
            <p>Share Session</p>
            <p>Meet & Greet</p>
        </div>
        <div className="box">
            <button>About</button>
            <p>Work On</p>
            <p>Profile</p>
            <p>Privacy</p>
        </div>
      </div>
      <hr />
      <p className='terms'>Resource by Blogger LandingPage - <span>@2023</span></p>
    </section>
  );
};

export default Footer;
