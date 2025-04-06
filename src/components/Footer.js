import React from 'react';
import './Footer.css';
import tjmLogo from '../assets/tjm_logo (2).svg';
import tjmText from '../assets/Tai Ji Men Qigong (1).svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={tjmLogo} alt="TJM Logo" className="logo-icon" />
          <img src={tjmText} alt="Tai Ji Men Qigong" className="logo-text" />
        </div>
      </div>
    </footer>
  );
};

export default Footer; 