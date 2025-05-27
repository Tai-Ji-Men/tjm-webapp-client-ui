import React from 'react';
import './About.css';
import AboutTJMSection from '../components/AboutTJMSection';
import AboutSectionBlock from '../components/AboutSectionBlock';
import AboutQiImg from '../assets/AboutQi.svg';
import BalanceOfWellnessImg from '../assets/BalanceOfWellness.svg';
import InheritedPhilosophyImg from '../assets/InheritedPhilosophy.svg';
import FamilyOfKindnessImg from '../assets/FamilyOfKindness.svg';
import AboutBottombg from '../assets/AboutBottombg.svg';
import WhiteGradientBg from '../assets/whitegradient_bg.svg';
import OrangeGradientBg from '../assets/orangegradient_bg.svg';

const aboutSections = [
  {
    label: 'ABOUT QI',
    title: 'The Origin of Life: Qi',
    description: 'Qi is the origin of life; it is also the root of health. Those who are kindhearted bear good qi, and thus, good fortune. The interaction of our mind with qi affects our health and also our magnetic field.',
    image: AboutQiImg,
    reverse: false
  },
  {
    label: 'BALANCE OF WELLNESS',
    title: 'Balancing Body\nand Mind',
    description: 'Genuine health comes from balance of the body, mind, and environment. To attain genuine health, Tai Ji Men emphasizes harmony between the individual and work, family, interpersonal relationships, and nature.',
    image: BalanceOfWellnessImg,
    reverse: false
  },
  {
    label: 'INHERITED PHILOSOPHY',
    title: 'Traditional Menpai',
    description: 'Zhang-men-ren, Dr. Hong Tao Tze, inherited the highest level of qigong and martial arts of great masters of past generations. He teaches dizi (similar to students) to cultivate their minds and practice qi to reach physical, mental and spiritual health.',
    image: InheritedPhilosophyImg,
    reverse: false
  },
  {
    label: 'A FAMILY OF KINDNESS',
    title: 'One Big Family',
    description: 'In the academy, regardless of sex, age, or profession, all dizi are equal. They learn to be natural and good, and do for themselves and others, trying hard to improve themselves and care for one another as a family.',
    image: FamilyOfKindnessImg,
    reverse: false
  }
];

const About = () => {
  return (
    <div className="about">
      <AboutTJMSection />
      <div className="about-content container">
        <div className="about-section">
          <p>
            Tai Ji Men is a treasure trove of traditional Tai Ji Men culture and holds the key to unlock the origin of wisdom. The contemporary Zhang-men-ren (grandmaster) of Tai Ji Men, Dr. Hong Tao Tze, established Tai Ji Men Qigong Academy in 1966 in response to a calling to bring both physical and spiritual health to modern society. Dr. Hong teaches his dizi (apprentices) the philosophy and wisdom of life; guiding them to cultivate moral character and purify hearts while strengthening physical, mental and spiritual health. Through different qigong practice techniques and self-cultivation, Tai Ji Men dizi learn to reach the highest state of unity between heart and qi, harmony between heaven and man, finding the true self and returning to original purity.
          </p>
          <p>
            Tai Ji Men Qigong Academy is an international non-profit cultural organization. The central doctrine of Tai Ji Men is "Nurturing the positive energy from the universe, following the good examples of sages from all times." The aim of Tai Ji Men Qigong Academy is to promote the traditional essence of Chinese culture, and to advance the physical, mental, and spiritual health of world citizens. Tai Ji Men dizi are located around the world and come from all kinds of professional fields. Guided by the Zhang-men-ren, the dizi hold in esteem the spirit of universal brotherhood, inherit traditional cultures of human relationships, etiquette, and conscience, and spread the seeds of love and peace to wherever they touch around the Earth.
          </p>
          <p>
            Over the years, Dr. Hong and his dizi have visited over 300 cities in 113 countries, devoting more than 2 million man-hours in cultural performances around the world to promote international friendship and spread the beauty of the Chinese culture across the world. Over 300 on-campus educational seminars on love, peace and human rights have been held in internationally. Tai Ji Men launched the Movement of An Era of Conscience, generating positive commitments and actions from people and organizations in 197 countries. More than 30,000 symposiums for public welfare have been held to share the wisdom of yin and yang. Over 14,000 articles about Tai Ji Men dizi's life stories have been published in various media to encourage and inspire people. Tai Ji Men also has produced more than 1,300 episodes of the TV program "Energy Family" which have been broadcast in media worldwide and on the Tai Ji Men website with more than 87 million visits. Tai Ji Men dizi devote tremendous personal effort to share the good experiences they have learned with the world, wishing that everybody can enjoy health, wealth, wisdom, happiness, and wellbeing in their lives.
          </p>
        </div>
        {aboutSections.map((section, idx) => (
          <AboutSectionBlock key={idx} {...section} />
        ))}
      </div>
      {/* Bottom Visual Section */}
      <section className="about-bottom-visual" style={{position: 'relative'}}>
        <img src={AboutBottombg} alt="about bottom bg" className="about-bottom-bg" />
        <img src={WhiteGradientBg} alt="white gradient" className="about-bottom-whitegradient" />
        <img src={OrangeGradientBg} alt="orange gradient" className="about-bottom-orangegradient" />
        <div className="container about-bottom-visual-content">
          <div className="about-bottom-visual-row">
            <div className="about-bottom-label">ESSENCE OF CHINESE CULTURE</div>
            <div className="about-bottom-visual-title-desc">
              <h2 className="about-bottom-title">A Culture of Love<br />and Peace</h2>
              <div className="about-bottom-desc about-bottom-desc-right">
                Tai Ji Men Qigong covers the cultural essence of medicine, philosophy, martial arts, literature, education and the arts. Tai Ji Men Qigong Academy hopes that these performances of martial arts will guide people onto the right path and contribute to social harmony.
              </div>
            </div>
          </div>
          <div className="about-bottom-cta-wrap">
            <h2 className="about-bottom-cta">“Join Us!<br />Change Your Destiny”</h2>
            <button className="about-bottom-cta-btn">Join Now!</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 