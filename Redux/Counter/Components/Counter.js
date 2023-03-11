import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../Store/counter-slice'
// useSelector allows to automatically select a part of the state managed by the store
import { Button } from './AuthStyles'
import { CountWrapper, CountH1, CounterCase, ButtonContainer, CounterButton} from './CounterStyles'



const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const toggler = useSelector(state => state.counter.showCounter)

  const incrementHandler = () =>{
    // dispatch({type: 'increment'})
    dispatch(counterActions.increment())
  }

  const increaseHandler = () =>{
    // dispatch({type: 'increase', amount: 5})
    dispatch(counterActions.increase(10))
  }
  const decrementHandler = () =>{
    // dispatch({type: 'decrement'})
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () =>{
    // dispatch({type: 'toggle'})
    dispatch(counterActions.toggleCounter())
  }

  return (
    <>
      <CountWrapper>
        <CountH1>Redux Counter</CountH1>
        {toggler && <CounterCase>{counter}</CounterCase>}
        <ButtonContainer>
          <Button onClick={incrementHandler}>Increment</Button>
          <Button onClick={increaseHandler}>Increase by 10</Button>
          <Button onClick={decrementHandler}>Decrement</Button>
        </ButtonContainer>
        <Button onClick={toggleCounterHandler}>Toggle Counter</Button>
      </CountWrapper>
    </>
  )
}

export default Counter