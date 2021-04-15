import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { FeelingChart, AmountChart } from './Chart';

const Character = () => {
  const selectedName = useSelector((state) => state.character.name);
  const [data, setData] = useState([]);

  //selectedName 가지고 백엔드에 캐릭터 전체 정보 요청 후 받아오기
  useEffect(() => {
    fetch('http://localhost:3000/data/character_detail.json')
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        setData(response.data[0]);
      });
  }, []);

  return (
    <div
      style={{
        width: '70vw',
        margin: 'auto',
        marginTop: '5vh',
        padding: '5vw',
        boxSizing: 'border-box',
        textAlign: 'left',
        background: '#fff',
        color: '#000',
        alignItems: 'start',
      }}
    >
      <Grid
        container
        alignItems="flex-start"
        style={{ alignItems: 'start' }}
        spacing={3}
      >
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <img alt={data.name} src={data.photo} style={{ width: '40%' }} />
          <h1>{selectedName}</h1>
          <Chip label={data.age} clickable color="primary" />
          <Chip label={data.job} clickable color="secondary" />
          <Chip label={data.quote} clickable color="default" />
        </Grid>
        <Grid item xs={6}>
          <div>
            <h2>주요 감정</h2>
            <p>기쁨, 슬픔, 분노 감정 분석 결과입니다.</p>
            <FeelingChart data={data.feelingChart} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <h2>회차별 분량 변화</h2>
            <p>한 회차에서 대사량이 가장 많았던 인물은 119회 말했습니다.</p>
            <AmountChart data={data.amountChart} />
          </div>
        </Grid>
        <Grid item xs={6} style={{ margin: 'auto' }}>
          <div style={{ width: '100%' }}>
            <h2>사용 단어</h2>
            <p>인물이 가장 많이 사용한 단어의 워드클라우드입니다.</p>
            <img
              alt={data.name}
              src={data.wordcloud}
              style={{ width: '80%' }}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <h2>오분순삭</h2>
            <p>유튜브에서 하이킥을 즐겨보세요!</p>
            <div
              style={{
                overflow: 'hidden',
                paddingBottom: '56.25%',
                position: 'relative',
                height: '0',
              }}
            >
              <iframe
                style={{
                  left: '0',
                  top: '0',
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                }}
                width="600"
                height="400"
                src={data.youtube}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Character;
