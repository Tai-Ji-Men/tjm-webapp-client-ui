import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        setEvents(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch events. Please try again later.');
        setLoading(false);
        console.error('Error fetching events:', err);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="events">
        <div className="events-hero">
          <h1>Upcoming Events</h1>
        </div>
        <div className="container events-content">
          <div className="loading">Loading events...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="events">
        <div className="events-hero">
          <h1>Upcoming Events</h1>
        </div>
        <div className="container events-content">
          <div className="error">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="events">
      <div className="events-hero">
        <h1>Upcoming Events</h1>
      </div>
      <div className="container events-content">
        <div className="events-list">
          {events.map((event) => (
            <div className="event-card" key={event.id}>
              <div className="event-date">{event.date}</div>
              <div className="event-details">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-location">{event.location}</p>
                <p className="event-description">{event.description}</p>
                <button className="event-button">Register</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events; 