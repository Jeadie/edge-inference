import React from 'react';
import './FeaturesSection.css';
import { placeholders } from '../../data/strings';
import styled from 'styled-components';
import FeatureCard from './FeatureCard';


export const FeaturesContainer = styled.section`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background: var(--background1);
  color: var(--accent);
  padding: 60px 0;
`;

const GridContainer = styled.div`
  display: grid;
  width: 70%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); // This creates a responsive grid
  gap: 20px; // The space between items
  padding-bottom: 60px;
`;

const FeaturesSection: React.FC = () => {
  return (
    <FeaturesContainer className="features-section">
      <GridContainer className="features-list">
        {placeholders.features.featureItems.map((item, index) => (
          <FeatureCard key={index} title={item.title} description={item.description}/>
        ))}
      </GridContainer>
    </FeaturesContainer>
  );
}

export default FeaturesSection;
