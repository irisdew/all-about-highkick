import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Carousel from '../../components/Carousel';
import Button from '@material-ui/core/Button';

export default function GameAll() {
  const [show, setShow] = useState(false);
  const selected = useSelector((state) => state.game.selected);

  return (
    <div style={{ width: '80vw', margin: 'auto', textAlign: 'center' }}>
      <Carousel />

      <h1>{selected.quote}</h1>
      {selected.question.map((line) => {
        return <h4>{line}</h4>;
      })}

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setShow(true);
        }}
      >
        정답 보기
      </Button>

      {show && (
        <>
          <h1>{selected.number}번</h1>
          <p>{selected.description}</p>
        </>
      )}
    </div>
  );
}
