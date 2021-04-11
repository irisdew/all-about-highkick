import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { gameNumber, gameDescription, gamePage } from '../../actions';
import Ball from '../../components/Ball';
import bg from './lottobg.jpg';

const gameData = [
  {
    number: '14',
    description: '순재가 노트북에 <얏옹~>을 외친 횟수는 14번 입니다.',
  },
  { number: '234', description: '해미가 <오케이~>를 외친 횟수는 234번 입니다' },
  { number: '343', description: '순재가 <이 자식>을 외친 횟수는 343번 입니다' },
  {
    number: '364',
    description: '홍순창 교감이 <굿~>을 외친 횟수는 364번 입니다',
  },
  {
    number: '10',
    description: '이순재가 유미를 <수미>로 잘못 부른 횟수는 10번 입니다',
  },
  {
    number: '170',
    description: '이순재가 나문희를 <할망구>라고 부른 횟수는 170번 입니다',
  },
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function GameMain() {
  const dispatch = useDispatch();

  const handleClick = () => {
    const gameResult = gameData[getRandomInt(0, gameData.length)];
    dispatch(gameNumber(gameResult.number));
    dispatch(gameDescription(gameResult.description));
    dispatch(gamePage(1));
  };

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
      <Button variant="contained" color="primary" onClick={handleClick}>
        번호 뽑기
      </Button>
    </Container>
  );
}

function GameResult() {
  const description = useSelector((state) => state.game.description);
  const dispatch = useDispatch();

  const [delay, setDelay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDelay(false);
    }, 3000);
  }, [description]);

  const handleClick = () => {
    const gameResult = gameData[getRandomInt(0, gameData.length)];
    dispatch(gameNumber(gameResult.number));
    dispatch(gameDescription(gameResult.description));
  };

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
        onClick={handleClick}
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
  const pageNum = useSelector((state) => state.game.page);

  return (
    <>
      {pageNum === 0 && <GameMain />}
      {pageNum === 1 && <GameResult />}
      <GameWhole />
    </>
  );
}

export default Game;
