// NavBar.js

import React from 'react';
import './NavBar.css'; // Import CSS file for styling (create this file later)

const NavBar = () => {
  return (
    <nav className="navbar">
        <a href = "#contactUs" className="contactUs"><span role="img" aria-label="phone">📞</span> צור קשר</a>
        <div className="links">
          <a href="#about">אודות</a>
          <a href="#services">שרותים</a>
          <a href="#logo">לוגו החברה</a>
        </div>
    </nav>
  );
};

export default NavBar;
