import React from "react";

import { Small,TopContainer, TopH1, HeadingP } from "./TopContainerStyles";

const TopCon = () => {
  return (
    <>
      <TopContainer>
        {/* <TopImg src={Back} /> */}
        <TopH1>
          WELCOME TO SHOPPA<Small>&trade;</Small>
        </TopH1>
        <HeadingP>YOUR FRIENDLY SHOPPING INVENTORY MANAGER</HeadingP>
      </TopContainer>
    </>
  );
};

export default TopCon;