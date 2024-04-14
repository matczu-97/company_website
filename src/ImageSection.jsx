// ImageSection.js

import React from 'react';
import './ImageSection.css'; // Import CSS file for styling (create this file later)
import mainImage from './images/main_Image.jpg';

const ImageSection = () => {
  return (
    <div className="image-section">
      <img
        src={mainImage} // Placeholder image URL, replace with your actual image URL
        alt="image of the main image"
        className="image"
        id = "mainImage"
      />
    </div>
  );
};

export default ImageSection;
