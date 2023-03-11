import styled from "styled-components";

export const FormContainer = styled.div`
 
  margin: 0px;
  // outline: 1px solid #192C6B;
`;

export const Form = styled.form`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;  
`;

export const FormLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  font: inherit;
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  padding; 0.15rem;
  margin-bottom: 0.5rem;
  border-radius: 3px;

  : focus {
    outline: none;
    border-color: #192C6B;
  }
`;
