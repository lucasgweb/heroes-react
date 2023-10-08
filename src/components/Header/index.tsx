
import { NavLink } from "react-router-dom";

import { Navigation, HeaderContainer, Title, NavList, NavItem, TitleLink, Container } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <Container>
            <Title>
                <TitleLink>
                    <NavLink style={{textDecoration: 'none', color: 'white' }}  to='/'>Heroes</NavLink></TitleLink>
            </Title>
            <Navigation>
                <NavList>
                <NavItem>
                        <NavLink to="/" style={{textDecoration: 'none', color: 'white', margin: 10 }} >
                            Inicio
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{textDecoration: 'none', color: 'white', margin: 10 }} to="/favorites">
                            Favoritos
                        </NavLink>
                    </NavItem>
                </NavList>
            </Navigation>
            </Container>
        </HeaderContainer>
    )
}