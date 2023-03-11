import React, { useEffect, useState } from "react";
import {
  FormContainer,
  FormH1,
  FormElement,
  FormInputContainer,
  FormLabel,
  FormInput,
  FormButtonContainer,
  Button,
  FormSpan,
} from "../LoginInformation/SignupInfoStyles";

const allItems = {
  price: "",
  quantity: "",
  total: "",
  errorMessages: {
    price: "",
    quantity: "",
    total: "",
  },
};

const ItemsForm = (props) => {
  // {new Date(user.date).toDateString()}
  // const checkMonth =
  //   props.users && props.users.filter((element) => element != null);
  // console.log(checkMonth);

  const [itemsDetails, setItemsDetails] = useState(allItems);
  const [itemError, setItemError] = useState(allItems.errorMessages);
  const [formIsValid, setFormIsValid] = useState(false);

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setItemsDetails((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const validateInput = (event) => {
    const { name, value } = event.target;
    const regex = /[^\d\.]/;
    setItemError((prevState) => {
      const stateObj = { ...prevState, [name]: "" };
      switch (name) {
        case "price":
          if (!value) {
            stateObj[name] = "A price is required for the item bought";
          } else if (regex.test(value)) {
            stateObj[name] = "Not a valid number or amount";
          }
          break;

        case "quantity":
          if (!value) {
            stateObj[name] = "You must give the quantity of items bought";
          } else if (regex.test(value)) {
            stateObj[name] = "Not a valid number";
          }
          break;
      }
      return stateObj;
    });
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        itemsDetails.price &&
          itemsDetails.quantity &&
          itemsDetails.total &&
          itemError.price === "" &&
          itemError.quantity === ""
      );
    }, 100);
    return ()=>{
      clearTimeout(identifier)
    }
  }, [itemsDetails, itemError]);

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const itemsData = {
      price: itemsDetails.price,
      quantity: itemsDetails.quantity,
      total: itemsDetails.price * itemsDetails.quantity
    }

    props.onSaveItemsData(itemsData)
  };

  return (
    <>
      {props.users &&
        props.users.map((user) => (
          <>
            <h1 style={{marginLeft: "20px"}} key={user.id} >
              Budget for the Month of{" "}
              {new Date(user.month).toLocaleString("en-us", {
                month: "long",
                year: "numeric",
              })}{" "}
              is ${user.budget}
            </h1>
          </>
        ))}

      <h2 style={{marginLeft: "20px"}}>Create Your Shopping List Here</h2>
      <FormContainer className="template">
        <FormH1>Shopping List Items</FormH1>
        <FormElement onSubmit={handleSubmit}>
          <FormInputContainer>
            <FormLabel htmlFor="date">Price of Item</FormLabel>
            <FormInput
              type="number"
              name="price"
              placeholder="Item Price"
              onChange={handleChange}
              onBlur={validateInput}
              value={itemsDetails.price}
            />
          </FormInputContainer>
          {itemError.price && (
              <FormSpan classname="err">{itemError.price}</FormSpan>
            )}

          <FormInputContainer>
            <FormLabel htmlFor="Budget">Quantity of Item</FormLabel>
            <FormInput
              type="number"
              name="quantity"
              placeholder="Item Quantity"
              onChange={handleChange}
              onBlur={validateInput}
              value={itemsDetails.quantity}
            />
          </FormInputContainer>
          {itemError.quantity && (
              <FormSpan classname="err">{itemError.quantity}</FormSpan>
            )}

          <FormInputContainer>
            <FormLabel htmlFor="Budget">Total Amount</FormLabel>
            <FormInput
              type="number"
              name="total"
              disabled
              placeholder="Total Amount"
              onChange={handleChange}
              onBlur={validateInput}
              value={itemsDetails.price*itemsDetails.quantity}
            />
          </FormInputContainer>
          {/* {inputError.budget && (
              <FormSpan classname="err">{inputError.budget}</FormSpan>
            )} */}

          <FormButtonContainer>
            <Button type="submit" className="butt" onClick={handleSubmit}>
              Add to List
            </Button>
          </FormButtonContainer>
        </FormElement>
      </FormContainer>
    </>
  );
};

export default ItemsForm;
