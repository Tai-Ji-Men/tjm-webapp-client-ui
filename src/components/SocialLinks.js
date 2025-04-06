import React from 'react';
import './SocialLinks.css';
import igIcon from '../assets/ig.svg';
import fbIcon from '../assets/fb.svg';
import tiktokIcon from '../assets/tiktok.svg';
import discordIcon from '../assets/discord.svg';

const SocialLinks = () => {
  return (
    <div className="social-links-section">
      <div className="social-links-container">
        <a href="https://www.instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">
          <img src={igIcon} alt="Instagram" />
          <span className="social-name">Instagram</span>
        </a>
        <a href="https://www.facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">
          <img src={fbIcon} alt="Facebook" />
          <span className="social-name">Facebook</span>
        </a>
        <a href="https://www.tiktok.com" className="social-link" target="_blank" rel="noopener noreferrer">
          <img src={tiktokIcon} alt="TikTok" />
          <span className="social-name">TikTok</span>
        </a>
        <a href="https://discord.com" className="social-link" target="_blank" rel="noopener noreferrer">
          <img src={discordIcon} alt="Discord" />
          <span className="social-name">Discord</span>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks; 