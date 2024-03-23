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
            חברתנו מתחמה שפיקוח על פרוייקטים מסובכים, כמו כן על ייעוץ משפטי.
            באמתחתנו ניסון רב
            חברתנו מתחמה שפיקוח על פרוייקטים מסובכים, כמו כן על ייעוץ משפטי.
            באמתחתנו ניסון רב
            חברתנו מתחמה שפיקוח על פרוייקטים מסובכים, כמו כן על ייעוץ משפטי.
            באמתחתנו ניסון רב
            חברתנו מתחמה שפיקוח על פרוייקטים מסובכים, כמו כן על ייעוץ משפטי.
            באמתחתנו ניסון רב
            חברתנו מתחמה שפיקוח על פרוייקטים מסובכים, כמו כן על ייעוץ משפטי.
            באמתחתנו ניסון רב
            חברתנו מתחמה שפיקוח על פרוייקטים מסובכים, כמו כן על ייעוץ משפטי.
            באמתחתנו ניסון רב
        </p>
      </div>
      <img src={aboutImage} alt="About" className="about-image" />
    </div>
  );
};

export default AboutSection;
