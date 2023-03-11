import styled from "styled-components";

export const NavigationNav = styled.nav`

`;

export const NavigationUl = styled.ul`
list-style: none;
margin: 0;
padding: 0;
display: flex;
align-items: center;
`;

export const NavigationList = styled.li`
margin: 0;
margin-left: 2rem;
`;

export const NavigationLink = styled.a`
text-decoration: none;
color: white;

& :hover,
&:active {
  color: #f3cafb;
}
`;

export const Button = styled.button`
font: inherit;
background: #dd0db0;
border: 1px solid #dd0db0;
padding: 0.5rem 1.5rem;
color: white;
cursor: pointer;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
border-radius: 20px;

&: focus {
  outline: none;
}

&: hover,
&: active {
  color: #f3cafb;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.26);
}
`;

