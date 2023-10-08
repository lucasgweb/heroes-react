import { ReactNode, createContext, useState, useEffect } from "react";
import axios from 'axios';

interface Hero {
  id: number,
  name: string,
  powerstats: {
    intelligence: number,
    strength: number,
    speed: number,
    durability: number,
    power: number,
    combat: number
  },
  images: {
    xs: string,
    sm: string,
    md: string,
    lg: string
  }
}

interface HeroContextType {
  heroes: Hero[];
  favoritesHeroes: Hero[];
  handleFavorite: (id: number) => void;
}

interface HeroesProviderProps {
  children: ReactNode
}
export const HeroesContext = createContext<HeroContextType>({} as HeroContextType);


export function HeroesProvider({ children }: HeroesProviderProps) {

  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [favoritesHeroes, setFavoritesHeroes] = useState<Hero[]>([]);

  async function loadHeroes() {
    try {
      const response = await axios({
        method: "get",
        url: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json",
        responseType: "json",
      });

      setHeroes(response.data);
    } catch (error) {
      console.error("Erro ao carregar heróis:", error);
    }
  }

  async function loadFavoritesHeroes() {

    const localStorageFavoriteHeroes = localStorage.getItem('favoritesHeroes');

   let favoritesHeroes: Hero[] = []

    if (localStorageFavoriteHeroes) {
       favoritesHeroes = JSON.parse(localStorageFavoriteHeroes);

       setFavoritesHeroes(favoritesHeroes);
    } else {
      localStorage.setItem('favoritesHeroes', JSON.stringify(favoritesHeroes));
    }
    
  }

  function handleFavorite(id: number) {
    const hero = heroes.find((hero) => hero.id === id);
  
    setFavoritesHeroes((prevFavorites) => {
      const isFavorite = prevFavorites.find((hero) => hero.id === id);
  
      let updatedFavorites: Hero[] = [];
      if (isFavorite) {
        updatedFavorites = prevFavorites.filter((favorite) => favorite.id !== id);
      } else if (hero) {
        updatedFavorites = [...prevFavorites, hero];
      }
  
      updatedFavorites = updatedFavorites.filter(Boolean);
      
      localStorage.setItem('favoritesHeroes', JSON.stringify(updatedFavorites));
  
      console.log('Favorites:', updatedFavorites);
      return updatedFavorites;
    });
  }
  



 useEffect(() => {
    loadHeroes();
    loadFavoritesHeroes();
  }, [])

  return <HeroesContext.Provider value={{ heroes, favoritesHeroes, handleFavorite }}>
    {children}
  </HeroesContext.Provider>
}