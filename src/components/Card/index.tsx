import { useContext } from "react";
import { CardContainer, CardItem, CardItems, HeroTitleContainer } from "./styles";
import { Star } from "@phosphor-icons/react";
import { HeroesContext } from "../../contexts/HeroesContext";

interface CardProps {
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
    isFavorite?: true | false
}

export function Card({isFavorite = false, ...props}: CardProps) {

    const { handleFavorite } = useContext(HeroesContext);

    return (
        <CardContainer>
            <img src={props.images.sm} alt="" />

            <HeroTitleContainer>
            <h2>{props.name}</h2>
            <Star cursor="pointer" onClick={() => handleFavorite(props.id)}
            size={20} 
            weight="fill" 
            color={isFavorite ? 'yellow' : 'white'}
            /> 
            </HeroTitleContainer>
            <CardItems>
                <CardItem>Inteligencia: {props.powerstats.intelligence}</CardItem>
                <CardItem>Força : {props.powerstats.strength}</CardItem>
                <CardItem>Velocidade: {props.powerstats.speed}</CardItem>
                <CardItem>Vida: {props.powerstats.durability}</CardItem>
                <CardItem>Poder: {props.powerstats.power}</CardItem>
                <CardItem>Combate: {props.powerstats.combat}</CardItem>
            </CardItems>
        </CardContainer>
    )
}