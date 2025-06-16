import React from 'react';
import './ScrollingBanner.css';

const ScrollingBanner = () => {
  const textItems = ['FOLLOW', 'FIGMA', 'DESIGNER', 'DEVELOPER'];
  
  // Repeat the text items multiple times for smooth scrolling
  const repeatedItems = Array(3).fill(textItems).flat();

  return (
    <div className="scroll-container">
      <div className="scroll-text">
        {repeatedItems.map((item, index) => (
          <React.Fragment key={index}>
            {item}
            <span className="star">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;