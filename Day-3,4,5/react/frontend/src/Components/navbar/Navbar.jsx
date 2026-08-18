import React from 'react';
import './navbar.css';
import logo from './../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">

      {/* Logo + Website Name */}
      <div className="brand">
        <img
          src={logo}
          alt="Amazing Boat Safari Logo"
          className="logo"
        />

        <h1 className="brand-title">
          Amazing Boat Safari
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="navsections">
        <ul className="links">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

        </ul>
      </div>

    </nav>
  );
};

export default Navbar;