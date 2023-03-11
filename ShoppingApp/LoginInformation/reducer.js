import React from "react";

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;


export const emailReducer = (state, action) => {
  // if (action.type === "USER_INPUT") {
  //   return { value: action.val, isValid: regex.test(action.val)};
  // }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: regex.test(state.val)};
  }

  return { value: "", isValid: false };
};

export const usernameReducer = (state, action) => {
  // if (action.type === "USER_INPUT") {
  //   return { value: action.val, isValid: action.val.trim().length > 6 };
  // }
  
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return { value: "", isValid: false };

};

export const passwordReducer = (state, action) => {
  // if (action.type === "USER_INPUT") {
  //   return { value: action.val, isValid: action.val.trim().length > 6 && action.val.trim().length < 10 };
  // }
  
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 && action.val.trim().length < 10 };
  }

  return { value: "", isValid: false };

};

export const confirmPasswordReducer = (state, action) => {
  // if (action.type === "USER_INPUT") {
  //   return { value: action.val, isValid: action.val.trim().length > 6 };
  // }
  
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return { value: "", isValid: false };

};
