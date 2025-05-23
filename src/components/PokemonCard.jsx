import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  text-align: center;
  min-width: 100px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 12px;

  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`;

const CardImage = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

const CardName = styled.h3`
  margin: 0;
  font-size: 1rem;
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const AddButton = styled.button`
  background-color: red;
  border-radius: 4px;
  color: white;
  border: none;
  padding: 0.3rem 0.6rem;
  font-size: 0.9rem;
  cursor: pointer;

  transition: background-color 0.2s ease;
  &:hover {
    background-color: #b90000;
  }

  @media (max-width: 480px) {
    padding: 0.2rem 0.4rem;
    font-size: 0.8rem;
  }
`;

const PokemonCard = ({ deck, pokemon, onAddToDeck, onDeleteToDeck }) => {
  // console.log(deck);
  console.log(deck);
  return (
    <Card>
      <Link to={`/dex/${pokemon.id}`}>
        <CardImage src={pokemon.img_url} alt={pokemon.korean_name} />
      </Link>
      <CardName>{pokemon.korean_name}</CardName>
      <p>No.{pokemon.id}</p>
      <AddButton onClick={() => onAddToDeck(pokemon)}>추가</AddButton>
    </Card>
  );
};

export default PokemonCard;
