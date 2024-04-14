// AboutSection.js
import React from 'react';
import './AboutSection.css'; // Import CSS file for styling (create this file later)
import aboutImage from './images/workersImage.jpg'; // Import the image for about section

const AboutSection = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-content">
        <h2>:אודותינו</h2>
        <p>
        "Czckermann Engineering Solutions is a leading provider of 
        innovative engineering solutions, dedicated to driving progress
        and excellence in the field. With a team of highly skilled 
        engineers, designers, and technicians, we specialize in delivering 
        cutting-edge solutions across a wide range of industries, including
        aerospace, automotive, and renewable energy. Our commitment to
        quality, efficiency, and customer satisfaction sets us apart,
        as we continuously strive to push the boundaries of what's
        possible. From concept to completion, Atlas Engineering 
        Solutions is your trusted partner for turning visions into 
        reality."
        </p>
      </div>
      <img src={aboutImage} alt="About" className="about-image" />
    </div>
  );
};

export default AboutSection;
