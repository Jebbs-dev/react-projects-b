import React from "react";
import Navigation from "../Navigation/Navigation";

import { MainHeader, MainHeaderH1 } from "./HeaderStyles";

const Header = (props) => {
  return (
    <>
      <MainHeader>
        <MainHeaderH1>A Typical Page</MainHeaderH1>
        <Navigation onLogout={props.onLogout} />
      </MainHeader>
    </>
  );
};

export default Header;
