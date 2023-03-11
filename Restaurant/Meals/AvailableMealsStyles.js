import styled, { keyframes } from "styled-components";

export const MealsSection = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;
`;

export const MealsUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  @keyframes meals-appear {
    from {
      opacity: 0;
      transform: translateY(3rem)
    }
`;


  // 

// }

export const MealsListWrapper = styled.div`
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: #f0f0f0;
`


export const MealsList = styled.li`

`;