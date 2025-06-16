import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section, e) => {
    e.preventDefault();
    
    const sectionMap = {
      home: 'expertise',
      about: 'blog',
      projects: 'works',
      contact: 'testimonials'
    };

    const targetId = sectionMap[section];
    const element = document.getElementById(targetId);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
    }

    // Update URL and active state
    window.history.pushState(null, '', `#${section}`);
    setActiveSection(section);
  };

  const handleHireClick = (e) => {
    e.preventDefault();
    handleNavClick('contact', e);
  };

  return (
    <div className="nav-container">
      <div className="logo">M.</div>
      <nav className="navbar">
        <div className="nav-links">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`nav-item ${activeSection === section ? 'active' : ''}`}
              onClick={(e) => handleNavClick(section, e)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
        <button className="hire-btn" onClick={handleHireClick}>
          HIRE ME
        </button>
      </nav>
    </div>
  );
};

export default Navigation;