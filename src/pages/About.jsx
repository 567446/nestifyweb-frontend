import React from 'react'
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="about-page">

      <motion.div
        className="about-hero"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>About Nestify</h1>
        <p>
          Helping people find, rent, buy and sell homes across Mumbai, Navi Mumbai and Thane —
          all in one place.
        </p>
      </motion.div>

      <div className="about-grid">
        <div className="about-stat">
          <strong>18</strong>
          <span>Active Listings</span>
        </div>
        <div className="about-stat">
          <strong>3</strong>
          <span>Districts Covered</span>
        </div>
        <div className="about-stat">
          <strong>90%</strong>
          <span>Verified Options Available</span>
        </div>
      </div>

      <div className="about-content">
        <h2>Our Mission</h2>
        <p>
          Nestify was built to make browsing rental and sale listings simple and transparent —
          no hidden fees, no confusing brokers, just clear information about every property so
          you can make a confident decision.
        </p>

        <h2>How It Works</h2>
        <ol>
          <li>Search by district, budget, and property type from the homepage.</li>
          <li>Compare listings with full photo galleries of every room — bedroom, kitchen, and hall.</li>
          <li>Create a free account to save your favorite properties and come back to them anytime.</li>
        </ol>

        <h2>Why Nestify</h2>
        <p>
          Every listing shows exactly what you're getting — furnishing status, parking
          availability, verified badges, and a breakdown of features specific to that property
          type, whether it's an apartment, villa, independent house, or office space.
        </p>
      </div>

    </div>
  );
}