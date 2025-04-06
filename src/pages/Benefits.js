import React from 'react';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      title: 'Physical Well-being',
      description: 'Tai Ji Men Qigong practice helps improve physical health by promoting better circulation, increasing flexibility, and strengthening the immune system. Regular practice helps practitioners maintain a balanced and healthy body.',
      points: [
        'Improved cardiovascular health and circulation',
        'Enhanced flexibility, balance, and coordination',
        'Strengthened immune system and increased energy levels',
        'Relief from chronic pain and improved sleep quality'
      ]
    },
    {
      title: 'Mental Clarity',
      description: 'Through focused breathing and meditation, Tai Ji Men Qigong helps calm the mind and reduce stress. Practitioners develop better concentration, emotional stability, and mental clarity.',
      points: [
        'Reduced stress, anxiety, and depression',
        'Improved focus and concentration',
        'Enhanced emotional regulation and stability',
        'Sharper memory and cognitive function'
      ]
    },
    {
      title: 'Spiritual Growth',
      description: 'Tai Ji Men Qigong is a path to spiritual development. The practice helps cultivate inner peace, self-awareness, and a deeper connection to the universe and others.',
      points: [
        'Enhanced self-awareness and introspection',
        'Greater sense of purpose and meaning',
        'Deeper connection to oneself and others',
        'Development of compassion and wisdom'
      ]
    },
    {
      title: 'Life Harmony',
      description: 'The principles of Tai Ji Men Qigong extend beyond the practice itself into daily life. Practitioners learn to live in harmony with themselves, others, and nature.',
      points: [
        'Improved relationships and communication',
        'Better work-life balance',
        'Enhanced decision-making abilities',
        'Greater resilience in facing life challenges'
      ]
    }
  ];

  return (
    <div className="benefits">
      <div className="benefits-hero">
        <h1>Benefits of Practice</h1>
      </div>
      <div className="benefits-content container">
        <div className="benefits-intro">
          <p>Tai Ji Men Qigong offers numerous benefits for practitioners at all levels. Whether you are seeking physical health, mental clarity, spiritual growth, or a more harmonious life, regular practice can help you achieve your goals.</p>
        </div>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <h2>{benefit.title}</h2>
              <p className="benefit-description">{benefit.description}</p>
              <ul className="benefit-points">
                {benefit.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="testimonial-section">
          <h2>What Our Practitioners Say</h2>
          <div className="testimonial">
            <p className="testimonial-text">"Practicing Tai Ji Men Qigong has transformed my life. I have more energy, less stress, and a deeper sense of purpose. The wisdom I've gained has helped me navigate life's challenges with grace and resilience."</p>
            <p className="testimonial-author">— Jane D., practicing for 5 years</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits; 