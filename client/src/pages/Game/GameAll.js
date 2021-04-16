import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Carousel from '../../components/Carousel';
import Button from '@material-ui/core/Button';

export default function GameAll() {
  const [show, setShow] = useState(false);
  const selected = useSelector((state) => state.game.selected);
  const [click, setClick] = useState(false);

  function clickHandler() {
    setClick(true);
  }

  return (
    <div style={{ width: '80vw', margin: 'auto', textAlign: 'center' }}>
      <Carousel onClick={clickHandler} />

      {!click && (
        <div
          style={{
            width: '80%',
            height: '25vh',
            margin: 'auto',
            padding: 'auto',
            border: 'solid 0.2rem black',
            borderRadius: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h2>사진을 클릭해 하이킥 추억을 꺼내보세요!</h2>
          <h4>
            거침없이 하이킥의 명장면을 살펴보고 <br />
            데이터 분석으로 도출된 하이킥의 재밌는 사실들을 알아보세요
          </h4>
        </div>
      )}

      {click && (
        <div
          style={{
            width: '80%',
            height: '25vh',
            margin: 'auto',
            padding: 'auto',
            border: 'solid 0.2rem black',
            borderRadius: '1rem',
          }}
        >
          {!show && (
            <>
              <h2>어이구 사람 정말 볼수록 굿굿굿이예요~</h2>
              <p>
                희대의 꼰대 ! 반어법 달인 ! <br />
                인간꽈베기 교감이 사람들에게 외친 '굿'은 몇 번일까요 ?
              </p>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setShow(true);
                }}
              >
                정답 보기
              </Button>
            </>
          )}

          {show && (
            <>
              {/* <h1>{selected.number}번</h1>
          <p>{selected.description}</p> */}
              <h1>364번</h1>
              <p>
                홍순창 교감이 <b>굿~</b>을 외친 횟수는 364번 입니다
              </p>
              <h4>다른 사진도 클릭해보세요!</h4>
            </>
          )}
        </div>
      )}
    </div>
  );
}
