import React from "react";
import './index.css'
import SimpleInput from "./Components/SimpleInput";

import { CompCase } from "./Components/BasicFormStyles";
import BasicForm from "./Components/BasicForm";

const Home = () => {
  return (
    <>
      <CompCase>
        <SimpleInput />
        {/* <BasicForm/> */}
      </CompCase>
    </>
  );
};

export default Home;
