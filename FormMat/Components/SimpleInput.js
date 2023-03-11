import React, { useEffect, useRef, useState } from "react";

import {
  FormContainer,
  FormInputContainer,
  FormInputLabel,
  FormInput,
  FormButtonCont,
  Button,
  FormP,
} from "./BasicFormStyles";

import useInput from "../Hooks/useInput";

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const SimpleInput = ({ invalid }) => {

let nameContent = <FormP>Name must not be empty!</FormP>
let emailContent = <FormP>Email must not be empty!</FormP>

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    // error: nameErrorAlert,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    inputReset: resetNameInput,
    
  } = useInput(value => { 
    if(value.trim() === ''){
      nameContent = <FormP>Name must not be empty!</FormP>
    } 
    else if (value.length < 2){
      nameContent = <FormP>Name must not be less than 2 characters!</FormP>
    } else {
      return value
    }
  }
    );


  const {
    value:  enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    inputReset: resetEmailInput
  } = useInput(value => { 
    if(value.trim() === ''){
      emailContent = <FormP>Email must not be empty!</FormP>
    }
    else if (!regex.test(value)){
      emailContent = <FormP>Please enter a valid email!</FormP>
    } else {
      return value
    }
  }
    
    )
  // const nameInputref = useRef();

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // const errorMessage = nameErrorAlert.errorValue;

  // if(enteredName.trim() === ""){
     
  //   }
  

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    // const enteredValue = nameInputref.current.value;
    // setEnteredName("");

    if (!enteredNameIsValid) {
      return;
    } else {
    }

    resetNameInput()
    resetEmailInput()
  };

  const nameInput = nameInputHasError  ? !invalid : invalid;
  const emailInput = emailInputHasError  ? !invalid : invalid;
  
  return (
    <>
      <FormContainer onSubmit={formSubmissionHandler}>
        <FormInputContainer>
          <FormInputLabel htmlFor="name">First Name</FormInputLabel>
          <FormInput
            type="text"
            id="name"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            invalid={nameInput}
            value={enteredName}
            // ref={nameInputref}
          />
          {nameInputHasError && nameContent}
        </FormInputContainer>
        <FormInputContainer>
          <FormInputLabel htmlFor="email">E-mail Address</FormInputLabel>
          <FormInput
            type="email"
            id="email"
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            invalid={emailInput}
            value={enteredEmail}
            // ref={nameInputref}
          />
          {emailInputHasError && emailContent}
        </FormInputContainer>
        <FormButtonCont>
          <Button disabled={!formIsValid}>Submit</Button>
        </FormButtonCont>
      </FormContainer>
    </>
  );
};

export default SimpleInput;
