import React from 'react';
import './Works.css';

const Works = () => {
  const worksData = [
    {
      title: "Analysis Application",
      description: "With user-centered approaches, we gave users an intuitive interface for enhanced financial intelligence.",
      tags: ["Finance", "UX"],
      mockupType: "phone"
    },
    {
      title: "Forknox Application",
      description: "With user-centered approaches, we gave users an intuitive interface for enhanced financial intelligence.",
      tags: ["Startup", "Finance"],
      mockupType: "laptop"
    },
    {
      title: "Zenocide Application",
      description: "With user-centered approaches, we gave users an intuitive interface for enhanced financial intelligence.",
      tags: ["API", "Web"],
      mockupType: "tablet"
    }
  ];

  const handleCaseStudyClick = (title) => {
    console.log(`View case study clicked for: ${title}`);
  };

  const renderMockup = (type) => {
    switch (type) {
      case 'phone':
        return <div className="phone-mockup"></div>;
      case 'laptop':
        return (
          <div className="laptop-mockup">
            <div className="laptop-screen">E</div>
          </div>
        );
      case 'tablet':
        return <div className="tablet-mockup"></div>;
      default:
        return <div className="phone-mockup"></div>;
    }
  };

  return (
    <section className="works-section">
      <div className="works-container">
        <div className="works-header">
          <h1 className="works-title">
            <span className="star">✦</span>
            Works
          </h1>
          <a href="#" className="view-all">View all</a>
        </div>

        <div className="works-grid">
          {worksData.map((work, index) => (
            <div key={index} className="work-card">
              <div className="work-image">
                <div className="mockup">
                  {renderMockup(work.mockupType)}
                </div>
              </div>
              <div className="work-content">
                <h2 className="work-title">{work.title}</h2>
                <p className="work-description">{work.description}</p>
                <div className="work-tags">
                  {work.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
                <button 
                  className="view-case-study"
                  onClick={() => handleCaseStudyClick(work.title)}
                >
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;