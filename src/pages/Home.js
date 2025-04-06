import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import KnowAboutUs from '../components/KnowAboutUs';
import WhatIsTJM from '../components/WhatIsTJM';
import Recommendations from '../components/Recommendations';
import JoinCTA from '../components/JoinCTA';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <div className="features-overlap-container">
        <FeatureSection />
      </div>
      <div className="orange-background-section">
        <KnowAboutUs />
        <WhatIsTJM />
      </div>
      <Recommendations />
      <JoinCTA />
    </div>
  );
}

export default Home; 