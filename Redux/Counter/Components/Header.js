import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../Store/auth-slice';
// import { Button } from './AuthStyles'
import { ServiceHeader, ServiceH1, ServiceNav, ServiceUl, Li, A, Button} from './HeaderStyles'

const Header = () => {
  const dispatch = useDispatch();
  
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  const authLogoutHandler = () =>{
    dispatch(authActions.logout())
  }

  return (
  <>
    <ServiceHeader>
      <ServiceH1>Redux Auth</ServiceH1>
      <ServiceNav>
        {isAuthenticated && <ServiceUl>
          <Li>
            <A>My Products</A>
          </Li>
          <Li>
            <A>My Sales</A>
          </Li>
          <Li>
            <Button onClick={authLogoutHandler}>Logout</Button>
          </Li>
        </ServiceUl>}
      </ServiceNav>
    </ServiceHeader>
  </>
  )
}

export default Header