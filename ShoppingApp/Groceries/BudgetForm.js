import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import { ExpDate } from './BudgetFormStyles'
import {
  FormContainer,
  FormH1,
  FormElement,
  FormInputContainer,
  FormLabel,
  FormInput,
  FormSpan,
  FormButtonContainer,
  Button,
} from "../LoginInformation/SignupInfoStyles";
import ItemsForm from "./ItemsForm";

const defs = {
  month: "",
  budget: "",
  errorMessage: {
    month: "",
    budget: "",
  },
};

const BudgetForm = (props) => {
  const [budgetDetails, setBudgetDetails] = useState(defs);
  const [inputError, setInputError] = useState(defs.errorMessage);
  const [formIsValid, setFormIsValid] = useState(false);
  const navigate =  useNavigate();


  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setBudgetDetails((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const validateInput = (event) => {
    const {name, value} = event.target;
    const regex = /[^\d\.]/;
    setInputError((prevState)=>{
      const stateObj = {...prevState, [name]: ""};
      switch (name) {
        case "budget": 
        if(!value) {
          stateObj[name] = "A budget is required to continue"
        } else if (regex.test(value)){
          stateObj[name] = "Not a valid number"
        } else if (value < 50){
          stateObj[name] = "Your budget must be up to $50"
        }
        break;
      }
      return stateObj;
    })
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        budgetDetails.month &&
          budgetDetails.budget &&
          inputError.budget === ""
      );
    }, 100);
    return () => {
      clearTimeout(identifier);
    };
  }, [budgetDetails, inputError]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const budgetData = {
      month: new Date(budgetDetails.month),
      budget: budgetDetails.budget,
    };

    if (formIsValid){
      navigate('/itemsform')
    }

    props.onSaveBudgetData(budgetData);
  };
  
  return (
    <>
      <FormContainer className="template">
        <FormH1>Add A Budget for Your Shopping List</FormH1>
        <FormElement onSubmit={handleSubmit}>
          <FormInputContainer>
            <FormLabel htmlFor="date">Select a Month</FormLabel>
            <FormInput
              type="month"
              name="month"
              min="2020-01"
              max="2030-12"
              onChange={handleChange}
              // onBlur={validateInput}
              value={budgetDetails.date}
            />
          </FormInputContainer>
          {/* {inputError.username && (
              <FormSpan classname="err">{inputError.username}</FormSpan>
            )} */}

          <FormInputContainer>
            <FormLabel htmlFor="Budget">Input Your Budget</FormLabel>
            <FormInput
              type="number"
              name="budget"
              placeholder="Budget Amount"
              onChange={handleChange}
              onBlur={validateInput}
              value={budgetDetails.budget}
            />
          </FormInputContainer>
          {inputError.budget && (
              <FormSpan classname="err">{inputError.budget}</FormSpan>
            )}

          <FormButtonContainer>
            <Button type="submit" className="butt" onClick={handleSubmit}>
              Create Budget
            </Button>
          </FormButtonContainer>
        </FormElement>
      </FormContainer>
    </>
  );
};

export default BudgetForm;
