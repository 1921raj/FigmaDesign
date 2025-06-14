import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-title">
        <div className="title-line">
          I AM A
          <div className="circle-badge gradient-circle-1"></div>
          FREELANCE
        </div>
        <div className="title-line">
          DESIGNER
          <div className="circle-badge gradient-circle-2"></div>
          FROM
        </div>
        <div className="title-line">
          SAN FRANCISCO
        </div>
      </div>

      <div className="bottom-section">
        <div className="client-logos">
          <div className="logo-item">doradesign</div>
          <div className="logo-item bold">14H wave</div>
          <div className="logo-item bold">SILMILA</div>
        </div>
        
        <div className="hero-description">
          <p>
            Welcome to my portfolio. Here, artistry meets functionality. 
            Dive into a curated showcase of distinctive branding and web designs, 
            each crafted to captivate and inspire.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;