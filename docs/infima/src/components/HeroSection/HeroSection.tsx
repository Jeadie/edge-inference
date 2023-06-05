import React from 'react';
import './HeroSection.css';
import { placeholders } from '../../data/strings';
import Logo from '../logo';

import styled from 'styled-components';

export const HeroContainer = styled.section`
  height: 100vh; // Takes the full height of the viewport
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: var(--background); 
  color; var(--text);
  flex-direction: column;
  padding: 60px 0;
`;

export const HeroTitle = styled.h1`
  font-size: 5em;
  padding-left: 200px;
  padding-right: 200px;
  color: var(--accent);

  @media only screen and (max-width: 800px) {
    font-size: 2em;
    padding-left: 30px;
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
    <HeroContainer className="hero-section">
      <Logo backgroundColor="rgba(0, 0, 0, 0)" primaryColor='#310900' secondaryColor='#ae7d54' height="384px" width="512px"/>
      <HeroTitle>{placeholders.hero.title}</HeroTitle>
      {placeholders.hero.description.map((item, _) => (
        <HeroDescription>{item}</HeroDescription>
      ))}
    </HeroContainer>
  );
}

export default HeroSection;
