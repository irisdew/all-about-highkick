import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { gameNumber, gameDescription, gameBall } from '../../actions';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export default function GameMain() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [gameData, setGameData] = useState([]);

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
    dispatch(gameBall(gameResult));
  };

  const Container = styled.div`
    display: flex;
    width: 90vw;
    height: 90vh;
    margin: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url(/images/lottobg.jpg);
    object-fit: cover;
    padding: 0 10px;
  `;

  return (
    <Container>
      <h1 style={{ color: '#fff' }}>추억의 뽑기게임</h1>
      <h4 style={{ color: '#fff', marginTop: '0' }}>
        당신의 하이킥 추억을 뽑아보세요!
      </h4>

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          history.push('/game/result');
          // 백엔드 API에서 랜덤으로 데이터 1개 받아옴
          handleClick();
        }}
      >
        번호 뽑기
      </Button>
    </Container>
  );
}
