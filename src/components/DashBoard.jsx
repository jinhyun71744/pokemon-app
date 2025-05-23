import React from "react";
import PokemonList from "./PokemonList";
import PokemonCard from "./PokemonCard";
import PokemonDeck from "./PokemonDeck";
import { useDeck } from "../context/DeckContext";

const DashBoard = () => {
  // const { deck, onAddToDeck, onDeleteToDeck } = useDeck();
  // console.log(onAddToDeck);

  return (
    <div>
      <PokemonDeck
      // deck={deck} onDeleteToDeck={onDeleteToDeck}
      />
      <PokemonList
      // onAddToDeck={onAddToDeck}
      />
    </div>
  );
};

export default DashBoard;
