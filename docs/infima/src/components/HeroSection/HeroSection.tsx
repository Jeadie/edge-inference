import React from 'react';
import './HeroSection.css';
import { placeholders } from '../../data/strings';

import styled from 'styled-components';

export const HeroContainer = styled.section`
  height: 70vh; // Takes the full height of the viewport
  (min-width: 800px) {
    display: flex;
  }
  @media only screen and (max-width: 800px) {
    height: 40vh
  }
  justify-content: center;
  align-items: center;
  text-align: center;
  background: var(--background); 
  color; var(--text);
  flex-direction: column;
  padding: 60px 0;
  padding-top: 100px;

`;

export const HeroTitle = styled.h1`
  font-size: 5em;
  padding-top: 200px;
  padding-left: 300px;
  padding-right: 300px;
  color: var(--accent);

  @media only screen and (max-width: 800px) {
    font-size: 2em;
    padding-left: 30px;
    padding-top: 20px;
    padding-right: 30px;
  }

  margin-bottom: 20px;
`;
export const HeroDescription = styled.h1`
  font-size: 1em;
  margin-bottom: -5px;
  margin-left: 10px;
  font-weight: normal;
`;

const HeroSection: React.FC = () => {
  return (
    <HeroContainer id="hero-section" className="hero-section">
      <HeroTitle>{placeholders.hero.title}</HeroTitle>
      {placeholders.hero.description.map((item, index) => (
        <HeroDescription key={index}>{item}</HeroDescription>
      ))}
    </HeroContainer>
  );
}

export default HeroSection;
