import React from "react";
import PokemonList from "./PokemonList";
import PokemonCard from "./PokemonCard";
import PokemonDeck from "./PokemonDeck";

const DashBoard = ({ pokemon, deck, onAddToDeck, onDeleteToDeck }) => {
  return (
    <div>
      <PokemonDeck deck={deck} onDeleteToDeck={onDeleteToDeck} />
      <PokemonList pokemon={pokemon} onAddToDeck={onAddToDeck} />
    </div>
  );
};

export default DashBoard;
