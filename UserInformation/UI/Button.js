import styled from "styled-components";

export const Button = styled.button`
  font: inherit;
  border: 1px solid #192C6B;
  background: #A9B0C8;
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;
  border-radius: 4px;

  :hover, active {
    background: #192C6B;
    border-color: #192C6B;
  }

  : focus{
    outline: none;
  }
`;