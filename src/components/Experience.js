import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Lead Product Designer",
      company: "Fortknox",
      period: "Mar 2022 - Oct 2023"
    },
    {
      title: "Intern Designer",
      company: "OmniSafe",
      period: "Mar 2022 - Oct 2023"
    },
    {
      title: "UI Designer",
      company: "Doradesign",
      period: "Mar 2022 - Oct 2023"
    },
    {
      title: "Frontend Developer",
      company: "OpacityAuthor",
      period: "Mar 2022 - Oct 2023"
    }
  ];

  return (
    <div className="experience-container">
      <div className="experience-section">
        {/* Section Header */}
        <div className="section-header">
          <div className="accent-star"></div>
          <h2 className="section-title">Experience</h2>
        </div>

        {/* Experience List */}
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-content">
                <div className="experience-left">
                  <h3 className="job-title">{exp.title}</h3>
                </div>
                <div className="experience-right">
                  <div className="company-name">{exp.company}</div>
                  <div className="job-period">{exp.period}</div>
                </div>
              </div>
              {index < experiences.length - 1 && <div className="experience-divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;