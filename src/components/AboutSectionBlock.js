import React from 'react';
import './AboutSectionBlock.css';

const AboutSectionBlock = ({
  label,
  title,
  description,
  image,
  reverse
}) => {
  return (
    <section className={`about-section-block${reverse ? ' reverse' : ''}`}>
      <div className="about-section-block-content">
        <div className="about-section-block-text">
          <div className="about-section-block-label">{label}</div>
          <h2 className="about-section-block-title">{title}</h2>
          <div className="about-section-block-desc">{description}</div>
        </div>
        <div className="about-section-block-image">
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default AboutSectionBlock; 