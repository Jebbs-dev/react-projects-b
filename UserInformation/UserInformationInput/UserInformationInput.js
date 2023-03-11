import React, { useState } from "react";

const UserInformationInput = (props) => {
  const [userNameInput, setUserNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const userNameInputChangeHandler = (event) => {
    setUserNameInput(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setAgeInput(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: userNameInput,
      age: ageInput,
      id: Math.random().toString()
    };

    props.onSaveUserData(userData);
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label>Username</label>
          <input onChange={userNameInputChangeHandler} />
        </div>
        <div>
          <label>Age</label>
          <input onChange={ageInputChangeHandler} />
        </div>
        <button type="submit">
          submit
        </button>
      </form>
    </>
  );
};

export default UserInformationInput;
