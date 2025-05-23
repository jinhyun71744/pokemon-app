import React, { useState } from "react";
import DashBoard from "../components/DashBoard";
import POKEMON_DATA from "../data/pokemon";
import styled from "styled-components";

const PageWrapper = styled.div`
  background-color: #f0f2b2;
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
    if (deck.length >= 6) {
      alert(`6마리만 선택 가능`);
      return;
    }

    if (deck.find((p) => p.id === pokemon.id)) {
      alert(`이미 댁에 있는 카드입니다.`);
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
