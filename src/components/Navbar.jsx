import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          Nest<span>ify</span>
        </Link>

        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/properties">Properties</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>

        <div className="nav-actions">
          {isAuthenticated ? (
            <>
              <span className="nav-user">Hi, {user?.name?.split(' ')[0]}</span>
              <motion.button
                className="login-btn"
                onClick={logout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Log out
              </motion.button>
            </>
          ) : (
            <>
              <Link to="/login" className="login-btn">Login</Link>
              <Link to="/register" className="signup-btn">Sign Up</Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;