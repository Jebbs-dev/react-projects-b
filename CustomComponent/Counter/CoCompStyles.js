import styled from "styled-components";

export const CountContain = styled.input`
  max-width: 40rem;
  margin: 3rem auto;
  margin-left: 10rem;
  background-color: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
`

export const Button = styled.button`
  font: inherit;
  font-weight: bold;
  font-size: 1.25rem;
  color: #001832;
  // justify-content: space-around;
  border: 1px solid #001832;
  width: 3rem;
  text-align: center;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  margin-left: 10rem;
  margin: 3rem;
  // align-items: center;

  &: hover,
  &: active {
    background-color: #001832;
    color: white;
  }
`
