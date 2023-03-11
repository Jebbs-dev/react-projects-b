import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const InputCase = styled.input`
  font:inherit;
  padding: 0.25rem;
  border: none;
  border-bottom: 3px solid #ccc;
  flex: 1;
  margin-right: 2rem;

  &: focus {
    outline: none;
    border-color: #7a0144;
  }
`;

export const Button = styled.button`

`;