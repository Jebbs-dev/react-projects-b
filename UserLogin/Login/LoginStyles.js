import styled from "styled-components";

export const FormContainer = styled.div`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 2rem;
`;

export const Form = styled.form`
  align-items: center;
`;

export const FormInputContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;

  @media (min-width: 768px) {
      align-items: center;
      flex-direction: row;
  }
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
  // background: ${({invalid})=> (invalid ? "#f6dbfc": "transparent")}

  &:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }

  &: invalid {
    border-color: red;
    background: #fbdada;
  }
`;

export const Button = styled.button`
  text-align: center;
  
  font: inherit;
  border: 1px solid #4f005f;
  background: #4f005f;
  color: white;
  padding: 0.3rem 1.5rem;
  cursor: pointer;
  font-size: 1.1rem;
  border-radius: 10px;

&: hover,
&: active {
  background: #741188;
  border-color: #741188;
}

&: focus {
  outline: none;
}

&:disabled,
&:focus &:disabled,
&:hover &:disabled,
&:active &:disabled {
  background: #ccc;
  border-color: #ccc;
  color: #666666;
  cursor: not-allowed;
}
`;
