import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../Store/auth-context";
import { Link } from "react-router-dom";

import {
  FormContainer,
  FormH1,
  FormElement,
  FormInputContainer,
  FormLabel,
  FormInput,
  FormSpan,
  FormButtonContainer,
  Button,
  // Link,
} from "./SignupInfoStyles";

const loginData = {
  username: "",
  password: "",
  inputErrorMessage: {
    username: "",
    password: "",
  },
};

const LoginInfo = () => {
  const [loginDetails, setLoginDetails] = useState(loginData);
  const [inputError, setInputError] = useState(loginData.inputErrorMessage);
  const [formIsValid, setFormIsValid] = useState(false);

  const authCtx = useContext(AuthContext);

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setLoginDetails((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const validateInput = (event) => {
    let { name, value } = event.target;

    setInputError((prevState) => {
      const stateObj = { ...prevState, [name]: "" };
      switch (name) {
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
          break;
      }
      return stateObj;
    });
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        loginDetails.username &&
          loginDetails.password &&
          inputError.username === "" &&
          inputError.password === ""
      );
    }, 100);
    return () => {
      clearTimeout(identifier);
    };
  }, [loginDetails, inputError]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(loginDetails.username, loginDetails.password);
    }
  };

  return (
    <>
      <FormContainer className="template">
        <FormH1>Login Page</FormH1>
        <FormElement onSubmit={handleSubmit}>
          <FormInputContainer>
            <FormLabel htmlFor="username">Username</FormLabel>
            <FormInput
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              onBlur={validateInput}
              value={loginDetails.username}
            />
          </FormInputContainer>
            {inputError.username && (
              <FormSpan classname="err">{inputError.username}</FormSpan>
            )}

          <FormInputContainer>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={validateInput}
              value={loginDetails.password}
            />
          </FormInputContainer>
            {inputError.password && (
              <FormSpan classname="err">{inputError.password}</FormSpan>
            )}
                
          <FormButtonContainer>
          {/* <Link to="/landing"> */}
              <Button type="submit" className="butt">
                Login
              </Button>
            {/* </Link>  */}
          </FormButtonContainer>
        </FormElement>
      </FormContainer>
    </>
  );
};

export default LoginInfo;
