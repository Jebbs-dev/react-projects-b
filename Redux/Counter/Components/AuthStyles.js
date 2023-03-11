import styled from "styled-components";

export const MainWrapper = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 25rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;
`;

export const Section = styled.section``;

export const FormContainer = styled.form``;

export const FormInputContainer = styled.div`
  margin-bottom: 0.5rem;
`;

export const FormInputLabel = styled.label`
  display: block;
  color: #616161;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  display: block;
  width: 20rem;
  margin: auto;
  border-radius: 4px;
  padding: 0.25rem;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: #3c0080;
  border: 1px solid #3c0080;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  margin: 1rem;

  &:hover,
  &:active {
    background-color: #5b14ac;
    border-color: #5b14ac;
  }
`;
