import React from 'react';
import 'dotenv/config';
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import CTASection from './components/CTASection/CTASection';
import TopBar from './components/TopBar'; 

import './styles/Global.css';


console.log(process.env.YOUR_NOTION_API_KEY);
console.log(process.env.YOUR_DATABASE_ID);


function App() {
  return (
    <div className="App">
      <TopBar />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}

export default App;
