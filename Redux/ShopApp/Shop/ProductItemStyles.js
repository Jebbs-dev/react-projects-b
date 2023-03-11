import styled from "styled-components";

export const ProductLi = styled.li``;

export const Wrapper = styled.section`
  margin: 1rem auto;
  border-radius: 6px;
  background-color: white;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const ProductH3 = styled.h3`
  margin: 0.5rem 0;
  font-size: 1.25rem;
`;

export const PriceContainer = styled.div`
  border-radius: 30px;
  padding: 0.15rem 1.5rem;
  background-color: #3a3a3a;
  color: white;
  font-size: 1.5rem;
`;

export const ProductP = styled.p`
  color: #3a3a3a;
`;

export const ActionDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  background-color: transparent;
  color: #1a8ed1;
  border: 1px solid #1a8ed1;

  &:hover,
  &:active {
    background-color: #1ac5d1;
    border-color: #1ac5d1;
    color: white;
  }
`;
