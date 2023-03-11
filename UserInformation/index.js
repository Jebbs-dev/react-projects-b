import React, { useState } from "react";
import UserInformationInput from "./AddUser/UserInformationInput";

import "./index.css";
import UsersDetailsList from "./UsersDetailsList/UsersDetailsList";

const Home = () => {
  // we manage the state for getting the users list in this component becuase it is the only component above the two involved components that has direct access to both of them.
  // therefore, we lift the state management up here

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uUserName, uEmail, uBirth) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, username: uUserName, email: uEmail, birth: uBirth,id: Math.random().toString() }
      ];
    });
    // we create new data for every user and add to our userslist array
  };
  return (
    <>
      <UserInformationInput onAddUser={addUserHandler} />

      <UsersDetailsList users={usersList} />
      {/* You have to set the users prop for the map function to work */}
    </>
  );
};

export default Home;
