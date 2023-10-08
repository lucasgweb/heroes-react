import styled from "styled-components";

export const HomeContainer = styled.main`
margin-top: 1rem;
width: 80vw;
flex: 1;
display: flex;
padding-top: 30px;
flex-direction: column;
gap: 10px;
margin: 0 auto;
`

export const PageTitle = styled.h2`
color: ${props => props.theme['gray-100']};
`

export const HeroesCards = styled.div`
  width: 100%;
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Cria colunas responsivas com largura mínima de 300px */
  gap: 20px;
  justify-content: start;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: ${props => props.theme['gray-800']};
`;

export const Pagination = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
justify-content: center;
`

export const PaginationButton = styled.button`
background-color: ${props => props.theme['gray-700']};
border: 0;
border-radius: 4px;
padding: 10px;
cursor: pointer;
color: ${props => props.theme['gray-100']};

&:disabled {
  display: none;
}
`