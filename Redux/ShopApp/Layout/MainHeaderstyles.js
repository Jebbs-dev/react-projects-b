import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #252424;
`;

export const HeaderH1 = styled.h1`
  color: white;
`;

export const Nav = styled.nav``;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li``;

export const Button = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  background-color: transparent;
  border-color: #1ad1b9;
  color: #1ad1b9;

  &:hover,
  &:active {
    color: white;
  }
`;

export const CartSpan = styled.span`
  margin: 0 0.5rem;
`;

export const BadgeSpan = styled.span`
  margin: 0 0.5rem;
  background-color: #1ad1b9;
  border-radius: 30px;
  padding: 0.15rem 1.25rem;
  color: #1d1d1d;
`;
