import React from 'react';
import FeatureCard from './FeatureCard';
import './FeatureSection.css';
import healthIcon from '../assets/wpf_define-location.svg';
import energyIcon from '../assets/ph_strategy-bold.svg';
import positivityIcon from '../assets/simple-icons_buildkite.svg';

const FeatureSection = () => {
  const features = [
    {
      icon: healthIcon,
      title: 'Health',
      description: 'Tai Ji Men Qigong is deeply rooted in Tao wisdom. Through different qigong practice techniques and self-cultivation, you will strengthen your physical, mental, and spiritual health.'
    },
    {
      icon: energyIcon,
      title: 'Energy',
      description: 'Tai Ji Men is a treasure trove of traditional Tai Ji Men culture. By practicing the philosophy of yin and yang and the wisdom of life, you will find yourself surrounded by positive energy.'
    },
    {
      icon: positivityIcon,
      title: 'Positivity',
      description: 'Tai Ji Men dizi learn to reach the highest state of unity between heart and qi, harmony between heaven and man, finding the true self and returning to original purity.'
    }
  ];

  return (
    <div className="feature-section">
      <div className="feature-section-container">
        {/* <div className="feature-section-heading">
          <h2 className="feature-section-title">Experience the Benefits</h2>
          <p className="feature-section-subtitle">Discover how Tai Ji Men Qigong can transform your life</p>
        </div> */}
        <div className="feature-cards-container">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection; 