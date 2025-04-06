import React from 'react';
import './Recommendations.css';
import image1 from '../assets/Rectangle 8.svg';
import image2 from '../assets/Rectangle 7 (1).svg';
import image3 from '../assets/Rectangle 7.svg';
import image4 from '../assets/Rectangle 10.svg';

const Recommendations = () => {
  return (
    <div className="recommendations">
      <div className="recommendations-container content-container">
        <div className="recommendations-header">
          <div className="title-with-line">
            <div className="title-line"></div>
            <div className="recommendations-title">RECOMMENDATIONS</div>
          </div>
          <div className="recommendations-main-content">
            <div className="recommendations-heading">
              <h2>What Happy People<br />Has to Say</h2>
            </div>
            <div className="recommendations-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                varius enim in eros elementum tristique.
              </p>
              <p>
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus
                id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>
            </div>
          </div>
        </div>
        
        <div className="testimonials">
          <div className="testimonial">
            <img src={image1} alt="Happy Elderly Couple" />
            <div className="person-info">
              <p>QI Inc.</p>
            </div>
          </div>
          <div className="testimonial">
            <img src={image2} alt="Sunny" />
            <div className="person-info">
              <h3>Sunny</h3>
              <p>Former CMO of Tech Inc.</p>
            </div>
          </div>
          <div className="testimonial">
            <img src={image3} alt="Henry" />
            <div className="person-info">
              <h3>Henry</h3>
              <p>Engineer</p>
            </div>
          </div>
          <div className="testimonial">
            <img src={image4} alt="Connie" />
            <div className="person-info">
              <h3>Connie</h3>
              <p>Business School Professor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations; 