import styled from "styled-components";
import "../index.css"

export const FormContainer = styled.div`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 2rem;
`;

export const FormElement = styled.form``;

export const FormInputContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: stretch;
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
`;

export const FormInput = styled.input`
  display: block;
  flex: 3;
  font: inherit;
  padding: 0.35rem 0.35rem;
  border-radius: 6px;
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

export const FormButtonContainer = styled.div`
  text-align: center;
`;

export const Button = styled.button`

`;
