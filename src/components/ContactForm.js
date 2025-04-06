import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';
import Button from './Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: response.data.message }
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'An error occurred. Please try again later.' }
      });
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        
        <Button
          type="submit"
          buttonStyle="btn--primary"
          buttonSize="btn--medium"
          className="submit-button"
          disabled={status.submitting}
        >
          {status.submitting ? 'Sending...' : 'Send Message'}
        </Button>
        
        {status.info.msg && (
          <div className={`form-status ${status.info.error ? 'error' : 'success'}`}>
            {status.info.msg}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm; 