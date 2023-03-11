import React, { useRef, useState } from "react";

import {
  FormContainer,
  FormInputContainer,
  InputLabel,
  FormInput,
  ButtonContainer,
  CancelButton,
  ConfirmButton,
} from "./CheckoutStyles";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props, { invalid = false }) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  let validityCheck = false;

  const confirmHandler = (event) => {
    event.preventDefault();
    validityCheck = true;

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = isFiveChars(enteredPostal);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postal: enteredPostalIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postal: enteredPostal
    })
  };

  const nameInputInvalid = formInputValidity.name ? invalid : !invalid;
  const streetInputInvalid = formInputValidity.street ? invalid : !invalid;
  const postalInputInvalid = formInputValidity.postal ? invalid : !invalid;
  const cityInputInvalid = formInputValidity.city ? invalid : !invalid;

  return (
    <>
      <FormContainer onSubmit={confirmHandler} >
        <FormInputContainer>
          <InputLabel htmlFor="name" invalid={nameInputInvalid}>Name</InputLabel>
          <FormInput type="text" id="name" ref={nameInputRef} invalid={nameInputInvalid}/>
          {!formInputValidity.name && <p>Please enter a valid name!</p>}
        </FormInputContainer>
        <FormInputContainer>
          <InputLabel htmlFor="street" invalid={streetInputInvalid}>Street</InputLabel>
          <FormInput type="text" id="street" ref={streetInputRef} invalid={streetInputInvalid}/>
          {!formInputValidity.street && <p>Please enter a valid street!</p>}
        </FormInputContainer>
        <FormInputContainer>
          <InputLabel htmlFor="postal" invalid={postalInputInvalid}>Postal Code</InputLabel>
          <FormInput type="text" id="postal" ref={postalInputRef} invalid={postalInputInvalid}/>
          {!formInputValidity.postal && <p>Please enter a valid postal address!</p>}
        </FormInputContainer>
        <FormInputContainer>
          <InputLabel htmlFor="city" invalid={cityInputInvalid}>City</InputLabel>
          <FormInput type="text" id="city" ref={cityInputRef} invalid={cityInputInvalid}/>
          {!formInputValidity.city && <p>Please enter a valid city!</p>}
        </FormInputContainer>
        <ButtonContainer>
          <CancelButton type="button" onClick={props.onCancel}>
            Cancel
          </CancelButton>
          <ConfirmButton>Confirm</ConfirmButton>
        </ButtonContainer>
      </FormContainer>
    </>
  );
};

export default Checkout;
