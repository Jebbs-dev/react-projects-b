import React, { useContext, useEffect, useState } from "react";
import restImage from "../Assets/meals1.jpg";
import CartContext from "../Store/CartContext";
import '../index.css'

import {
  RestHeader,
  RestHeaderH1,
  Button,
  ButtonIcon,
  ShoppingCart,
  ButtonText,
  ButtonBadge,
  ImageContainer,
  RestImg,
} from "./HeaderStyles";

const Header = (props) => {
  const [btnHighlight, setBtnHighlight] = useState(false)
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const noOfCartItems = cartCtx.items.reduce((currNumber, item)=>{
    return currNumber + item.amount;
  }, 0);

  // const btnClasses = `${classes.bump}`


  useEffect(()=>{
    if (items.length === 0){
      return;
    }
    setBtnHighlight(true);

    const timer = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);


  return (
    <>
      <RestHeader>
        <RestHeaderH1>Jebbs Restaurant</RestHeaderH1>
        <Button className={btnHighlight === true ? 'bump' : ''} onClick={props.onShowCart}>
          <ButtonIcon className="icon">
            <ShoppingCart />
          </ButtonIcon>
          <ButtonText className="message">Your Cart</ButtonText>
          <ButtonBadge className="badge">{noOfCartItems}</ButtonBadge>
        </Button>
      </RestHeader>
      <ImageContainer>
        <RestImg src={restImage} alt="A table of awesome food" />
      </ImageContainer>
    </>
  );
};

export default Header;
