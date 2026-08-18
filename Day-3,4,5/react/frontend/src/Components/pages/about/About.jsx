import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-page">
      
      {/* About Page Hero */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <h1>About Us</h1>
          <p>Your trusted guides to the hidden gems of the Konkan coast.</p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="about-story">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            Welcome to <strong>Amazing Boat Safari</strong>. Nestled in the heart of the 
            beautiful Sindhudurg district, we are passionate about showcasing the pristine 
            beauty of the Malvan coastline, the serene Karli River backwaters, and the 
            majestic Arabian Sea. 
          </p>
          <p>
            What started as a deep love for our local waters has grown into a premier 
            safari experience. We believe that the true magic of the coast isn't just 
            in seeing it from the shore, but in feeling the sea breeze, cruising alongside 
            dolphins, and stepping foot on unique formations like Tsunami Island and 
            Nivati Golden Rock.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-features">
        <h2>Why Sail With Us?</h2>
        <div className="features-grid">
          
          <div className="feature-card">
            <div className="feature-icon">⚓</div>
            <h3>Local Expertise</h3>
            <p>
              Our captains and guides are locals who know these waters like the back of 
              their hands. We know the exact times and spots for the best dolphin sightings 
              and the safest routes to secret beaches.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Safety First</h3>
            <p>
              Your safety is our highest priority. All our boats are well-maintained, 
              equipped with modern safety gear, and operated by licensed professionals 
              so you can relax and enjoy the ride.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌊</div>
            <h3>Unforgettable Routes</h3>
            <p>
              From the historic heights of Vengurla Lighthouse to the untouched white 
              sands of Bhogwe Beach, our curated safaris ensure you don't miss a single 
              breathtaking view.
            </p>
          </div>

        </div>
      </section>

      {/* Team/Mission Call to Action */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To provide thrilling, safe, and eco-friendly boating experiences that create 
          lifelong memories while respecting and preserving the natural marine habitats 
          of our beautiful coastline.
        </p>
      </section>

    </div>
  );
};

export default About;