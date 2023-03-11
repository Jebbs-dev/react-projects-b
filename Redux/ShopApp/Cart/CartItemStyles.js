import styled from "styled-components";

export const CartItemsLi = styled.li`
  margin: 1rem 0;
  background-color: #575757;
  padding: 1rem;
`;

export const ItemsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const ItemsH3 = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.75rem;
`;

export const PriceDiv = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const PriceSpan = styled.span`
  font-weight: normal;
  font-size: 1rem;
  font-style: italic;
`;

export const DetailsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuantityDiv = styled.div``;

export const QuantitySpan = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0.5rem 0;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid white;
  margin-left: 0.5rem;
  padding: 0.15rem 1rem;
  color: white;

  &:hover,
  &:active {
    background-color: #4b4b4b;
    color: white;
  }
`;
