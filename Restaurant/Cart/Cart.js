import React, { useContext, useState } from "react";
import CartContext from "../Store/CartContext";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import {
  CartItemsUl,
  CartItemsLi,
  AmountContainer,
  SpanTotal,
  SpanPrice,
  ActionContainer,
  CloseButton,
  OrderButton,
} from "./CartStyles";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://restaurant-3dfaf-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setHasSubmitted(true);
    cartCtx.clearCart();
  };

  const modalActions = (
    <ActionContainer>
      <CloseButton onClick={props.onClose}>Close</CloseButton>
      {hasItems && <OrderButton onClick={orderHandler}>Order</OrderButton>}
    </ActionContainer>
  );
  const cartItems = (
    <CartItemsUl>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </CartItemsUl>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <AmountContainer>
        <SpanTotal>Total Amount</SpanTotal>
        <SpanPrice>{totalAmount}</SpanPrice>
      </AmountContainer>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmitModalCont = <p>Sending order data...</p>
  
  const hasSubmitModalCont = 
  <>
  <p>Successfully placed an order! You will be alerted when it is ready for pickup.</p>
  <ActionContainer>
      <CloseButton onClick={props.onClose}>Close</CloseButton>
    </ActionContainer>
  </>
  
  return (
    <>
      <Modal onClose={props.onClose}>
        {!isSubmitting && !hasSubmitted && cartModalContent}
        {isSubmitting && isSubmitModalCont}
        {!isSubmitting && hasSubmitted && hasSubmitModalCont}
      </Modal>
    </>
  );
};

export default Cart;
