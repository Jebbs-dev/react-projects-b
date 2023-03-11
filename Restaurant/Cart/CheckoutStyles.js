import styled from "styled-components";

export const FormContainer = styled.form`
  margin: 1rem 0;
  height: 10rem;
  overflow: scroll;
`;

export const FormInputContainer = styled.div`
  margin-bottom: 0.5rem;
`;

export const InputLabel = styled.label`
font-weight: bold;
margin-bottom: 0.25rem;
display: block;
color: ${({ invalid }) => (invalid ? "#ca3e51" : "")};
 }
`;

export const FormInput = styled.input`
  font: inherit;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 20rem;
  max-width: 100%;
  border-color: ${({ invalid }) => (invalid ? "#aa0b20" : "#ccc")};
  background-color: ${({ invalid }) => (invalid ? "#ffeff1" : "")};

  &: focus {
    outline: none;
    border-color: ${({ invalid }) => (invalid ? "#ff8800" : "#240370")};
    background-color: ${({ invalid }) => (invalid ? "#fbe8d2" : "#e0d4fd")};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const CancelButton = styled.button`
  font: inherit;
  color: #5a1a01;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 25px;
  padding: 0.5rem 2rem;

  &:hover,
  &:active {
    background-color: #ffe6dc;
  }
`;

export const ConfirmButton = styled.button`
font: inherit;
color: #5a1a01;
cursor: pointer;
background-color: transparent;
border: none;
border-radius: 25px;
padding: 0.5rem 2rem;
border: 1px solid #5a1a01;
  background-color: #5a1a01;
  color: white;

&:hover, &:active {
  background-color: #7a2706;
  `;
