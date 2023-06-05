import React from 'react';
import './FeaturesSection.css';
import { placeholders } from '../../data/strings';
import styled from 'styled-components';


export const FeaturesContainer = styled.section`
  height: 100vh; // Takes the full height of the viewport
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background: var(--background1);
  color: var(--primary);
  padding: 60px 0;
`;


const FeaturesSection: React.FC = () => {
  return (
    <FeaturesContainer className="features-section">
      <h2>{placeholders.features.title}</h2>
      <div className="features-list">
        {placeholders.features.featureItems.map((item, index) => (
          <div className="feature-item" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </FeaturesContainer>
  );
}

export default FeaturesSection;
