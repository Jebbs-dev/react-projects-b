import React, { useEffect, useState } from "react";
import { FormContainer, Form, FormInputContainer, FormLabel,  FormInput, Button } from "./LoginStyles"; 

const Login = (props) => {
  const [inputEmail, setInputEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [inputPassword, setInputPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(()=>{
    setFormIsValid(
      inputEmail.includes('@') && inputPassword.trim().length > 6
    );
  }, [inputEmail, inputPassword])

  const emailChangeHandler = (e) => {
    setInputEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setInputPassword(e.target.value);

  };

  const validateEmailHandler = () => {
    setEmailIsValid(inputEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(inputPassword.trim().length > 6);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <FormContainer className="template">
        <Form onSubmit={formSubmitHandler}>
          <FormInputContainer className={!emailIsValid &&  "invalid" }>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              id="email"
              name="email"
              type="email"
              value={inputEmail}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
          </FormInputContainer>
          <FormInputContainer classname={!passwordIsValid  && "invalid"}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
              id="password"
              name="password"
              type="password"
              value={inputPassword}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
          </FormInputContainer>
          <Button type="submit" disabled={!formIsValid}>submit</Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default Login;
