import React from 'react';
import './CTASection.css';
import { placeholders } from '../../data/strings';

const CTASection: React.FC = () => {
  return (
    <section className="cta-section">
      <h2>{placeholders.cta.title}</h2>
      <p>{placeholders.cta.description}</p>
      {/* Form to be added here */}
    </section>
  );
}

export default CTASection;
