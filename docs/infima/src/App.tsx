import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import CTASection from './components/CTASection/CTASection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}

export default App;
