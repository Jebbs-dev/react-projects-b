import React from "react";
import { NavigationNav, NavigationUl, NavigationList, NavigationLink, Button } from "./NavigationStyles";

const Navigation = (props) => {
  return (
    <>
      <NavigationNav>
        <NavigationUl>
          {props.isLoggedIn && (
            <NavigationList>
              <NavigationLink href="/">Users</NavigationLink>
            </NavigationList>
          )}

          {props.isLoggedIn && (
            <NavigationList>
              <NavigationLink href="/">Admin</NavigationLink>
            </NavigationList>
          )}

          {props.isLoggedIn && (
            <NavigationList>
              <Button href="/">Users</Button>
            </NavigationList>
          )}
        </NavigationUl>
      </NavigationNav>
    </>
  );
};

export default Navigation;
