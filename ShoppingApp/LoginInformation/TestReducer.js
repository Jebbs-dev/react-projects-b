import react from "react";

export const emailReducer = (state, action) => {
  // The state signifies the last state

  if (action.type === "INPUT_BLUR") {
    return { value: state.value.trim().length > 0, isValid: state.value.includes("@") };
  }

  return { isComplete: false, isValid: false };
};

export const usernameReducer = (state, action) => {

  if (action.type === "INPUT_BLUR") {
    return { isComplete: state.value.trim().length > 0, isValid: state.value.trim().length > 6 };
  }

  return { isComplete: false, isValid: false };
};

export const passwordReducer = (state, action) => {

  if (action.type === "INPUT_BLUR") {
    return { isComplete: state.value.trim().length > 0, isValid: state.value.trim().length > 6 };
  }

  return { isComplete: false, isValid: false };
};