// eslint-disable-next-line no-unused-vars
import React from 'react';

import hero from '../../assets/image-hero.png'
import vetor from '../../assets/Vector 28.png';

import './Contact.scss'

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
      <h2>WE ARE <br /> PRIORITIZES MUTUAL <br /> DEVELOPMENT</h2>
       <p>Lets build and <br /> succeed together <br /> with the services <br /> we provide</p>
      </div>
      <button>
        CONTACT 
      </button>
      <img src={vetor} alt="" />
      <div className="circle">
        <img src={hero} alt="" />
      </div>
    </section>
  );
};

export default Contact;
