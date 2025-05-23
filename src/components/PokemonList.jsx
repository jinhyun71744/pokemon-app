import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

const PokemonList = ({ pokemon, onAddToDeck }) => {
  return (
    <div>
      <h2>포켓몬 리스트</h2>
      <ListContainer>
        {pokemon.map((p) => {
          return (
            <PokemonCard key={p.id} pokemon={p} onAddToDeck={onAddToDeck} />
          );
        })}
      </ListContainer>
    </div>
  );
};

export default PokemonList;
