import React from 'react'

function formatPrice(price) {
  if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
  if (price >= 100000) return `₹${(price / 100000).toFixed(1)} L`;
  return `₹${price.toLocaleString('en-IN')}`;
}

export default function PropertyCard({ property, isFavorite, onToggleFavorite }) {
  const { image, title, location, price, bhk, area, furnishing, verified, type, parking } = property;

  return (
    <div className="property-card">

      <div className="property-image">
        <img src={image} alt={title} />

        {verified && <span className="verified-badge">✓ Verified</span>}

        <button
          className={`heart ${isFavorite ? 'active' : ''}`}
          onClick={onToggleFavorite}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? '♥' : '♡'}
        </button>
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

    </div>
  );
}