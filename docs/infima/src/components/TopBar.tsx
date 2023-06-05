import React from 'react';
import styled from 'styled-components';
import Logo from './logo';

const TopBarContainer = styled.div`
  display: flex;
  width: '100%';
  height: 1vh
  @media only screen and (max-width: 800px) {
    height: '2000px';
  }
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  padding-right: 20px;
  padding-left: 20px;
  margin: 20px;
  margin-bottom: 100px;
  background-color: var(--banner);
  max-height: "100px";
`;


export const MaterialButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #310900;
  background-color: var(--button);
  border: none;
  padding: 6px 16px;
  font-size: 0.8rem;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  border-radius: 4px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

  @media only screen and (max-width: 800px) {
    min-width: 30px;
    padding: 3px 8px;
    font-size: 0.4rem
  }

  &:hover {
    background-color: var(--button-hover);
    color: #FFF
  }
  
  &:active {
    box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  }

  &:focus {
    outline: none;
  }
`;

interface ButtonProps {
    onClick?: () => void;
    label: string;
  }
  
const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
    return (
        <MaterialButton onClick={onClick}>{label}</MaterialButton>
    );
};
  

const TopBar: React.FC = () => {
  return (
    <TopBarContainer>
      <Logo backgroundColor="rgba(0, 0, 0, 0)" primaryColor='#310900' secondaryColor='#ae7d54'/>
      <Button label='Join the Waitlist'></Button>
    </TopBarContainer>
  );
};

export default TopBar;
