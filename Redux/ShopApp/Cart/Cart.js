import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

import { Wrapper, CartH2, CartUl } from "./CartStyles";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.itemCount.cartItems);

  return (
    <>
      <Wrapper>
        <CartH2>Your Shopping Cart</CartH2>
        <CartUl>
          {cartItems.map((item) => (
            <CartItems
              key={item.id}
              item={{
                id: item.id,
                title: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          ))}
        </CartUl>
      </Wrapper>
    </>
  );
};

export default Cart;
