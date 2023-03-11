import React, { useState, useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import TopCon from "../Layout/TopContainer";

import {
  FormContainer,
  FormH1,
  FormElement,
  FormInputContainer,
  FormLabel,
  FormInput,
  FormSpan,
  FormButtonContainer,
  // Link,
  Button,
} from "./SignupInfoStyles";

const userInfo = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
  formErrorMessage: {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  },
  //   emailIsValid: false,
  //   usernameIsValid: false,
  //   passwordIsValid: false,
  //   confirmPasswordIsValid: false
};

const usersArray = [];

const LoginInfo = (props) => {
  const [userDetails, setUserDetails] = useState(userInfo);
  const [detailsArray, setDetailsArray] = useState(usersArray);
  const [error, setError] = useState(userInfo.formErrorMessage);
  const [formIsValid, setFormIsValid] = useState(false);

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUserDetails((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const validateInput = (event) => {
    let { name, value } = event.target;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    setError((prevState) => {
      const stateObj = { ...prevState, [name]: "" };
      switch (name) {
        case "email":
          if (!value) {
            stateObj[name] = "Email is required!";
          } else if (!regex.test(value)) {
            stateObj[name] = "Please enter a valid email format!";
          }
          break;

        case "username":
          if (!value) {
            stateObj[name] = "Username is required!";
          } else if (value.length < 6) {
            stateObj[name] = "Username must be more than 6 characters!";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Password is required!";
          } else if (value.length < 6) {
            stateObj[name] = "Password must not be less than 6 characters!";
          } else if (value.length > 10) {
            stateObj[name] = "Password must not be greater than 10 characters!";
          }
          if (
            userDetails.confirmPassword &&
            value !== userDetails.confirmPassword
          ) {
            stateObj["confirmPassword"] = "Passwords do not match";
          } else {
            stateObj["confirmPassword"] = userDetails.confirmPassword
              ? " "
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please confirm password";
          } else if (userDetails.password && value !== userDetails.password) {
            stateObj[name] = "Passwords don't match";
          }
          break;
      }
      return stateObj;
    });
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        userDetails.email &&
          userDetails.username &&
          userDetails.password &&
          userDetails.confirmPassword &&
          error.email === "" &&
          error.username === "" &&
          error.password === "" &&
          error.confirmPassword === ""
      );

      // if (Object.keys(error).length === 0 && formIsValid) {
      //   console.log(userDetails);
      // }
      // localStorage.setItem('userDetails', JSON.stringify(detailsArray));
    }, 100);
    return () => {
      clearTimeout(identifier);
    };
  }, [userDetails, error]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const allUsers = {
      email: userDetails.email,
      username: userDetails.username,
      password: userDetails.password,
    };

    // setFormIsValid(true);

    if (formIsValid) {
      setDetailsArray((lastDetails) => {
        return [...lastDetails, allUsers];
      });
      console.log(detailsArray);
    } else {
    }
  };

  return (
    <>
      {/* <TopCon /> */}
      <FormContainer className="template">
        <FormH1>Sign Up Here</FormH1>
        <FormElement onSubmit={handleSubmit}>
          <FormInputContainer>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={validateInput}
              value={userDetails.email}
            />
            {error.email && <FormSpan classname="err">{error.email}</FormSpan>}
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel htmlFor="username">Username</FormLabel>
            <FormInput
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              onBlur={validateInput}
              value={userDetails.username}
            />
            {error.username && (
              <FormSpan classname="err">{error.username}</FormSpan>
            )}
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={validateInput}
              value={userDetails.password}
            />
            {error.password && (
              <FormSpan classname="err">{error.password}</FormSpan>
            )}
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel htmlFor="confirmpassword">Confirm Password</FormLabel>
            <FormInput
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              onBlur={validateInput}
              value={userDetails.confirmPassword}
            />
            {error.confirmPassword && (
              <FormSpan classname="err">{error.confirmPassword}</FormSpan>
            )}
          </FormInputContainer>
          <FormButtonContainer>
            <Link to="/login">
              <Button type="submit" className="butt">
                Sign Up
              </Button>
            </Link>
          </FormButtonContainer>
        </FormElement>
      </FormContainer>
    </>
  );
};

export default LoginInfo;
