import { HeartStraight, House  } from "@phosphor-icons/react";

import { Navigation, HeaderContainer, Title, NavList, NavItem, NavLink, TitleLink, Container } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <Container>
            <Title>
                <TitleLink href="/">Heroes</TitleLink>
            </Title>
            <Navigation>
                <NavList>
                <NavItem>
                        <NavLink href="/">
                            Inicio <House weight="fill" />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/favorites">
                            Favoritos <HeartStraight weight="fill" />
                        </NavLink>
                    </NavItem>
                </NavList>
            </Navigation>
            </Container>
        </HeaderContainer>
    )
}