# Tai Ji Men Qigong Website

A modern website for Tai Ji Men Qigong with React frontend and Python Flask backend.

## Project Structure

- `frontend/`: React frontend application
- `backend/`: Flask backend API

## Frontend Components

The frontend includes reusable UI components:

1. **Navbar**: Navigation bar with links and search functionality
2. **HeroSection**: Full-width hero section with background image, Chinese characters, and call-to-action button
3. **FeatureCard**: Reusable card component for displaying features/benefits
4. **FeatureSection**: Section displaying multiple feature cards
5. **Button**: Reusable button component with various styles and sizes

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm start
```

The React app will run on http://localhost:3000

## API Endpoints

- `GET /api/events`: Retrieve all events
- `GET /api/events/<event_id>`: Retrieve specific event
- `POST /api/contact`: Submit contact form

## Design Inspirations

This website's design is based on the principles of Tai Ji Men Qigong, focusing on balance, harmony, and traditional Chinese aesthetics while maintaining a modern and responsive interface.
