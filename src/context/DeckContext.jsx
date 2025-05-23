import React, { createContext, useContext, useState } from "react";

const DeckContext = createContext();

export const DeckProvider = ({ children }) => {
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
    <DeckContext.Provider
      value={{
        deck,
        onAddToDeck: handleAddToDeck,
        onDeleteToDeck: handleDeleteToDeck,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
};

export const useDeck = () => useContext(DeckContext);
