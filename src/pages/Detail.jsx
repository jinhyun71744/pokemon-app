import React from "react";
import { Link, useParams } from "react-router-dom";
import POKEMON_DATA from "../data/pokemon";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToDeck, deleteFromDeck } from "../redux/slices/deckSlice";
import { toast } from "react-toastify";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, #fdfff0, #f0f2b2);
`;

const DetailButton = styled.button`
  background-color: red;
  border-radius: 4px;
  color: white;
  border: none;
  padding: 0.3rem 0.6rem;
  font-size: 0.9rem;
  cursor: pointer;

  transition: background-color 0.2s ease;
  &:hover {
    background-color: #b90000;
  }

  margin: 0.2rem;
`;

const Detail = () => {
  const { id } = useParams();
  const pokemon = POKEMON_DATA.find((p) => p.id === Number(id));

  const deck = useSelector((state) => state.deck.deck);
  const disfatch = useDispatch();

  const isInDeck = deck.some((p) => p.id === pokemon.id);
  const name = isInDeck ? "삭제" : "추가";
  const handleClick = () => {
    if (isInDeck) {
      disfatch(deleteFromDeck(pokemon));
    } else {
      if (deck.length >= 6) {
        toast.error(`더 이상 선택할 수 없습니다. `);
        return;
      }

      disfatch(addToDeck(pokemon));
    }
  };

  if (!pokemon) return <div>오류 발생: 포켓몬을 찾을 수 없습니다.</div>;
  return (
    <DetailContainer>
      <h2>{pokemon.korean_name}</h2>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <p>타입: {pokemon.types.join(", ")}</p>
      <p>{pokemon.description}</p>

      <div>
        <Link to="/dex">
          <DetailButton onClick={handleClick}>{name}</DetailButton>
          <DetailButton>뒤로가기</DetailButton>
        </Link>
      </div>
    </DetailContainer>
  );
};

export default Detail;
