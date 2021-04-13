import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { FeelingChart, AmountChart, SampleChart } from './Chart';
import MHwords from './munhee-words-white.png';
import MH from './munhee.png';

const Character = () => {
  return (
    <div
      style={{
        width: '80vw',
        margin: 'auto',
        marginTop: '5vh',
        padding: '5vw',
        boxSizing: 'border-box',
        textAlign: 'center',
        background: '#fff',
        color: '#000',
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <img alt="나문희" src={MH} style={{ width: '50%' }} />
          <h1>나문희</h1>
          <table
            border={2}
            style={{ margin: 'auto', width: '80%', background: '#fff' }}
          >
            <tr>
              <td>나이</td>
              <td>68세</td>
            </tr>
            <tr>
              <td>직업</td>
              <td>주부</td>
            </tr>
            <tr>
              <td>명대사</td>
              <td>
                호! 박! 고! 구! 마! 호박고구마!!! <br />
                호박고구마~!
              </td>
            </tr>
          </table>
        </Grid>
        <Grid item xs={12} style={{ margin: 'auto' }}>
          <div style={{ width: '100%' }}>
            <h2>사용 단어</h2>
            <img alt="wordcloud-sample" src={MHwords} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ width: '30%' }}>
            <h2>주요 감정</h2>
            <FeelingChart />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ width: '30%' }}>
            <h2>분량 변화</h2>
            <AmountChart />
          </div>
        </Grid>
      </Grid>
      <div style={{ margin: 'auto' }}>
        <h2>오분순삭</h2>
        <div style={{ margin: 'auto' }}>
          <iframe
            width="600"
            height="400"
            src="https://www.youtube.com/embed/uBG3iUHFSHA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Character;
