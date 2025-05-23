import React, { useState } from "react";
import DashBoard from "../components/DashBoard";
import POKEMON_DATA from "../data/pokemon";
import styled from "styled-components";

const PageWrapper = styled.div`
  background-color: #e8e89a;
  min-height: 100vh;
`;

const Container = styled.div`
  /* background-color: #e8e89a; */
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: "Segoe UI", sans-serif;
  /* color: #333; */

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const Dex = () => {
  const [deck, setDeck] = useState([]);

  const handleAddToDeck = (pokemon) => {
    if (deck.find((p) => p.id === pokemon.id)) {
      alert(`이미 선택한 포캣몬입니다.`);
      return;
    }

    if (deck.length >= 6) {
      alert(`더 이상 선택할 수 없습니다. `);
      return;
    }

    setDeck([...deck, pokemon]);
  };

  const handleDeleteToDeck = (pokemon) => {
    setDeck(deck.filter((p) => p.id !== pokemon.id));
  };

  return (
    <PageWrapper>
      <Container>
        <DashBoard
          pokemon={POKEMON_DATA}
          deck={deck}
          onAddToDeck={handleAddToDeck}
          onDeleteToDeck={handleDeleteToDeck}
        />
      </Container>
    </PageWrapper>
  );
};

export default Dex;
