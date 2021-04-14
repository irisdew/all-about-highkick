import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { gameNumber, gameDescription, gamePage } from '../../actions';

import GameMain from './GameMain';
import GameResult from './GameResult';
import GameAll from './GameAll';

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
