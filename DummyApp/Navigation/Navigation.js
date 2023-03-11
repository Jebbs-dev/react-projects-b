import React, { useContext } from "react";
import AuthContext from "../Store/auth-context";
import {
  NavigationNav,
  NavigationUl,
  NavigationList,
  NavigationLink,
  Button,
} from "./NavigationStyles";

const Navigation = () => {
  const ctx = useContext(AuthContext);
  return (
    <>
      {/* <AuthContext.Consumer>
        {(ctx) => { */}
      {/* return ( */}
      <NavigationNav>
        <NavigationUl>
          {ctx.isLoggedIn && (
            <NavigationList>
              <NavigationLink href="/">Users</NavigationLink>
            </NavigationList>
          )}
          {ctx.isLoggedIn && (
            <NavigationList>
              <NavigationLink href="/">Admin</NavigationLink>
            </NavigationList>
          )}
          {ctx.isLoggedIn && (
            <NavigationList>
              <Button onClick={ctx.onLogOut}>Logout</Button>
            </NavigationList>
          )}
        </NavigationUl>
      </NavigationNav>
      {/* ); */}
      {/* }}
      </AuthContext.Consumer> */}
    </>
  );
};

export default Navigation;
