import React, { useContext } from "react";
import CartContext from "../../Store/CartContext";
import MealItemForm from "./MealItemForm";

import {
  MealsViewList,
  MealsViewContainer,
  MealsViewH3,
  MealsViewDesc,
  MealsViewPrice,
  MealsFormContainer,
  Testing,
} from "./MealItemStyles";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler =(amount)=>{
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount, 
      price: props.price
    })
  }

  return (
    <>
      <MealsViewList>
        <Testing>
        <MealsViewContainer>
          <MealsViewH3>{props.name}</MealsViewH3>
          <MealsViewDesc>{props.description}</MealsViewDesc>
          <MealsViewPrice>{price}</MealsViewPrice>
        </MealsViewContainer>
        <MealsFormContainer>
          <MealItemForm onAddToCart={addToCartHandler} />
        </MealsFormContainer>
        </Testing>
      </MealsViewList>
    </>
  );
};

export default MealItem;
