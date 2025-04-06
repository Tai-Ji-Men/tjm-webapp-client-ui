import React from 'react';
import './Qigong.css';

const Qigong = () => {
  return (
    <div className="qigong">
      <div className="qigong-hero">
        <h1>Qigong & Life</h1>
      </div>
      <div className="qigong-content container">
        <div className="qigong-section">
          <h2>What is Qigong?</h2>
          <p>Qigong, which means "energy work", is an ancient Chinese practice that combines rhythmic breathing, gentle movement, and meditation to cultivate and balance qi (life energy). Tai Ji Men Qigong is a specialized form that focuses on the harmony between yin and yang, helping practitioners achieve physical health, mental clarity, and spiritual growth.</p>
        </div>
        
        <div className="qigong-section">
          <h2>Benefits of Practice</h2>
          <div className="qigong-benefits">
            <div className="benefit-item">
              <h3>Physical Health</h3>
              <p>Regular practice helps improve circulation, flexibility, and balance. It strengthens the immune system and can alleviate chronic pain.</p>
            </div>
            <div className="benefit-item">
              <h3>Mental Clarity</h3>
              <p>The meditative aspects of qigong help reduce stress, anxiety, and depression while promoting mental focus and emotional stability.</p>
            </div>
            <div className="benefit-item">
              <h3>Spiritual Growth</h3>
              <p>Qigong practice helps cultivate self-awareness and connection to oneself, others, and the universe, leading to spiritual development.</p>
            </div>
          </div>
        </div>
        
        <div className="qigong-section">
          <h2>Integrating Qigong into Daily Life</h2>
          <p>Tai Ji Men Qigong is not just a practice; it's a way of life. By incorporating the principles of balance, harmony, and mindfulness into daily activities, practitioners learn to navigate life's challenges with grace and resilience. The wisdom gained through practice extends beyond the physical exercises to influence how we interact with others, make decisions, and contribute to society.</p>
        </div>
      </div>
    </div>
  );
};

export default Qigong; 