import styled from "styled-components";
import back from '../Assets/back.png'

export const LandingContainer = styled.div`
  // height: 100vh;
  display: flex;
  flex-direction: column;
;
`;

export const Small = styled.small`

`;

export const TopContainer = styled.div`
  top: 0;
  height: 40vh;
  width: 100%;
  text-align: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${back});
  background-size: cover;
  background-position: center;
  // position: fixed;
  color: white;
  margin-bottom: 20px;
  
`;

export const TopImg = styled.img`

`;

export const TopH1 = styled.h1`
  
`;

export const HeadingP = styled.p`

`;

export const MessageContainer  = styled.div`
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: #f0f0f0;
  text-align: center;
  height: 40vh;
`;

export const ChoiceTextContainer = styled.div`

`;

export const ChoiceH2 = styled.h2`
  color: #103B56;
`;

export const CreationContainer = styled.div`
  width: 100%;
  
`;

export const Button = styled.button`
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 15px;
  border-color: #4f005f;
  color: #4f005f;
  cursor: pointer;

  &: hover, 
  &: active {
    background-color: #4f005f;
    color: white; 
    border-color: #4f005f;
  }
`;

