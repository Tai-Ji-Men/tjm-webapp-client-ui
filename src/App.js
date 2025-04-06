import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <SocialLinks />
      <Footer />
    </Router>
  );
}

export default App;
