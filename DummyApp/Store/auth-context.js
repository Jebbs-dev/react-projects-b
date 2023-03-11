import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (email, password) => {},
  onLogOut: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const logInfo = localStorage.getItem("isLoggedIn");

    if (logInfo === "LOGGED_IN") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "LOGGED_IN");
    // the arguments of the local storage are strings.
    // 1. the first argument to give the name
    // 2. The second argument can be used as a signal
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          onLogin: loginHandler,
          onLogOut: logoutHandler
        }}
      >
        {props.children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContext;
