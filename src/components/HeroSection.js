import React from 'react';
import './HeroSection.css';
import backgroundImg from '../assets/kv_bg_gory_tuman_derevya_nebo_118876_1920x1200.svg';
import qiCharacter from '../assets/qi.svg';
import gongCharacter from '../assets/gong.svg';
import wisdomText from '../assets/The Wisdom of Yin & Yang.svg';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-bg" style={{ backgroundImage: `url(${backgroundImg})` }}></div>
      <div className="hero-content">
        <div className="character-wisdom-container">
          <img src={qiCharacter} alt="Qi" className="qi-character" />
          <div className="wisdom-text">
            <img src={wisdomText} alt="The Wisdom of Yin & Yang" />
          </div>
          <img src={gongCharacter} alt="Gong" className="gong-character" />
        </div>
        <button className="hero-button">Learn More</button>
      </div>
    </div>
  );
};

export default HeroSection; 