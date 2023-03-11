// import React, { useState, useEffect } from "react";
import { CountContain, Button } from "./CoCompStyles";
import useCounter from "../Hooks/useCounter";


const ForwardCounter = () => {
  let counter = useCounter(true);
  let counting = useCounter(false);
  

  return (
    <>
      <CountContain value={counter}/>
      <CountContain value={counting}/>
      {/* <Button onClick={addCount}>+</Button> */}
    </>
  );
};

export default ForwardCounter;
