import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const DeckContainer = styled.div`
  background-color: #feffec;
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  min-height: 200px;
`;

const DeckGrid = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const DeckCard = styled.div`
  text-align: center;
  img {
    width: 100px;
    height: 100px;
    @media (max-width: 480px) {
      width: 70px;
      height: 70px;
    }
  }
`;

const PokemnDeck = ({ deck }) => {
  return (
    <DeckContainer>
      <h1>포캣몬 댁</h1>
      <DeckGrid>
        {deck.map((p) => {
          return (
            <DeckCard key={p.id}>
              <PokemonCard pokemon={p} />
            </DeckCard>
          );
        })}
      </DeckGrid>
    </DeckContainer>
  );
};

export default PokemnDeck;
