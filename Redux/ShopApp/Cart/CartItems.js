import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemCountActions } from "../Store/item-count";

import {
  CartItemsLi,
  ItemsHeader,
  ItemsH3,
  PriceDiv,
  PriceSpan,
  DetailsDiv,
  QuantityDiv,
  QuantitySpan,
  ButtonContainer,
  Button,
} from "./CartItemStyles";

const CartItems = (props) => {
  const { title, quantity, total, price, id } = props.item;

  const dispatch = useDispatch()

  const addItemHandler =()=>{
    dispatch(itemCountActions.addItem({
      id,
      title,
      price
    }))
  }
  const removeItemHandler =()=>{
    dispatch(itemCountActions.removeItem(id))
  }

  return (
    <>
      <CartItemsLi>
        <ItemsHeader>
          <ItemsH3>{title}</ItemsH3>
          <PriceDiv>
            ${total.toFixed(2)}{" "}
            <PriceSpan>(${price.toFixed(2)}/item)</PriceSpan>
          </PriceDiv>
        </ItemsHeader>
        <DetailsDiv>
          <QuantityDiv>
            x <QuantitySpan>{quantity}</QuantitySpan>
          </QuantityDiv>
          <ButtonContainer>
            <Button onClick={removeItemHandler}>-</Button>
            <Button onClick={addItemHandler}>+</Button>
          </ButtonContainer>
        </DetailsDiv>
      </CartItemsLi>
    </>
  );
};

export default CartItems;
