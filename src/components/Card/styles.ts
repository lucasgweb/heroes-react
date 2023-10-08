import styled from "styled-components";

export const CardContainer = styled.div`
background-color: ${props => props.theme['gray-700']};
color: ${props => props.theme['gray-100']};
padding: 25px;
display: flex;
flex-direction: column;
border-radius: 7px;
margin-bottom: 20px;

`

export const HeroTitleContainer = styled.div`
margin-top: 10px;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
align-items: center;
margin-bottom: 10px;
`

export const CardItems = styled.ul`
list-style-type: none;
`
export const CardItem = styled.li`
padding: 3px;
`
