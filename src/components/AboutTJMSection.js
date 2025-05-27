import React from 'react';
import './AboutTJMSection.css';
import backgroundImg from '../assets/AboutTopbg.svg';
import gradientImg from '../assets/whitebluegradient_bg.svg';

const AboutTJMSection = () => {
  return (
    <section className="about-tjm-hero">
      <img src={backgroundImg} alt="about background" className="about-tjm-bg" />
      <img src={gradientImg} alt="about gradient" className="about-tjm-gradient" />
      <div className="about-tjm-hero-content about-tjm-hero-content--top">
        <div className="about-tjm-hero-left">
          <div className="about-tjm-label">ABOUT TJM</div>
          <h1 className="about-tjm-title">The Origin of Wisdom:<br/>Tai Ji Men</h1>
        </div>
        <div className="about-tjm-hero-right">
          <div className="about-tjm-desc about-tjm-desc--transparent">
            Tai Ji Men is an ancient menpai (similar to school) of qigong, martial arts and self-cultivation. The culture of Tai Ji Men is deeply rooted in Tao wisdom, inheriting one of the highest philosophies of mankind, which has been passed down and practiced in a cloistered tradition since ancient times.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTJMSection; 