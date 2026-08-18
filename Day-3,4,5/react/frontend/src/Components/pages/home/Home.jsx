import React from 'react';

import './home.css';

import tsunamiisland from '../../../assets/tsunami_island.png';
import sangam from '../../../assets/sangam.png';
import dolphinpoint from '../../../assets/dolphin_point.png';
import nivatigoldenrock from '../../../assets/nivati_golden_rock.png';
import vengurlalighthouse from '../../../assets/vengurla_lighthouse.png';
// Added the new Bhogwe Beach import
import bhogwebeach from '../../../assets/bhogwe_beach.png';

const destinations = [
  {
    name: 'Tsunami Island',
    image: tsunamiisland,
    description:
      'Experience the beautiful waters of Tsunami Island, a unique coastal destination perfect for an exciting and relaxing boat safari.'
  },

  {
    name: 'Sangam',
    image: sangam,
    description:
      'Witness the beautiful meeting point of waterways at Sangam and enjoy a memorable boat ride through the serene Konkan landscape.'
  },
  {
    name: 'Dolphin Point',
    image: dolphinpoint,
    description:
      'Set out on an exciting boat safari to Dolphin Point and enjoy the chance to spot dolphins in their natural coastal habitat.'
  },
  {
    name: 'Nivati Golden Rock',
    image: nivatigoldenrock,
    description:
      'Explore the spectacular Nivati Golden Rock, surrounded by the Arabian Sea and stunning coastal scenery.'
  },
  {
    name: 'Vengurla Lighthouse',
    image: vengurlalighthouse,
    description:
      'Cruise towards the historic Vengurla Lighthouse and experience breathtaking views of the Arabian Sea and the Konkan coastline.'
  },
 
  {
    name: 'Bhogwe Beach',
    image: bhogwebeach,
    description:
      'Relax on the pristine, white sands of Bhogwe Beach, a hidden gem offering tranquil waters and stunning, untouched coastal views.'
  }
];

const Home = () => {
  return (
    <div className="home">

    

      {/* About Section */}
      <section className="intro">
        <h2>Experience the Magic</h2>

        <p>
          Amazing Boat Safari offers exciting and memorable boat journeys
          through some of the most beautiful destinations along the Konkan
          coastline. Whether you are looking for adventure, relaxation,
          sightseeing or a perfect family experience, our boat safaris are
          designed to make every journey special.
        </p>
      </section>

      {/* Destinations */}
      <section className="destinations">

        <h2>Explore Our Destinations</h2>

        <p className="section-subtitle">
          Discover some of the most beautiful places waiting for you.
        </p>

        <div className="destination-grid">

          {destinations.map((destination, index) => (
            <div className="destination-card" key={index}>

              <img
                src={destination.image}
                alt={destination.name}
              />

              <div className="destination-content">
                <h3>{destination.name}</h3>

                <p>{destination.description}</p>

                <button>Explore More</button>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Call To Action */}
      <section className="booking-section">

        <h2>Ready for Your Next Adventure?</h2>

        <p>
          Your journey across the beautiful waters of Konkan starts here.
        </p>

        <button className="booking-btn">
          Book Your Safari
        </button>

      </section>

    </div>
  );
};

export default Home;