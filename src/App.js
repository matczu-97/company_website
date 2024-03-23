// App.js

import React from 'react';
import './App.css'; // Import default App.css for basic styling
import NavBar from './NavBar'; // Import NavBar component
import ImageSection from './ImageSection'; // Import ImageSection component
import AboutSection from './AboutSection'; // Import AboutSection component
import ServicesSection from './ServicesSection'; // Import ServicesSection component

function App() {
  return (
    <div className="App">
      <NavBar />
      <ImageSection />
      <AboutSection />
      <ServicesSection />
      {/* Other content of your landing page */}
    </div>
  );
}

export default App;
