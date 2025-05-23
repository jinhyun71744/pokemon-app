import React from "react";
import PokemonList from "./PokemonList";
import PokemonCard from "./PokemonCard";
import PokemnDeck from "./PokemnDeck";

const DashBoard = ({ pokemon, deck, onAddToDeck, onDeleteToDeck }) => {
  return (
    <div>
      <PokemnDeck deck={deck} />
      <PokemonList
        deck={deck}
        pokemon={pokemon}
        onAddToDeck={onAddToDeck}
        onDeleteToDeck={onDeleteToDeck}
      />
    </div>
  );
};

export default DashBoard;
