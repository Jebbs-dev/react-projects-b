import styled from "styled-components";

export const MealForm = styled.form`
  text-align: right;  
`;

export const FormInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const FormInputLabel = styled.label`
  font-weight: bold;
  margin-right: 1rem;
`;

export const MealFormInput = styled.input`
  width: 2.5rem;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #ccc;
  font: inherit;
  padding-left: 0.5rem;

`;

export const Button = styled.button`
  font: inherit;
  font-size: 12px;
  cursor: pointer;
  background-color: #103B56;
  border: 1px solid #103B56;
  color: white;
  padding: 0.5rem 2rem;
  border-radius: 22px;
  font-weight: bold;

  &: hover,
  &: active {
    background-color: #001832;
    border-color: #001832;;
  }
`;