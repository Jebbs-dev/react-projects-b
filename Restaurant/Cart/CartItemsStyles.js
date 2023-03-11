import styled from "styled-components";

export const ItemsLi = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 2px solid #001832;
padding: 0.5rem 0;
margin: 0.5rem 0;
`;

export const DetailsContainer = styled.div`

`;

export const DetailsH2 = styled.h2`
margin: 0 0 0.5rem 0;
  color: #363636;
`;

export const SummaryContainer = styled.div`
width: 10rem;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const PriceSpan = styled.span`
font-weight: bold;
color: #001832;
`;

export const AmountSpan = styled.span`
font-weight: bold;
border: 1px solid #ccc;
padding: 0.25rem 0.75rem;
border-radius: 6px;
color: #363636;
`;

export const ActionsContainer = styled.div`
display: flex;
flex-direction: column;

@media (min-width: 768px) {
    flex-direction: row;
}

`;

export const RemoveButton = styled.button`
font: inherit;
font-weight: bold;
font-size: 1rem;
color: #001832;
border: 1px solid #001832;
width: 3rem;
text-align: center;
border-radius: 6px;
background-color: transparent;
cursor: pointer;
margin-left: 1rem;
margin: 0.25rem;

&: hover,
&: active {
  background-color: #001832;
  color: white;
}
`;

export const AddButton = styled.button`
font: inherit;
font-weight: bold;
font-size: 1rem;
color: #001832;
border: 1px solid #001832;
width: 3rem;
text-align: center;
border-radius: 6px;
background-color: transparent;
cursor: pointer;
margin-left: 1rem;
margin: 0.25rem;

&: hover,
&: active {
  background-color: #001832;
  color: white;
}
`;