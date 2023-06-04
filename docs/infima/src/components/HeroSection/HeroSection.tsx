import React from 'react';
import './HeroSection.css';
import { placeholders } from '../../data/strings';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <h1>{placeholders.hero.title}</h1>
      <p>{placeholders.hero.description}</p>
      {/* Form to be added here */}
    </section>
  );
}

export default HeroSection;
