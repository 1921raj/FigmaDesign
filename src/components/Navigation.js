import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [hireClicked, setHireClicked] = useState(false);

  const handleNavClick = (section, e) => {
    e.preventDefault();
    setActiveSection(section);
    
    // Add ripple effect
    const item = e.target;
    item.classList.add('ripple');
    setTimeout(() => {
      item.classList.remove('ripple');
    }, 600);
    
    console.log(`Navigated to: ${section}`);
  };

  const handleHireClick = () => {
    setHireClicked(true);
    setTimeout(() => {
      setHireClicked(false);
    }, 200);
    console.log('Hire Me button clicked!');
  };

  return (
    <div className="nav-container">
      <div className="logo">
        <div className="logo-text">M.</div>
      </div>
      
      <nav className="navbar">
        <div className="nav-links">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href="#"
              className={`nav-item ${activeSection === section ? 'active' : ''}`}
              data-section={section}
              onClick={(e) => handleNavClick(section, e)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
        <button 
          className={`hire-btn ${hireClicked ? 'clicked' : ''}`}
          onClick={handleHireClick}
        >
          HIRE ME
        </button>
      </nav>
    </div>
  );
};

export default Navigation;