import React from 'react';
import './FeaturesSection.css';

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2>Why Infima?</h2>
      <div className="features-list">
        <div className="feature-item">
          <h3>Low Latency</h3>
          <p>Thanks to edge computing, experience ultra low latency across the globe.</p>
        </div>
        <div className="feature-item">
          <h3>Per Request Pricing</h3>
          <p>Pay only for what you use. No more hourly rates.</p>
        </div>
        <div className="feature-item">
          <h3>Edge Computing</h3>
          <p>Decentralized and reliable processing power at your fingertips.</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
