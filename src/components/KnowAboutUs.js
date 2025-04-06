import React from 'react';
import './KnowAboutUs.css';
import featureBackground from '../assets/feature bg.svg';

const KnowAboutUs = () => {
  return (
    <div className="know-about-us">
      <div className="know-about-container content-container">
        <div className="know-about-content">
          <div className="know-about-title-group">
            <div className="title-line"></div>
            <h3 className="know-about-heading">KNOW ABOUT US</h3>
          </div>
          <h2 className="know-about-subheading">We provide Qigong techniques for health</h2>
          <div className="know-about-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <p>Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
          </div>
        </div>
        <div className="know-about-media">
          <div className="feature-video">
            <img src={featureBackground} alt="Children practicing Qigong" />
            <div className="play-button"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowAboutUs; 