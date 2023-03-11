import React, { useContext } from "react";

import {
  LandingContainer,
  TopContainer,
  Small,
  TopImg,
  TopH1,
  HeadingP,
  MessageContainer,
  ChoiceTextContainer,
  ChoiceH2,
  CreationContainer,
  Button,
} from "./LandingStyles";

import "../index.css";
import AuthContext from "../Store/auth-context";

const Landing = () => {
  const ctx = useContext(AuthContext);
  return (
    <>
      <LandingContainer>
        <TopContainer>
          {/* <TopImg src={Back} /> */}
          <TopH1>
            WELCOME TO SHOPPA<Small>&trade;</Small>
          </TopH1>
          <HeadingP>YOUR FRIENDLY SHOPPING INVENTORY MANAGER</HeadingP>
        </TopContainer>
        <MessageContainer>
          <Button onClick={ctx.onLogOut}>Logout</Button>
          <ChoiceTextContainer>
            <ChoiceH2>CHOOSE AN ACTION</ChoiceH2>
          </ChoiceTextContainer>
          <CreationContainer>
            <Button>Create a new shopping list</Button>
            <Button>View all shopping Lists</Button>
          </CreationContainer>
        </MessageContainer>
      </LandingContainer>
    </>
  );
};

export default Landing;
