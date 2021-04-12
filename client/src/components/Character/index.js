import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { FeelingChart, AmountChart } from './Chart';

const Character = () => {
  return (
    <div
      style={{
        width: '80vw',
        margin: 'auto',
        padding: '5vw',
        background: '#ced6e0',
        boxSizing: 'border-box',
      }}
    >
      <Grid container>
        <Grid item xs={5}>
          <img
            alt="나문희"
            src="./images/character/1.png"
            style={{ width: '100%' }}
          />
          <h1>나문희</h1>
          <table border={1} style={{ width: '100%', background: '#fff' }}>
            <tr>
              <td>나이</td>
              <td>68세</td>
            </tr>
            <tr>
              <td>직업</td>
              <td>주부</td>
            </tr>
            <tr>
              <td>특징</td>
              <td>윤호, 민호의 할머니</td>
            </tr>
          </table>
          <Paper
            style={{
              margin: '2vh 0',
              padding: '0.5vh 2vw',
              borderRadius: '20px',
            }}
          >
            <p style={{ textAlign: 'left' }}>
              순재집 식모였다가 순재와 결혼했다. 시집살이로 20년 시달리다가 두
              아들 결혼시키고 좀 편하겠다 했더니 큰 며느리는 애들 키워달라며
              시집으로 밀고 들어왔고 둘째 며느리는 갓난쟁이 손주를 남긴 채
              이혼하고 가버렸다. 이순재의 아내, 이준하, 이민용의 어머니,
              박해미의 시어머니, 이민호, 이윤호, 이준의 할머니다. 강유미,
              이민호, 서민정과 함께 작 중 가장 불쌍한 캐릭터 중 하나. 나문희의
              잘못이 있는 부분도 있지만, 며느리에 치이고, 가족들에 구박을 받고
              심지어 이민용, 이준하를 제외하면 가족들이나 객식구들이 무시를
              하기도 때문에 커서보면 상당히 불쌍한 인물로 비춰진다{' '}
            </p>
          </Paper>
          {/* <Paper style={{ padding: '0.5vh 2vw', borderRadius: '20px' }}>
            <h4>명대사</h4>
            <p style={{ textAlign: 'left' }}>
              어우 왜 그래! 왜!! 얘가 끼고 싶어서 끼는 거야? 몸이 안 좋아서 그런
              거지!! 당신은 의사가 환자한테 그렇게 막해도 되는 거야!?
            </p>
            <p style={{ textAlign: 'left' }}>
              그래 다 늙어서 그래! 다 늙어서! 다 늙어서 앞으로 놀 날이 얼마 없을
              거 같아서 사지 멀쩡할때 놀라고 했어! 왜! 내 인생에 봄이 몇번이나
              올 거 같아? 몇 번이나 올지 당신 알아? 나 몰라! 당신이나 나나 언제
              어떻게 될지 아냐고!! 봄바람 갈 날이 얼마 없을 것 같아서 온없이 한
              번 실컷 놀아보고 그러고 싶었어 왜 그래!! 흐흐흑.... 내가 진짜...
            </p>
          </Paper> */}
          <div style={{ marginTop: '3vh', height: '30vh' }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/uBG3iUHFSHA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Grid>

        <Grid item xs={7} style={{ textAlign: 'left', paddingLeft: '3vw' }}>
          <div>
            <h2>사용 단어</h2>
            <img
              style={{ width: '40vw', height: '40vh' }}
              alt="wordcloud-sample"
              src="https://kr.mathworks.com/help/matlab/ref/wordcloud.png"
            />
          </div>
          <div>
            <h2>주요 감정</h2>
            <FeelingChart />
          </div>
          <div>
            <h2>분량 변화</h2>
            <AmountChart />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Character;
