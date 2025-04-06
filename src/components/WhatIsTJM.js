import React from 'react';
import './WhatIsTJM.css';
import tjmGroupImage from '../assets/IMG_7536 2.svg';

const WhatIsTJM = () => {
  return (
    <div className="what-is-tjm">
      <div className="what-is-tjm-container content-container">
        <div className="what-is-tjm-content">
          <div className="what-is-tjm-title-group">
            <div className="title-line"></div>
            <h3 className="what-is-tjm-heading">WHAT IS TAI JI MEN QIGONG</h3>
          </div>
          <h2 className="what-is-tjm-subheading">A Balance of Physical, Mental and Spiritual Health</h2>
          <div className="what-is-tjm-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <p>Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
          </div>
        </div>
        <div className="what-is-tjm-media">
          <div className="tjm-image">
            <img src={tjmGroupImage} alt="Tai Ji Men students and teachers" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsTJM; 