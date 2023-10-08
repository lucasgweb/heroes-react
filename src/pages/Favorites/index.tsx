import { Card } from "../../components/Card";
import { SearchInput } from "../../components/SearchInput";
import { HeroesContext } from "../../contexts/HeroesContext";
import { FavoritesContainer, PageTitle, HeroesCards, Pagination, PaginationButton, NoResultsMessage } from "./styles";
import { Heart } from "@phosphor-icons/react";
import { useContext, useState } from "react";

export function Favorites() {
    const { favoritesHeroes } = useContext(HeroesContext);
    const itemsPerPage = 15;

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(''); {/* Adicionado o estado para o termo de busca */ }

    const indexOfLastHero = currentPage * itemsPerPage;
    const indexOfFirstHero = indexOfLastHero - itemsPerPage;

    const filteredHeroes = favoritesHeroes.filter(hero =>
        hero.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentHeroes = filteredHeroes.slice(indexOfFirstHero, indexOfLastHero);

    return (
        <FavoritesContainer>
            <PageTitle>Favoritos <Heart /></PageTitle>
            <SearchInput
                searchTerm={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />

            {currentHeroes.length === 0 && (
                <NoResultsMessage>
                    {favoritesHeroes.length === 0
                        ? "Você não possui favoritos."
                        : "Nenhum resultado encontrado para a busca."}
                </NoResultsMessage>
            )}

            {currentHeroes.length > 0 && (
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
            )}

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
        </FavoritesContainer>
    )
}