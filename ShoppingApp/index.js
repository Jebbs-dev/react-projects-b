import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import BudgetForm from "./Groceries/BudgetForm";
import ItemsForm from "./Groceries/ItemsForm";
import NewBudget from "./Groceries/NewBudget";

import Landing from "./Layout/Landing";
import LoginInfo from "./LoginInformation/LoginInfo";
import SignupInfo from "./LoginInformation/SignupInfo";
import Test from "./LoginInformation/Test";
import AuthContext from "./Store/auth-context";

export const Main = styled.main`
  margin-top: 0px;
`;

const allData = [
  {
    date:  new Date (""),
    budget: "",
    id: ""
  }
]

const Home = () => {
  const ctx = useContext(AuthContext);

  const [usersbudget, setUsersBudget] = useState(allData);

  const addBudgetHandler = (budget) => {
    // setUsersBudget((prevUsersBudget) => {
    //   return [budget, ...prevUsersBudget]});
    setUsersBudget([budget])
    // we create new data for every user and add to our userslist array
    // console.log(usersbudget)
  };

  const addItemsHandler = (item)=>{
    
  }

  return (
    <>
      <SignupInfo/>
      {/* {!ctx.isLoggedIn && <LoginInfo /> }
          {ctx.isLoggedIn && <Landing /> } */}
      {/* <Landing/> */}
      {/* <NewBudget onAddBudget={addBudgetHandler} />
      <Routes>
        <Route path="/itemsform" element={<ItemsForm users={usersbudget} />} />
      </Routes> */}
      
      
    </>
  );
};

export default Home;
