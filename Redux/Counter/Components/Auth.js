import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Store/auth-slice";
// import SimpleInput from '../../../FormMat/Components/SimpleInput'
import {
  MainWrapper,
  Section,
  FormContainer,
  FormInputContainer,
  FormInputLabel,
  FormInput,
  Button,
} from "./AuthStyles";

const Auth = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const authLoginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <>
      <MainWrapper>
        <Section>
          <FormContainer onSubmit={authLoginHandler}>
            <FormInputContainer>
              <FormInputContainer>
                <FormInputLabel htmlFor="email">E-mail</FormInputLabel>
                <FormInput type="email" id="email" />
              </FormInputContainer>
              <FormInputLabel htmlFor="password">Password</FormInputLabel>
              <FormInput type="password" id="password" />
            </FormInputContainer>
            <Button >Submit</Button>
          </FormContainer>
        </Section>
      </MainWrapper>
    </>
  );
};

export default Auth;
