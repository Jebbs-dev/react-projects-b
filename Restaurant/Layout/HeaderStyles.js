import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const RestHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5 rem;
  background-color: #103B56;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

export const RestHeaderH1 = styled.h1``;

export const ImageContainer = styled.div`
  width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;
`;

export const Button = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #001832; 
  color: white;
  padding: 0.5rem  1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  &: hover, 
  &: active {
    background-color: #4280B5;
    // outline: 1px solid red;
  }
`;

export const ButtonIcon = styled.span`
  width: 1.35rem;
  height: 1.1rem;
  
  margin-right: 0.5rem;
`;

export const ShoppingCart = styled(FaShoppingCart)``;

export const ButtonText = styled.span`
`;

export const ButtonBadge = styled.span`
  background-color: #155176;
  padding: 0.3rem 0.9rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
`;

export const RestImg = styled.img`
  width: 110%;
  height: 100%;
  object-fit: cover;
  // transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
`;
