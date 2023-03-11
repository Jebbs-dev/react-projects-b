import React, { useState } from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";

import "./index.css";

import styled from "styled-components";
import Cart from "./Cart/Cart";
import CartProvider from "./Store/CartProvider";

export const MainData = styled.main``;

const Home = () => {
  const [cartShow, setCartShow] = useState(false);

  const showCartHandler = () => {
    setCartShow(true);
  };

  const hideCartHandler = () => {
    setCartShow(false);
  };

  return (
    <>
      <CartProvider>
        {cartShow && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <MainData>
          <Meals />
        </MainData>
      </CartProvider>
    </>
  );
};

export default Home;
