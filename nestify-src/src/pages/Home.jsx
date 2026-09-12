import React, { useState } from 'react'

export default function Home({ onSearch }) {
  const [location, setLocation] = useState('Mumbai, India');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = () => {
    onSearch({ location, propertyType, priceRange });
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-small">FIND YOUR DREAM HOME</p>

        <h1>
          Find a place
          <br />
          you'll <span>love</span> to live.
        </h1>

        <p className="hero-description">
          Discover beautiful homes, apartments and properties
          that perfectly match your lifestyle.
        </p>

        <div className="search-box">

          <div className="search-item">
            <span>📍</span>
            <div>
              <small>Location</small>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City or locality"
              />
            </div>
          </div>

          <div className="search-item">
            <span>🏠</span>
            <div>
              <small>Property Type</small>
              <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                <option value="">Any Type</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Villa">Villa</option>
                <option value="Office">Office</option>
              </select>
            </div>
          </div>

          <div className="search-item">
            <span>💰</span>
            <div>
              <small>Price Range</small>
              <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                <option value="">Any Price</option>
                <option value="0-7500000">Under ₹75 L</option>
                <option value="7500000-15000000">₹75 L – ₹1.5 Cr</option>
                <option value="15000000-100000000">Above ₹1.5 Cr</option>
              </select>
            </div>
          </div>

          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>

        </div>

      </div>

    </section>
  );
}
