import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const Character = () => {
  return (
    <div
      style={{
        width: '80vw',
        height: 'auto',
        margin: 'auto',
        background: '#dfe6e9',
      }}
    >
      <Grid container spacing={3}>
        {/* <Grid item xs={12}>
          <Paper>xs=12</Paper>
        </Grid> */}
        <Grid item xs={4} style={{ alignItems: 'center' }}>
          {/* <Paper elevation={3}> */}
          <Avatar
            alt="박해미"
            src="./images/Hyemi.jpg"
            style={{ width: '30vh', height: '30vh', margin: 'auto' }}
          />
          <h1>박해미</h1>
          <Paper>
            <p>
              나이: 45세 <br /> 직업: 한의사 <br />
              특징: 윤호, 민호의 엄마
            </p>
          </Paper>
          <Paper>
            <p>
              야무지고 똘똘하고 싶어하는 수퍼우먼 컴플렉스를 가진 여자. 자신이
              능력 있고 존경받는 의사에, 모범적인 결혼생활에 사랑받는 아내며,
              아들들 잘 키우는 똑 부러지는 엄마며, 귀염 받는 며느리라는 확신에
              차있고 대외적으로도 그렇게 인정받아야 직성이 풀린다.
            </p>
          </Paper>
          {/* </Paper> */}
          <div
            style={{
              position: 'relative',
              //   paddingBottom: '56.25%',
              //   overflow: 'hidden',
            }}
          >
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/LSkzkePLuCM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div style={{ height: '30vh' }}>
            <h2>사용 단어</h2>
            <img
              height="70%"
              alt="wordcloud-sample"
              src="https://kr.mathworks.com/help/matlab/ref/wordcloud.png"
            />
          </div>
          <div style={{ height: '30vh' }}>
            <h2>주요 감정</h2>
            <img
              height="70%"
              alt="chart-sample"
              src="https://images.edrawmax.com/images/knowledge/radar-chart-1-what.jpg"
            />
          </div>
          <div style={{ height: '30vh' }}>
            <h2>분량 변화</h2>
            <img
              height="70%"
              alt="chart-sample"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6KrHkgtFax7Q-r6odPn1uZ_wex3i_qIjEcw&usqp=CAU"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Character;
