import React, { useContext } from "react";
import Login from "./LoginInformation/LoginInformation";
import Home from "./Home/Home";
import Header from "./Header/Header";
import styled from "styled-components";
import AuthContext from "./Store/auth-context";

export const Main = styled.main`
  margin-top: 6rem;
`;

const Control = () => {
  const ctx = useContext(AuthContext);

  return (
    <>
      <Header />
      <Main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </Main>
    </>
  );
};

export default Control;
