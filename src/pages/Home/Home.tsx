import { Card } from "../../components/Card";
import { SearchInput } from "../../components/SearchInput";
import { HeroesContext } from "../../contexts/HeroesContext";
import { Pagination, PaginationButton } from "./styles";
import { HeroesCards, HomeContainer, PageTitle } from "./styles";
import { useContext, useState } from "react";

export function Home() {
    const { heroes, favoritesHeroes } = useContext(HeroesContext);
    const itemsPerPage = 15;

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(''); {/* Adicionado o estado para o termo de busca */ }

    const indexOfLastHero = currentPage * itemsPerPage;
    const indexOfFirstHero = indexOfLastHero - itemsPerPage;

    const filteredHeroes = heroes.filter(hero =>
        hero.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentHeroes = filteredHeroes.slice(indexOfFirstHero, indexOfLastHero);

    return (
        <HomeContainer>
            <PageTitle>Inicio</PageTitle>
            <SearchInput
                searchTerm={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            <HeroesCards>
                {currentHeroes.map((hero) => (
                    <Card
                        id={hero.id}
                        isFavorite={favoritesHeroes.some((favorite) => favorite.id === hero.id)}
                        name={hero.name}
                        images={hero.images}
                        powerstats={hero.powerstats}
                        key={hero.id}
                    />
                ))}
            </HeroesCards>
            <Pagination>
                <PaginationButton
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Página Anterior
                </PaginationButton>
                <PaginationButton
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={indexOfLastHero >= filteredHeroes.length}
                >
                    Próxima Página
                </PaginationButton>
            </Pagination>
        </HomeContainer>
    )
}
