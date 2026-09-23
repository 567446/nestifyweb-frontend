import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import properties from '../data/propertiesData';
import { useAuth } from '../context/AuthContext';
import { getFavorites, toggleFavorite } from '../utils/favorites';
import { getFeatures } from '../utils/features';
import { useState } from 'react';

function formatPrice(price) {
  if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
  if (price >= 100000) return `₹${(price / 100000).toFixed(1)} L`;
  return `₹${price.toLocaleString('en-IN')}`;
}

const TABS = [
  { key: 'bedroom', label: '🛏 Bedroom' },
  { key: 'kitchen', label: '🍳 Kitchen' },
  { key: 'hall', label: '🛋 Hall' }
];

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  const property = properties.find((p) => p.id === Number(id));
  const [activeTab, setActiveTab] = useState('bedroom');
  const [isFavorite, setIsFavorite] = useState(() =>
    isAuthenticated && property ? getFavorites(user.id).includes(property.id) : false
  );

  if (!property) {
    return (
      <div className="detail-page">
        <p>Property not found.</p>
        <Link to="/properties" className="back-link">← Back to listings</Link>
      </div>
    );
  }

  const features = getFeatures(property);

  const handleFavoriteClick = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    const updated = toggleFavorite(user.id, property.id);
    setIsFavorite(updated.includes(property.id));
  };

  return (
    <div className="detail-page">
      <Link to="/properties" className="back-link">← Back to listings</Link>

      <div className="detail-layout">

        <div className="detail-gallery">
          <motion.img
            key={activeTab}
            src={property.gallery[activeTab]}
            alt={`${property.title} - ${activeTab}`}
            className="detail-main-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="gallery-tabs">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                className={`gallery-tab ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="detail-info">
          <span className="tag">{property.type}</span>
          <h1>{property.title}</h1>
          <p className="detail-location">📍 {property.location}, {property.district}</p>
          <div className="detail-price">{formatPrice(property.price)}</div>

          <div className="detail-stats">
            <div>
              <strong>{property.bhk}</strong>
              <span>BHK</span>
            </div>
            <div>
              <strong>{property.area}</strong>
              <span>sqft</span>
            </div>
            <div>
              <strong>{property.furnishing}</strong>
              <span>Furnishing</span>
            </div>
          </div>

          <h3>Features</h3>
          <ul className="feature-list">
            <li>{property.parking ? '✅' : '❌'} Parking Available</li>
            <li>{property.verified ? '✅' : '❌'} Verified Property</li>
            {features.map((f) => (
              <li key={f}>✅ {f}</li>
            ))}
          </ul>

          <motion.button
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={handleFavoriteClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            {isFavorite ? '♥ Saved to Favorites' : '♡ Save to Favorites'}
          </motion.button>
        </div>

      </div>
    </div>
  );
}