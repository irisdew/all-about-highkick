import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { gameNumber, gameDescription, gamePage } from '../../actions';
import Ball from '../../components/Ball';
import bg from './lottobg.jpg';

import SimpleSlider from './GameAll';

export function GameMain({ gameData }) {
  const history = useHistory();
  const dispatch = useDispatch();

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
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          history.push('/game/result');
          const gameResult =
            gameData[Math.floor(Math.random() * gameData.length)];
          dispatch(gameNumber(gameResult.number));
          dispatch(gameDescription(gameResult.description));
        }}
      >
        번호 뽑기
      </Button>
    </Container>
  );
}

export function GameResult({ onClick }) {
  const history = useHistory();
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
      {delay && (
        <>
          <h4>무슨 숫자일까요?</h4>
          <span>잠시 기다리시면 결과가...</span>
        </>
      )}
      {!delay && (
        <>
          <h4>{description}</h4>
          <span>공을 클릭해 하이킥 장면을 확인하세요!</span>
        </>
      )}

      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={onClick}
          style={{ margin: '1rem 0.5rem 0 0.5rem' }}
        >
          다시 뽑기
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push('/game/all')}
          style={{ margin: '1rem 0.5rem 0 0.5rem' }}
        >
          전체 보기
        </Button>
      </div>
    </div>
  );
}

export function GameAll() {
  const images = [...Array(20).keys()].map((i) => {
    return <img alt={`${i + 1}`} src={`/images/game/gacha_${i + 1}.png`} />;
  });

  console.log([...Array(20).keys()]);
  return (
    <div style={{ width: '80vw', margin: 'auto', textAlign: 'center' }}>
      <SimpleSlider />
      <h1>"거 형수님 좀 !!"</h1>
      <h4>
        해맑게 웃으면서 되물어보는게 트레이드 마크죠 ! <br />
        최민용은 형수님을 몇 번 불렀을까요 ?
      </h4>
      <Button variant="contained" color="primary">
        정답 보기
      </Button>
      <h1>170번</h1>
    </div>
  );
}

function Game({ page }) {
  const [gameData, setGameData] = useState([]);
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
  };

  return (
    <>
      {page === 'main' && (
        <GameMain gameData={gameData} onClick={handleClick} />
      )}
      {page === 'result' && (
        <GameResult gameData={gameData} onClick={handleClick} />
      )}
      {page === 'all' && <GameAll />}
    </>
  );
}

export default Game;
