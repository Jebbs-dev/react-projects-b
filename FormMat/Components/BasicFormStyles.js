import styled from "styled-components";

export const CompCase = styled.div`
  width: 90%;
  max-width: 43rem;
  padding: 1rem;
  border-radius: 12px;
  background-color: white;
  margin: 3rem auto;
`;

export const FormContainer = styled.form``;

export const FormGroup = styled.div`
  display: flex;
  column-gap: 1rem;
  flex-wrap: wrap;
  min-width: 15rem;
  flex: 1;
`;

export const FormInputContainer = styled.div`
  margin-bottom: 1rem;
  min-width: 15rem;
  flex: 1;
`;

export const FormInputLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  display: block;
  font: inherit;
  background-color: ${({ invalid }) => (invalid ? "#fddddd" : "fff")};
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid  ${({ invalid }) => (invalid ? "#b40e0e" : "#ccc")};  
  width: 20rem;
  max-width: 100%;

  &: focus {
    outline: none;
    border-color: ${({ invalid }) => (invalid ? "#ff8800" : "#240370")} ;
    background-color: ${({ invalid }) => (invalid ? "#fbe8d2" : "#e0d4fd")} ;
  }

`;

export const FormButtonCont = styled.div`
  text-align: right;
`;

export const Button = styled.button`
  font: inherit;
  background-color: #240370;
  color: white;
  border: 1px solid #240370;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 1rem;

  &:hover,
  &:active {
    background-color: #33059e;
    border-color: #33059e;
  }

  &:disabled,
  &:disabled &:hover,
  &:disabled &:active  {
    background-color: #ccc;
    color: #292929;
    border-color: #ccc;
    cursor: not-allowed;
  }
`;

export const FormP = styled.p`
  color: #b40e0e;
`;
