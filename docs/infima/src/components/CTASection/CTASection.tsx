import React from 'react';
import './CTASection.css';
import { placeholders } from '../../data/strings';
import styled from 'styled-components';

export const CTAContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background: var(--background2); 
  padding: 60px 0;
`;

const CTASection: React.FC = () => {
  return (
    <CTAContainer>
      <h1>{placeholders.cta.title}</h1>
      <p>{placeholders.cta.description}</p>
    </CTAContainer>
  );
}

export default CTASection;
