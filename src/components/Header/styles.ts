import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 20px;
  padding: 10px;
  align-items: center;
  background-color: ${(props) => props.theme['gray-800']};
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`;

export const HeaderContainer = styled.header`
  padding: 10px;
  max-width: 80vw;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const TitleLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.white};
`;

export const Navigation = styled.nav`
  color: ${(props) => props.theme.white};
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const NavItem = styled.li`
  font-weight: 500;
  cursor: pointer;
`;

export const NavLink = styled.a`
  text-decoration: none;
  align-items: center;
  display: flex;
  gap: 3px;
  color: ${(props) => props.theme.white};
`;
