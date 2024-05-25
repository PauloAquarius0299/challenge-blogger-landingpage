// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.scss'
import HeroImage from '../../assets/IMAGE HERE.png'
import Vetor from '../../assets/Vector 2.png'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-container'>
            <div className="circle-hero">
                <h1>Lets Turn Your <br /> Vlogging Passion </h1>
                <p>Join Us on Our Blog and Enjoy <span>High-Quality <br /> Content</span> that Inspires and Provides Solutions</p>
                
            </div> 
           
             <button >
                JOIN BE PARTNER
            </button>
           <span className='figures'>
           <div className="stats-container">
          <div className="stat-item">
             <li>35.2+</li><span>REVIEWS</span>
            </div>
           <div className="stat-item">
            <li>20k+</li><span>CUSTOMERS</span>
             </div>
           <div className="stat-item">
           <li>89%</li><span>AGENCY RATE</span>
         </div>
           <div className="stat-item">
             <li>2026</li><span>BEGIN ON</span>
          </div>
           </div>
           </span>
        </div>
        <div className='midia-hero'>
    <div className='circle-second'>    
      <img src={HeroImage} alt="" />
       <div className="box">
        <ul>
            <li>TRUSTED</li>
            <li>ACTUAL</li>
           <li>PROFESSIONAL</li>
           <li>ACTUAL</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero