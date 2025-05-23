import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import POKEMON_DATA from "../data/pokemon";
import { addToDeck } from "../redux/slices/deckSlice";
import { useDispatch } from "react-redux";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

const PokemonList = () => {
  const disfatch = useDispatch();

  const handleAdd = (pokemon) => {
    disfatch(addToDeck(pokemon));
  };

  return (
    <div>
      <h2>포켓몬 리스트</h2>
      <ListContainer>
        {POKEMON_DATA.map((p) => {
          return <PokemonCard key={p.id} pokemon={p} addToDeck={handleAdd} />;
        })}
      </ListContainer>
    </div>
  );
};

export default PokemonList;
