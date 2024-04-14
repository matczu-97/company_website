// NavBar.js

import React, { useState } from 'react';
import './NavBar.css'; // Import CSS file for styling (create this file later)
import 'font-awesome/css/font-awesome.min.css';
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar" id="home">
      {/* Desktop view */}
      <div className="desktop-menu">
        <Link to="contactUs" smooth={true} duration={500} className="contactUs"><span role="img" aria-label="phone">📞</span> צור קשר</Link>
        <div className="links">
          <Link to ="about"    smooth={true} duration={500}>אודות</Link>
          <Link to ="services" smooth={true} duration={500}>שרותים</Link>
          <Link to ="mainImage" smooth={true} duration={500}><i className='fa fa-home'></i></Link>
        </div>
      </div>

      {/* Mobile view */}

      <div className="mobile-menu">
        
      <div className='seperator'></div>

      {menuOpen && (
        <div className="mobile-links">
          <a href="#mainImage"><i className='fa fa-home'></i></a>
          <a href="#services">שרותים</a>
          <a href="#about">אודות</a>
          <a href="#contactUs">📞</a>
        </div>
      )}
        
        <a className='mobile-menu-button' onClick={toggleMenu}>
        <i className="fa fa-bars menu-icon"></i> {/* Font Awesome menu icon */}
        </a>

      </div>
    </nav>
  );
};

export default NavBar;
