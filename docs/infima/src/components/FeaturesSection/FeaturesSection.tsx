import React from 'react';
import './FeaturesSection.css';
import { placeholders } from '../../data/strings';

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2>{placeholders.features.title}</h2>
      <div className="features-list">
        {placeholders.features.featureItems.map((item, index) => (
          <div className="feature-item" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
