import styled from 'styled-components';
import React from 'react';


export const StyledFeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--primary8);
  border-radius: 10px;
  box-shadow: 0 3px 10px var(--primary);
  padding: 20px;
  margin: 10px;
`;

export const FeatureTitle = styled.h3`
  margin: 0;
  margin-bottom: 5%;
  color: #333;
  font-size: 1.5em;
  @media only screen and (max-width: 800px) {
    font-size: 1.2em;
  }
`;

export const FeatureDescription = styled.p`
  margin: 0;
  @media only screen and (max-width: 800px) {
    font-size: 1em;
  }
  padding-bottom: 10px;
`;

interface FeatureCardProps {
    title: string;
    description: string[];
}
  
const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
    return (
        <StyledFeatureCard>
            <FeatureTitle>{title}</FeatureTitle>
              {description.map((v, i) => <FeatureDescription key={i} >{v}</FeatureDescription>)}
        </StyledFeatureCard>
    );
};
  
export default FeatureCard;