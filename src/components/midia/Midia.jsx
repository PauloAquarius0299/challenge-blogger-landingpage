// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Midia.scss';
import { FaCheckCircle } from "react-icons/fa";

const Midia = () => {
  return (
    <section className="midia">
    <div className="container">
        <h1>THE GREAT WORK</h1>
        <div className="box-circle">
            <p>influence & followers</p>
            <p><span>Wedding Party</span></p>
            <p>Business Expansion</p>
            <p>Publish Business</p>
        </div>
        
        <div className="box-content">
            <FaCheckCircle />
            <p>Our experienced team will be present <br /> to ensure every aspect of the event <br /> runs smoothly, from welcoming guests </p>
            <p>
            <FaCheckCircle />
            Every precious moment will be <br /> captured by our professional <br /> photographers and videographers.
            </p>
            
        </div><div className="vetor">
            <p className="text">Collaborating with our agency is an effective marketing strategy to achieve your goals.</p>
        </div>
        
    </div>
</section>
  )
}

export default Midia;