import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, #fdfff0, #f0f2b2);
`;

const Title = styled.h1`
  padding: 0.8rem 2rem;
  font-size: 2rem;
`;

const StartButton = styled.button`
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

const Home = () => {
  return (
    <HomeContainer>
      <Title>포켓몬 도감</Title>
      <Link to={"/dex"}>
        <StartButton>시작하기</StartButton>
      </Link>
    </HomeContainer>
  );
};

export default Home;
