import React, { useState } from "react";
import useInput from "../Hooks/useInput";
import {
  FormContainer,
  FormGroup,
  FormInputContainer,
  FormInputLabel,
  FormInput,
  FormButtonCont,
  Button,
  FormP,
} from "./BasicFormStyles";

let content = "Please enter a valid name";
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const nameCheck = (value) => (value.trim() !== "");
const emailCheck = (value) => value.includes("@");

const BasicForm = ({ invalid }) => {
  const {
    value: enteredFirstName,
    isValid: enteredFNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    inputReset: resetFNameInput,
  } = useInput(nameCheck);

  const {
    value: enteredLastName,
    isValid: enteredLNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    inputReset: resetLNameInput,
  } = useInput(nameCheck);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    inputReset: resetEmailInput,
  } = useInput(emailCheck);

  let formIsValid = false;

  if (enteredFNameIsValid && enteredLNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetFNameInput();
    resetLNameInput();
    resetEmailInput();
  };

  const fNameInput = firstNameInputHasError ? !invalid : invalid;
  const lNameInput = lastNameInputHasError ? !invalid : invalid;
  const emailInput = emailInputHasError ? !invalid : invalid;

  return (
    <>
      <FormContainer onSubmit={formSubmitHandler}>
        <FormGroup>
          <FormInputContainer>
            <FormInputLabel htmlFor="First-Name">First Name</FormInputLabel>
            <FormInput
              type="text"
              id="f-name"
              name="firstName"
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
              value={enteredFirstName}
              invalid={fNameInput}
            />
            {firstNameInputHasError && <FormP>Please enter a first name</FormP>}
          </FormInputContainer>

          <FormInputContainer>
            <FormInputLabel htmlFor="Last-Name">Last Name</FormInputLabel>
            <FormInput
              type="text"
              id="l-name"
              name="lastName"
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
              value={enteredLastName}
              invalid={lNameInput}
            />
            {lastNameInputHasError && <FormP>Please enter a last name</FormP>}
          </FormInputContainer>
        </FormGroup>
        <FormInputContainer>
          <FormInputLabel htmlFor="email">E-mail Address</FormInputLabel>
          <FormInput
            type="email"
            id="email"
            name="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
            invalid={emailInput}
          />
          {emailInputHasError && <FormP>Please enter a valid email</FormP>}
        </FormInputContainer>
        <FormButtonCont>
          <Button disabled={!formIsValid}>Submit</Button>
        </FormButtonCont>
      </FormContainer>
    </>
  );
};

export default BasicForm;
