import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartShowActions } from "../Store/cart-toggle";

import {
  Header,
  HeaderH1,
  Nav,
  Ul,
  Li,
  Button,
  CartSpan,
  BadgeSpan,
} from "./MainHeaderstyles";

const MainHeader = () => {

  const dispatch = useDispatch()
  const itemQuantity = useSelector(state => state.itemCount.totalQuantity)

  const showHandler =() =>{
    dispatch(cartShowActions.cartBtnToggle())
  }

  return (
    <>
      <Header>
        <HeaderH1>Redux Cart</HeaderH1>
        <Nav>
          <Ul>
            <Li>
              <Button onClick={showHandler}>
                <CartSpan>My Cart</CartSpan>
                <BadgeSpan>{itemQuantity}</BadgeSpan>
              </Button>
            </Li>
          </Ul>
        </Nav>
      </Header>
    </>
  );
};

export default MainHeader;
