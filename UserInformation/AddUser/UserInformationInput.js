import React, { useRef, useState } from "react";

import {
  FormContainer,
  Form,
  FormLabel,
  FormInput,
} from "./UserInformationStyles";
import { Button } from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
//step or page 1 of creation
//step 2 calling in index.js

const UserInformationInput = (props) => {
  const nameInputRef = useRef();
  const userNameInputRef = useRef();
  const emailInputRef = useRef();
  const birthInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const [userDetailsInput, setUserDetailsInput] = useState({
    name: "",
    username: "",
    email: "",
    birth: "",
    password: "",
    confirmPassword: ""
  });

  const [people, setPeople] = useState([]);

  const [error, setError] = useState("");

  const userDetailsChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserDetailsInput((lastState) => {
      return { ...lastState, [name]: value };
    });
  };

  // const getAge =()=>{
  //   let today = new Date();
  //   let birthdate = userDetailsInput.birth;
  //   let age = today.getFullYear() - birthdate.getFullYear();
  //   let m = today.getMonth() - birthdate.getMonth()
  //   if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())){
  //     age--
  //   }
  //   return age
  // }

  const infoSubmitHandler = (e) => {
    e.preventDefault();
    // const nameInput = nameInputRef.current.value;
    // const userNameInput = userNameInputRef.current.value;
    // const emailInput = emailInputRef.current.value;
    // const birthInput = birthInputRef.current.value;
    // const passwordInput = passwordInputRef.current.value;
    // const confirmPasswordInput = confirmPasswordInputRef.current.value;

    // for validation: to ensure only valid inputs get submitted,
    if (
      userDetailsInput.name.trim().length === 0 ||
      userDetailsInput.username.trim().length === 0 ||
      userDetailsInput.email.trim().length === 0 ||
      userDetailsInput.birth.trim().length === 0 ||
      userDetailsInput.password.trim().length === 0 ||
      userDetailsInput.confirmPassword.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please fill all the information correctly!",
      });
      return;
    }

    const userData = {
      name: userDetailsInput.name,
      username: userDetailsInput.username,
      email: userDetailsInput.email,
      birth: userDetailsInput.birth,
      // password: userDetailsInput.password,
      // confirmPassword: userDetailsInput.confirmPassword
    };
    setPeople((them) => {
      return [...them, userData];
    });

    props.onAddUser(people);
    // props.onAddUser(refnames)

    setUserDetailsInput({
      name: "",
      username: "",
      email: "",
      birth: "",
      password: "",
      confirmPassword: "",
    });
    // this is to ensure that the inputs are cleared upon submission of the form.
  };
 
  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onHandleError={errorHandler} 
        />
      )}
      <FormContainer className="template">
        <Form onSubmit={infoSubmitHandler}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput
            id="name"
            name="name"
            type="text"
            onChange={userDetailsChangeHandler}
            value={userDetailsInput.name}
            ref={nameInputRef}
          />
          <FormLabel htmlFor="username">Username</FormLabel>
          <FormInput
            id="username"
            name="username"
            type="text"
            onChange={userDetailsChangeHandler}
            value={userDetailsInput.username}
            ref={userNameInputRef}
          />
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            id="email"
            name="email"
            type="email"
            onChange={userDetailsChangeHandler}
            value={userDetailsInput.email}
            ref={emailInputRef}
          />
          <FormLabel htmlFor="birth">Date of Birth</FormLabel>
          <FormInput
            id="birth"
            name="birth"
            type="date"
            max="2004-12-31"
            onChange={userDetailsChangeHandler}
            ref={birthInputRef}
          />
          {/*We use javascript to get the age from the date of birth*/}
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            id="password"
            name="password"
            type="password"
            onChange={userDetailsChangeHandler}
            value={userDetailsInput.password}
            ref={passwordInputRef}
          />
          <FormLabel htmlFor="password">Confirm Password</FormLabel>
          <FormInput
            id="confirm-password"
            name="confirmPassword"
            type="password"
            onChange={userDetailsChangeHandler}
            ref={confirmPasswordInputRef}          
            />
          <Button type="submit">submit</Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default UserInformationInput;
