import React from 'react'

import { NotisSection, NotisH2, NotisP } from './NotificationStyles'

const Notification = (props) => {
  if(props.status === 'error'){
    document.getElementById('notis').style.backgroundColor = "#690000"
  }
  if(props.status === 'success'){
    document.getElementById('notis').style.backgroundColor = "#1ad1b9"
  }
  

  return (
    <>
      <NotisSection id="notis">
        <NotisH2>{props.title}</NotisH2>
        <NotisP>{props.message}</NotisP>
      </NotisSection>
    </>
  )
}

export default Notification