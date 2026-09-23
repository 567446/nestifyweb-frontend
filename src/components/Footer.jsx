import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" id="footer">

      <div>
        <h2>🏠 Nestify</h2>
        <p>
          Find your perfect place with Nestify.
        </p>
      </div>

      <div>
        <h3>Quick Links</h3>
        <Link to="/">Home</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/about">About Us</Link>
      </div>

      <div>
        <h3>Contact</h3>
        <p>📍 Mumbai, India</p>
        <p>📧 Vinitrsn07@gmail.com</p>
        <p>📞 +91 91366 15093</p>
      </div>

    </footer>
  );
}

