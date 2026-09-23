import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import CitySkyline from '../components/CitySkyline';
import { useState } from 'react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Home() {
  const navigate = useNavigate();
  const [location, setLocation] = useState('Mumbai, India');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = () => {
    let minPrice = "";
    let maxPrice = "";
    if (priceRange) {
      const [min, max] = priceRange.split('-');
      minPrice = min;
      maxPrice = max;
    }
    navigate('/properties', { state: { location, propertyType, minPrice, maxPrice } });
  };

  return (
    <section className="hero">
      <div className="hero-grid">

        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-small" variants={itemVariants}>FIND YOUR DREAM HOME</motion.p>

          <motion.h1 variants={itemVariants}>
            Find a place
            <br />
            you'll <span>love</span> to live.
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Discover beautiful homes, apartments and properties
            that perfectly match your lifestyle.
          </motion.p>

          <motion.div className="search-box" variants={itemVariants}>

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

            <motion.button
              className="search-btn"
              onClick={handleSearch}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Search
            </motion.button>

          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <CitySkyline />
        </motion.div>

      </div>
    </section>
  );
}