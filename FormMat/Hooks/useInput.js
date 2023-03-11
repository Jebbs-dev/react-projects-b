import { useReducer, useState } from "react";

// const initialInputState ={
//     value: '',
//     isTouched: false,
//     // validate: null
// }

// const initialErrorState = {
//   value: '',
//   valid: false
// }

// const inputStateReducer = (state, action) => {

//   if(action.type === 'INPUT'){
//     return {value: action.value, isTouched: state.isTouched}
//   }
//   if(action.type === 'BLUR'){
//     return {isTouched: true, value: state.value}
//   }
//   if(action.type === 'RESET'){
//     return {isTouched: false, value: ''}
//   }
//   return inputStateReducer
// };

// const errorStateReducer = (state, action)=>{
//   if(action.type === 'INPUT'){
//     return {
//       value: action.value,
//       valid: state.valid
//     }
//   }
//   if(action.type === 'BLUR'){
//     return{
//       value: state.value.trim() !== 0,

//     }
//   }
// }

const useInput = (validateValue) => {
  // const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)

  // const [errorState, dispatchError] = useReducer(errorStateReducer, initialErrorState)

  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  // const [error, setError] = useState({
  //   errorValue: ""
  // });

  // const valueIsValid = validateValue(inputState.value)
  // const hasError = !valueIsValid && inputState.isTouched;

  

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;


  const valueChangeHandler = (event) => {
    // dispatch({
    //   type: 'INPUT',
    //   value: event.target.value
    // })
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
    // let { name, value } = event.target;
    
    
    // setError((prevState) => {
    //   const stateObj = { ...prevState, [name]: "" };
    //   return stateObj
    // })

    // setErroMessage((prevState) => {
    //   const stateObj = { ...prevState, [name]: "" };
    //   switch (name) {
    //     case "email":
    //       if (!value) {
    //         stateObj[name] = "Email is required!";
    //       } else if (!regex.test(value)) {
    //         stateObj[name] = "Please enter a valid email format!";
    //       }
    //       break;

    //     case "firstName":
    //       if (!value) {
    //         stateObj[name] = "First Name is required!";
    //       } else if (value.length < 2) {
    //         stateObj[name] = "First Name must be more than 1 character!";
    //       }
    //       break;

    //       case "lastName":
    //       if (!value) {
    //         stateObj[name] = "Last Name is required!";
    //       } else if (value.length < 2) {
    //         stateObj[name] = "Second Name must be more than 1 character!";
    //       }
    //       break;
    //     }
    //     return stateObj;
    // });
    // dispatch({
    //   type: 'BLUR'
    // })
  };

  const inputReset = () => {
    // dispatch({
    //   type: 'RESET',
    // })
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    // value: inputState.value,
    isValid: valueIsValid,
    hasError,
    // error,
    valueChangeHandler,
    inputBlurHandler,
    inputReset,
  };
};

export default useInput;
