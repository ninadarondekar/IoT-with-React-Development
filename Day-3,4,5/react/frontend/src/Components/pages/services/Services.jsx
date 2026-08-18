import React from 'react';
import './services.css';

// Data array containing only the 3 main packages
const safariPackages = [
  {
    id: 1,
    title: 'PACKAGE 1',
    subtitle: 'Family Package : Safari Time: 2:45 Hours',
    price: '₹5000.00',
    colorClass: 'header-blue',
    features: [
      'Tsunami Island',
      'Bhogwe Beach & Crocodile Shape',
      "Seagull Bird's & Island",
      'Sangam Point & Mini Kerala',
      'Dolphin Point',
      'Nivati Fort, Nivati Rock, Nivati Beach',
      'Golden Rock',
      '2 Lighthouse',
      'Two Hill Rock',
      'Mangrove Safari',
      'Mhatarichi Chul',
      'Complimentary Bisleri'
    ]
  },
  {
    id: 2,
    title: 'PACKAGE 2',
    subtitle: 'Family Package : Safari Time: 2:00 Hours',
    price: '₹4500.00',
    colorClass: 'header-sand',
    features: [
      'Tsunami Island',
      'Bhogwe Beach',
      'Crocodile Shape',
      "Seagull Bird's & Island",
      'Sangam Point',
      'Mini Kerala',
      'Dolphin Point',
      '2 Lighthouse',
      'Mhatarichi Chul',
      'Mangrove Safari',
      'Complimentary Bisleri'
    ]
  },
  {
    id: 3,
    title: 'PACKAGE 3',
    subtitle: 'Family Package : Safari Time: 1:30 Hours',
    price: '₹2000.00',
    colorClass: 'header-purple',
    features: [
      'Tsunami Island',
      'Bhogwe Beach',
      'Crocodile Shape',
      "Seagull Bird's & Island",
      'Sangam Point',
      'Mini Kerala',
      'Dolphin Point',
      'Nivati Fort, Nivati Rock, Nivati Beach',
      'Golden Rock',
      'Mangrove Safari'
    ]
  }
];

const Services = () => {
  return (
    <div className="services-page">
      
      {/* Services Hero Section */}
      <section className="services-hero">
        <div className="services-hero-overlay">
          <h1>Our Safari Packages</h1>
          <p>Choose the perfect coastal adventure that fits your time and budget.</p>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="pricing-section">
        <div className="pricing-container">
          
          <div className="pricing-grid">
            {safariPackages.map((pkg) => (
              <div className="pricing-card" key={pkg.id}>
                
                {/* Dynamic Header color based on the screenshot */}
                <div className={`pricing-header ${pkg.colorClass}`}>
                  <h2>{pkg.title}</h2>
                  <p className="subtitle">{pkg.subtitle}</p>
                  <div className="price">
                    {pkg.price}
                  </div>
                </div>

                <div className="pricing-body">
                  <h4 className="included-title">PACKAGE INCLUDED:</h4>
                  <ul className="feature-list">
                    {pkg.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  
                  <button className="call-btn">
                    CALL FOR DETAILS • +91-8766425373
                  </button>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Services;