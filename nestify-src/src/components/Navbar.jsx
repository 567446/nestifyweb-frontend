import React from 'react'

function Navbar() {

  const scrollToProperties = (e) => {
    e.preventDefault();
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFooter = (e) => {
    e.preventDefault();
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">
          Nest<span>ify</span>
        </div>

        <div className="nav-links">
          <a href="#properties" onClick={scrollToProperties}>Buy</a>
          <a href="#properties" onClick={scrollToProperties}>Rent</a>
          <a href="#properties" onClick={scrollToProperties}>Sell</a>
          <a href="#footer" onClick={scrollToFooter}>About</a>
        </div>

        <div className="nav-actions">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
