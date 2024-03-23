// ServicesSection.js

import React from 'react';
import './ServicesSection.css'; // Import CSS file for styling (create this file later)
import ServiceItem from './ServiceItem'; // Import ServiceItem component
import ServiceImage from'./images/services.jpeg'; // Import ServiceImage component
const ServicesSection = () => {
  return (
    <div className="services-section" id="services">
      <h2>:השירותים שלנו</h2>
      <div className="service-list">
        <ServiceItem
          image = {ServiceImage} // Specify image path for service 1
          text="Description for service 1." // Specify text for service 1
        />
        <ServiceItem
          image={ServiceImage} // Specify image path for service 2
          text="Description for service 2." // Specify text for service 2
        />
        <ServiceItem
          image={ServiceImage} // Specify image path for service 3
          text="Description for service 3." // Specify text for service 3
        />
      </div>
    </div>
  );
};

export default ServicesSection;
