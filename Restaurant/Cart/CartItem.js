import React from "react";

import {
  ItemsLi,
  DetailsContainer,
  DetailsH2,
  SummaryContainer,
  PriceSpan,
  AmountSpan,
  ActionsContainer,
  RemoveButton,
  AddButton,
} from "./CartItemsStyles";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <>
      <ItemsLi>
        <DetailsContainer>
          <DetailsH2>{props.name}</DetailsH2>
          <SummaryContainer>
            <PriceSpan>{price}</PriceSpan>
            <AmountSpan>x {props.amount}</AmountSpan>
          </SummaryContainer>
        </DetailsContainer>
        <ActionsContainer>
          <RemoveButton onClick={props.onRemove}>-</RemoveButton>
          <AddButton onClick={props.onAdd}>+</AddButton>
        </ActionsContainer>
      </ItemsLi>
    </>
  );
};

export default CartItem;
