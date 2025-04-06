import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/tjm_logo.svg';
import titleLogo from '../assets/Tai Ji Men Qigong.svg';
import searchIcon from '../assets/Search Glyph.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Tai Ji Men Qigong" className="logo-image" />
          <img src={titleLogo} alt="Tai Ji Men Qigong" className="title-image" />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About TJM</Link>
          </li>
          <li className="nav-item">
            <Link to="/qigong" className="nav-link">Qigong & Life</Link>
          </li>
          <li className="nav-item">
            <Link to="/benefits" className="nav-link">Benefits of Practice</Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-link">Events</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </li>
        </ul>
        <div className="search-box">
          <img src={searchIcon} alt="Search" className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 