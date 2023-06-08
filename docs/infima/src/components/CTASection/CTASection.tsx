import React from 'react';
import './CTASection.css';
import { placeholders } from '../../data/strings';
import styled from 'styled-components';
import { WaitlistForm } from '../WaitlistForm';

export const CTAContainer = styled.section`
  height: "auto"; 
  100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background: var(--background2); 
  padding: 60px 0;
`;

export const CTATitle = styled.h1`
  color: var(--accent);
  font-size: 3em;
  margin-bottom: -5px;
`;

export const CTAText = styled.p`
  color: var(--accent);
  font-size: 0.8em;
  margin-bottom: 30px;
  font-weight: normal;
`;

const CTASection: React.FC = () => {
  return (
    <CTAContainer id="waitlist">
      <CTATitle>{placeholders.cta.title}</CTATitle>
      <CTAText>{placeholders.cta.description}</CTAText>
      <WaitlistForm/>
    </CTAContainer>
  );
}

export default CTASection;
