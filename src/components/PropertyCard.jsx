import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function formatPrice(price) {
  if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
  if (price >= 100000) return `₹${(price / 100000).toFixed(1)} L`;
  return `₹${price.toLocaleString('en-IN')}`;
}

export default function PropertyCard({ property, isFavorite, onToggleFavorite }) {
  const { id, image, title, location, price, bhk, area, furnishing, verified, type, parking } = property;

  const handleHeartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite();
  };

  return (
    <motion.div
      className="property-card"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <Link to={`/property/${id}`} className="property-card-link">

        <div className="property-image">
          <img src={image} alt={title} />

          {verified && <span className="verified-badge">✓ Verified</span>}

          <motion.button
            className={`heart ${isFavorite ? 'active' : ''}`}
            onClick={handleHeartClick}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            whileTap={{ scale: 0.85 }}
            animate={isFavorite ? { scale: [1, 1.35, 1] } : { scale: 1 }}
            transition={{ duration: 0.35 }}
          >
            {isFavorite ? '♥' : '♡'}
          </motion.button>
        </div>

        <div className="property-info">

          <div className="property-price">
            {formatPrice(price)}
          </div>

          <h3>{title}</h3>

          <p className="location">
            📍 {location}
          </p>

          <div className="property-details">
            <span>🛏 {bhk} BHK</span>
            <span>📐 {area} sqft</span>
            <span>{furnishing}</span>
          </div>

          <div className="property-tags">
            <span className="tag">{type}</span>
            {parking && <span className="tag">Parking</span>}
          </div>

        </div>

      </Link>
    </motion.div>
  );
}