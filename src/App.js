// App.js

import React from 'react';
import NavBar from './NavBar'; // Import NavBar component
import ImageSection from './ImageSection'; // Import ImageSection component
import AboutSection from './AboutSection'; // Import AboutSection component
import ServicesSection from './ServicesSection'; // Import ServicesSection component
import ContactUs from './ContactUs';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ImageSection />
      <AboutSection />
      <ServicesSection />
      <ContactUs />
      {/* Other content of your landing page */}
    </div>
  );
}

export default App;
