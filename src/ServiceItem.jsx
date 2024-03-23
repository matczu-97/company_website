// ServiceItem.js

import React, { useState } from 'react';
import './ServiceItem.css'; // Import CSS file for styling (create this file later)

const ServiceItem = ({ text, image }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="service-item">
      <img src={image} alt="Service" className="service-image" />
      <button className="read-more" onClick={() => setShowDetails(!showDetails)}>
         &#9660; ... קרא עוד{/* Unicode downward arrow character */}
      </button>
      {showDetails && <p className="service-details">{text}</p>}
    </div>
  );
};

export default ServiceItem;
