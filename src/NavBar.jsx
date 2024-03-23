// NavBar.js

import React from 'react';
import './NavBar.css'; // Import CSS file for styling (create this file later)

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="links">
        <a href="#about">אודות</a>
        <a href="#services">שירותים</a>
      </div>
      <div className="contact">
        <button>צור קשר</button>
      </div>
    </nav>
  );
};

export default NavBar;
