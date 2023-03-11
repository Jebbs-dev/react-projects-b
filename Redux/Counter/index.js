import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Auth from './Components/Auth'
import Counter from './Components/Counter'
import Header from './Components/Header'
import UserProfile from './Components/UserProfile'
import './index.css'
import { authActions } from './Store/redux-logic'

const Home = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)


  return (
    <>
      <Header/>
     {isAuthenticated && <UserProfile/>}
     {!isAuthenticated && <Auth/>}
       {/* <Counter/> */}
    </>
  )
}

export default Home