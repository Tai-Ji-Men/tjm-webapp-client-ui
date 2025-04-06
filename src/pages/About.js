import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <h1>About Tai Ji Men</h1>
      </div>
      <div className="about-content container">
        <div className="about-section">
          <h2>Our Heritage</h2>
          <p>Tai Ji Men is an ancient menpai (similar to school) of qigong, martial arts, and self-cultivation. It belongs to the Tao school of thought and has a history of thousands of years. Tai Ji Men preserves the philosophy and wisdom of yin and yang, and aims to preserve traditional Chinese culture while promoting physical, mental, and spiritual health.</p>
        </div>
        <div className="about-section">
          <h2>Our Philosophy</h2>
          <p>At the heart of Tai Ji Men is the philosophy of yin and yang - the balance and harmony of opposites. Through the practice of qigong and martial arts, disciples learn to harmonize their body, mind, and spirit, and to develop a deeper understanding of themselves and the universe.</p>
        </div>
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>Tai Ji Men is dedicated to promoting a culture of conscience, love, and peace. We believe that by cultivating inner peace and harmony, we can contribute to a more peaceful world. Through our practices and activities, we aim to foster physical health, mental clarity, and spiritual growth.</p>
        </div>
      </div>
    </div>
  );
};

export default About; 