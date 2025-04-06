import React from 'react';
import './Contact.css';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-hero">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-content container">
        <div className="contact-info">
          <div className="contact-section">
            <h2>Get In Touch</h2>
            <p>We'd love to hear from you. If you have any questions about Tai Ji Men Qigong or would like to learn more about our practices and events, please don't hesitate to reach out.</p>
          </div>
          <div className="contact-details">
            <div className="contact-item">
              <h3>Email</h3>
              <p>info@taijimen.org</p>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <p>+1 (123) 456-7890</p>
            </div>
            <div className="contact-item">
              <h3>Address</h3>
              <p>123 Harmony Way<br />San Francisco, CA 94110</p>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact; 