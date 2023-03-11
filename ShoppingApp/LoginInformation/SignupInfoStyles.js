import styled from "styled-components";
// import {Link}  from 'react-router-dom'

import '../index.css'

export const FormContainer = styled.div`
  width: 60%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 2rem;
  align-items: center;
  justify-content: center;
`;

export const FormH1 = styled.h1`
  color: #4D014D;
  text-align: center;
`;

export const FormElement = styled.form`
  
`;

export const FormInputContainer = styled.div`
  margin: 1rem 0 0 0;
  display: flex;
  // align-items: stretch;
  flex-direction: column;
  

  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row; 
`;

export const FormLabel = styled.label`
  display: block;
  font-weight: bold;
  flex: 1;
  color: #464646;
  margin-bottom: 0.5rem;
  float: left;
`;

export const FormInput = styled.input`
  display: block;
  flex: 3;
  font: inherit;
  padding: 15px;
  width: 100%;
  margin: 10px 0px;
  // padding: 0.35rem 0.35rem;
  border-radius: 5px;
  border: 1px solid #ccc;

  &: focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }

  &: invalid {
    border-color: red;
    background: #fbdada;
  }
`;

export const FormSpan = styled.span`
display: block;
color: red;
font-size: 13px;
margin-left: 136px;
margin-bottom: 15px;
`;

export const FormButtonContainer = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  height: 3.5rem;
  border-radius: 5px;
  border: none;
  background-color: #4f005f;
  color: white;
  padding: 10px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer

`;