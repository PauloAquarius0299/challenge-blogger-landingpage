// eslint-disable-next-line no-unused-vars
import React from 'react';
import vetor from '../../assets/Vector 5.png'

import './Business.scss'

const Business = () => {
  return (
    <section className='business'>
        <div className='title'>
            <h1>IMPROVE YOUR BUSINESS</h1>
            <img src={vetor} alt="" />
            <div className="circle-img"></div>
        </div>
        <div className="container">
        <p>Improve the Quality of your Business <br /> and Feel the Benefits with Us</p>
        <div className='box-table'>
            <div className="box">
                <span>Achieve Goals</span>
                <hr />
                <p>Setting goals is like creating a roadmap to our dreams. They give us direction and purpose</p>
            </div>
            <div className="box-2">
                <span>Campaign Manage</span>
                <hr />
                <p> Set clear and measurable objectives for your campaign. Know what you want to achieve.</p>
            </div>
            <div className="box">
                <span>Brand Development</span>
                <hr />
                <p> We build a strong personal brand identity with consistent writing style, visual appearance, and values.</p>
            </div>
        </div>
        <button>
            VIEW MORE
        </button>
        </div>
    </section>
  )
}

export default Business