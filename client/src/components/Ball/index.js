import React from 'react';
import { useSelector } from 'react-redux';
import './ball.css';

const Ball = () => {
  const number = useSelector((state) => state.game.number);

  return (
    <div class="stage">
      <figure class="ball">
        <span class="number" data-number={number}>
          &nbsp;&nbsp;&nbsp;
        </span>
      </figure>
    </div>
  );
};

export default Ball;
