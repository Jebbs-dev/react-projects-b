import React from 'react'
import Navigation from './Navigation'

const Mainheader = (props) => {
  return (
    <>
      <Header>
        <HeaderHeading>A Typical Page</HeaderHeading>
        <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
      </Header>
    </>
  )
}

export default Mainheader