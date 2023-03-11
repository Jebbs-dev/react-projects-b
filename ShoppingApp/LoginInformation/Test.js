import React, { useEffect, useState, useReducer, useRef } from "react";
import {
  FormContainer,
  FormElement,
  FormInputContainer,
  FormLabel,
  FormInput,
  FormSpan,
  FormButtonContainer,
  Button,
} from "./SignupInfoStyles";

import "../index.css";
import { emailReducer, passwordReducer, usernameReducer } from "./TestReducer";

let userDetails = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};
let users = [];

const Test = () => {
  const [details, setDetails] = useState(userDetails);
  const [people, setPeople] = useState(users);
  const [errors, setErrors] = useState({});
  const [focus, setFocus] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const emailInputRef = useRef();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordRef = useRef();

  // const [emailError, dispatchEmail] = useReducer(emailReducer, {
  //   isComplete: null,
  //   isValid: null
  // })
  // const [usernameError, dispatchUsername] = useReducer(usernameReducer, {
  //   isComplete: null,
  //   isValid: null
  // })
  // const [passwordError, dispatchPassword] = useReducer(passwordReducer, {
  //   isComplete: null,
  //   isValid: null
  // })

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setDetails((lastState) => {
      return { ...lastState, [name]: value };
    });
  };

  // const validateEmailHandler = () =>{
  //   dispatchEmail({type: "INPUT_BLUR"});
  // }
  // const validateUsernameHandler = () =>{
  //   dispatchUsername({type: "INPUT_BLUR"})
  // }

  // const validatePasswordHandler = () =>{
  //   dispatchPassword({type: "INPUT_BLUR"})
  // }

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      email: details.email,
      username: details.username,
      password: details.password,
    };
    setPeople((lastPeople) => {
      return [...lastPeople, userData];
    });

    setFormIsValid(true);
  };

  const handleFocus = (event) => {
    setFocus(true);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      // console.log(errors);
      // if (Object.keys(errors).length === 0 && formIsValid) {
      //   console.log(details);
      // }
      // localStorage.setItem('details', JSON.stringify(people));
      setErrors(validate(details));
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [details]);

  const validate = (values) => {
    const errorMessage = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errorMessage.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errorMessage.email = "This is not a valid email format!";
    }
    if (!values.username) {
      errorMessage.username = "Username is required!";
    }
    if (!values.password) {
      errorMessage.password = "Password is required!";
    } else if (values.password.length < 6) {
      errorMessage.password = "Password must not be less than 6 characters!";
    } else if (values.password.length > 10) {
      errorMessage.password = "Password must not be more than ten characters!";
    }
    if (!values.confirmPassword) {
      errorMessage.confirmPassword = "You should confirm your password";
    } else if (!values.confirmPassword !== details.password) {
      errorMessage.confirmPassword = "Passwords don't match";
    }
    return errorMessage;
  };

  return (
    <>
      <FormContainer className="template">
        <FormElement onSubmit={submitHandler}>
          <FormInputContainer>
            <FormLabel htmlFor="email">E-Mail</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={details.email}
              // focus={focus.toString()}
              // ref={emailInputRef}
              onBlur={handleFocus}
            />
            {focus && <FormSpan>{errors.email}</FormSpan>}
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel htmlFor="username">Username</FormLabel>
            <FormInput
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={details.username}
              // ref={usernameInputRef}
              // focus={focus.toString()}
              onBlur={handleFocus}
            />
            {focus && <FormSpan>{errors.username}</FormSpan>}
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={details.password}
              // ref={passwordInputRef}
              // focus={focus.toString()}
              onBlur={handleFocus}
            />
            {focus && <FormSpan>{errors.password}</FormSpan>}
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
            <FormInput
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={details.confirmPassword}
              // focus={focus.toString()}
              onBlur={handleFocus}
            />
            {focus && <FormSpan>{errors.confirmPassword}</FormSpan>}
          </FormInputContainer>
          <FormButtonContainer>
            <Button type="submit" className="butt">
              Sign Up
            </Button>
          </FormButtonContainer>
        </FormElement>
      </FormContainer>
    </>
  );
};

export default Test;
