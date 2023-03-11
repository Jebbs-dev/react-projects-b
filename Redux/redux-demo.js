const redux = require('redux');
// import { legacy_createStore as createStore } from 'redux';

const countReducer =(state = {counter: 0}, action)=>{
  if(action.type === 'increment'){
    return{
      counter: state.counter + 1
      // state here refers to the existing state of the counter which means we're adding one to the previous counter state to give us a new counter value
    }
  } 
  if(action.type === 'decrement'){
    return{
      counter: state.counter - 1
    }
  }
  return state;
}

const store = redux.createStore(countReducer);
// createStore wants a pointer at a reducer function as a parameter

const countSubscriber = () =>{
  const latestState = store.getState()
  console.log(latestState)
  // This gives us the latest state snapshot after it was updated
} 

store.subscribe(countSubscriber)

store.dispatch({type: 'increment'})
store.dispatch({type: 'decrement'})