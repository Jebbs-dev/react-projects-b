import React, { useRef, useState } from "react";
import {
  MealForm,
  FormInputContainer,
  FormInputLabel,
  MealFormInput,
  Button,
} from "./MealItemFormStyles";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const sumbitHandler = (event) => {
    event.preventDefault();

    const inputAmount = amountInputRef.current.value;
    const inputAmountNumber = +inputAmount;

    if (
      inputAmount.trim().length === 0 ||
      inputAmountNumber < 1 ||
      inputAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return;
    }

    props.onAddToCart(inputAmountNumber);
  };

  return (
    <>
      <MealForm onSubmit={sumbitHandler}>
        <FormInputContainer>
          <FormInputLabel htmlFor="Amount">Amount</FormInputLabel>
          <MealFormInput
            id="amount"
            type="number"
            min="1"
            max="5"
            step="1"
            defaultValue="1"
            ref={amountInputRef}
          />
        </FormInputContainer>
        <Button>+ Add</Button>
        {!amountIsValid && <p>Please enter a valid amount betwwen 1-5.</p>}
      </MealForm>
    </>
  );
};

export default MealItemForm;
