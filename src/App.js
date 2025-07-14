import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Benefits from './pages/Benefits';
import Qigong from './pages/Qigong';
import Events from './pages/Events';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/qigong" element={<Qigong />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      <SocialLinks />
      <Footer />
    </Router>
  );
}

export default App;
