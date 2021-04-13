import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { gameNumber, gameDescription, gamePage } from '../../actions';
import Ball from '../../components/Ball';
import bg from './lottobg.jpg';

function GameMain({ onClick }) {
  const Container = styled.div`
    display: flex;
    width: 90vw;
    height: 90vh;
    margin: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url(${bg});
    object-fit: cover;
    padding: 0 10px;
  `;

  return (
    <Container>
      <h1 style={{ color: '#fff' }}>추억의 뽑기게임</h1>
      <Button variant="contained" color="primary" onClick={onClick}>
        번호 뽑기
      </Button>
    </Container>
  );
}

function GameResult({ onClick }) {
  const description = useSelector((state) => state.game.description);
  const [delay, setDelay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDelay(false);
    }, 3000);
  }, [description]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <Ball />
      {delay && <h4>무슨 숫자일까요?</h4>}
      {!delay && <h4>{description}</h4>}
      <Button
        variant="contained"
        color="primary"
        onClick={onClick}
        style={{ marginTop: '1rem' }}
      >
        다시 뽑기
      </Button>
    </div>
  );
}

function GameWhole() {
  return <></>;
}

function Game() {
  const [gameData, setGameData] = useState([]);
  const pageNum = useSelector((state) => state.game.page);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3000/data/game.json')
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        setGameData(response.data);
      });
  }, []);

  const handleClick = () => {
    const gameResult = gameData[Math.floor(Math.random() * gameData.length)];
    dispatch(gameNumber(gameResult.number));
    dispatch(gameDescription(gameResult.description));
    dispatch(gamePage(1));
  };

  return (
    <>
      {pageNum === 0 && <GameMain onClick={handleClick} />}
      {pageNum === 1 && (
        <GameResult gameData={gameData} onClick={handleClick} />
      )}
      <GameWhole />
    </>
  );
}

export default Game;
