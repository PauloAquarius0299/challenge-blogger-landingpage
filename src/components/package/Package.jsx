// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Package.scss';

const Package = () => {
  return (
    <section className="package">
      <div className="container">
        <h2>CHOOSE A PACKAGE <br /> ACCORDING TO YOUR NEEDS</h2>
      </div>
      <div className="box-table">
        <div className="package-box">
          <div className="box">
            <p>Basic</p>
            <hr />
            <ul>
              <li>Single Post Package</li>
              <li>Story Package</li>
              <li>Collaboration Package</li>
            </ul>
            <hr />
            <h4>$56</h4>
          </div>
          <button>GET NOW</button>
        </div>
        <div className="package-box">
          <div className="box-bold">
            <p>Standard</p>
            <hr />
            <ul>
              <li>6 Post Package</li>
              <li>Story Package</li>
              <li>Collaboration Package</li>
              <li>Free Second Week</li>
            </ul>
            <hr />
            <h4>$120</h4>
          </div>
          <button>GET NOW</button>
        </div>
        <div className="package-box">
          <div className="box">
            <p>Premium</p>
            <hr />
            <ul>
              <li>12 Post Package</li>
              <li>24 Story Package</li>
              <li>Collaboration Package</li>
              <li>Free Second Week</li>
            </ul>
            <hr />
            <h4>$200</h4>
          </div>
          <button>GET NOW</button>
        </div>
      </div>
    </section>
  );
};

export default Package;
