import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

import { counterActions } from "./counter-slice";
import { authActions } from "./auth-slice";



// createSlice prepares a slice of the global state
// reducers is an object or map of all the reducers that the slice needs

// const countReducer = (state = initialState, action) =>{
//   if(action.type === 'increment'){
//     return {
//       // state.counter++; This is very bad behaviour and must absolutely not be done. You must never ever mutate the state, but always return a new state object.
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     }
//   }

//   if(action.type === 'increase'){
//     return{
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     }
//   }

//   if(action.type === 'decrement'){
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     }
//   }

//   if(action.type === 'toggle'){
//     return{
//       counter: state.counter,
//       showCounter: !state.showCounter
//     }
//   }

//   return state
//   }

// const store = createStore(countReducer)

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }
});

export default store;
