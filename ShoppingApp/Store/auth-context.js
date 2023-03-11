import React, {useState, useEffect} from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (username, password) => {},
  onLogOut: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const logInfo = localStorage.getItem("isLoggedIn");

    if (logInfo === "LOGGED_USER") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (username, password) => {
    localStorage.setItem("isLoggedIn", "LOGGED_USER");
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
          onLogOut: logoutHandler,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContext;
