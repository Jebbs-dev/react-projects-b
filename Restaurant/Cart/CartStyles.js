import styled from "styled-components";

export const CartItemsUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 15rem;
  overflow: auto;
`;

export const CartItemsLi = styled.li``;



export const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

export const SpanTotal = styled.span``;

export const SpanPrice = styled.span``;

export const ActionContainer = styled.div`
  text-align: right;
`;

export const CloseButton = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #103B56;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem;
  color: #103B56;

  &: hover,
  &: active {
    background-color: #001832;
    border-color: #001832;
    color: white;
  }
`;

export const OrderButton = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #103B56;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem;
  background-color: #103B56;
  color: white;

  &: hover,
  &: active {
    background-color: #001832;
    border-color: #001832;
    color: white;
  }
`;
