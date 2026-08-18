import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            Amazing Boat Safari offers unforgettable coastal adventures, 
            thrilling water sports, and relaxing boat tours in the beautiful 
            waters of Malvan and the Sindhudurg coastline.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            {/* Kept your react-router-dom Links for faster navigation */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>📍 Tarkarli, Malvan, Maharashtra</p>
          <p>📧 info@amazingboatsafari.com</p>
          <p>📞 +91-8766425373</p> 
        </div>

      </div>

      {/* Copyright Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Amazing Boat Safari. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;