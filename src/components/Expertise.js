import React from 'react';
import './Expertise.css';

const Expertise = () => {
  const expertiseData = [
    {
      title: "■ Branding",
      description: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites."
    },
    {
      title: "■ UI Design",
      description: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites."
    },
    {
      title: "■ UX Design",
      description: "I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements."
    },
    {
      title: "■ Development",
      description: "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach. I employ it to produce safe, top-notch personalized websites."
    }
  ];

  return (
    <section className="expertise-section">
      <div className="expertise-container">
        <div className="expertise-header">
          <div className="star-icon">✦</div>
          <h2 className="expertise-title">Expertise</h2>
        </div>
        
        <div className="expertise-grid">
          {expertiseData.map((item, index) => (
            <div key={index} className="expertise-item">
              <h3 className="expertise-item-title">{item.title}</h3>
              <p className="expertise-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;