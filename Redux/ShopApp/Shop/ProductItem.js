import React from "react";
import { useDispatch } from "react-redux";

import {
  ProductLi,
  Wrapper,
  Header,
  ProductH3,
  PriceContainer,
  ProductP,
  ActionDiv,
  Button,
} from "./ProductItemStyles";
import { itemCountActions } from "../Store/item-count";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, description, id } = props;


  // const itemCount = useSelector(state => state.itemCount)

  const addItemHandler = () => {
    // const newTotalQuantity = itemCount.totalQuantity + 1;

    // const updatedItems = itemCount.cartItems.slice();
    // // using slice to create a copy to avoid mutation
    // const existingItem = updatedItems.find((item) => item.id === id)
    // // drilling into the original data and sorting by id
    // if(existingItem){
    //   const updatedItem = {...existingItem};
    // // clone the data gotten to avoid mutation also
    // updatedItem.quantity++;
    // // can now manipulate the cloned data to desired use
    // updatedItem.price = updatedItem.price + price;
    // const existingItemIndex = updatedItems.findIndex((item) => item.id === id)
    // updatedItems[existingItemIndex] = updatedItem;
    // } else {
    //   updatedItems.push({
    //     id: id,
    //     price: price,
    //     quantity: 1,
    //     totalPrice: price,
    //     name: title
    //   })
    // }

    // const newItemCount = {
    //   totalQuantity: newTotalQuantity,
    //   cartItems: updatedItems
    // }
    // dispatch(itemCountActions.replaceCart(newItemCount))

    dispatch(
      itemCountActions.addItem({
        id,
        title,
        price,
      })
    );
  };

  return (
    <>
      <ProductLi>
        <Wrapper>
          <Header>
            <ProductH3>{title}</ProductH3>
            <PriceContainer>${price.toFixed(2)}</PriceContainer>
          </Header>
          <ProductP>{description}</ProductP>
          <ActionDiv>
            <Button onClick={addItemHandler}>Add to Cart</Button>
          </ActionDiv>
        </Wrapper>
      </ProductLi>
    </>
  );
};

export default ProductItem;
