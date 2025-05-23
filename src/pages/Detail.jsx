import React from "react";
import { Link, useParams } from "react-router-dom";
import POKEMON_DATA from "../data/pokemon";
import styled from "styled-components";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, #fdfff0, #f0f2b2);
`;

const BackButton = styled.button`
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
`;

const Detail = () => {
  const { id } = useParams();
  const pokemon = POKEMON_DATA.find((p) => p.id === Number(id));

  if (!pokemon) return <div>오류 발생: 포켓몬을 찾을 수 없습니다.</div>;
  return (
    <DetailContainer>
      <h2>{pokemon.korean_name}</h2>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <p>타입: {pokemon.types.join(", ")}</p>
      <p>{pokemon.description}</p>
      <Link to="/dex">
        <BackButton>뒤로가기</BackButton>
      </Link>
    </DetailContainer>
  );
};

export default Detail;
