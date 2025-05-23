import React from "react";
import PokemonList from "./PokemonList";
import PokemonCard from "./PokemonCard";
import PokemnDeck from "./PokemnDeck";

const DashBoard = ({ pokemon, deck, onAddToDeck, onDeleteToDeck }) => {
  return (
    <div>
      <PokemnDeck deck={deck} onDeleteToDeck={onDeleteToDeck} />
      <PokemonList pokemon={pokemon} onAddToDeck={onAddToDeck} />
    </div>
  );
};

export default DashBoard;
