import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { PieChart, AreaChart } from '@toast-ui/react-chart';
import '@toast-ui/chart/dist/toastui-chart.min.css';

const FeelingChart = () => {
  const data = {
    categories: ['Browser'],
    series: [
      {
        name: '행복',
        data: 5,
      },
      {
        name: '슬픔',
        data: 2,
      },
      {
        name: '놀람',
        data: 4,
      },
      {
        name: '화남',
        data: 7,
      },
      {
        name: '평온',
        data: 8,
      },
      {
        name: 'Etc',
        data: 7,
      },
    ],
  };

  const options = {
    chart: {
      width: 600,
      height: 400,
      format: '1,000',
    },
    yAxis: {
      title: 'Month',
    },
    xAxis: {
      title: 'Amount',
      min: 0,
      max: 9000,
      suffix: '$',
    },
    series: {
      showLabel: true,
      selectable: true,
      clockwise: false,
      dataLabels: {
        visible: true,
        anchor: 'outer',
      },
    },
  };

  return (
    <>
      <PieChart data={data} options={options} />
    </>
  );
};

const AmountChart = () => {
  const data = {
    categories: ['June', 'July', 'Aug', 'Sep', 'Oct', 'Nov'],
    series: [
      {
        name: 'Income',
        data: [8000, 1000, 7000, 2000, 5000, 3000],
      },
    ],
  };

  const options = {
    chart: {
      width: 600,
      height: 400,
      // title: 'Monthly Revenue',
      format: '1,000',
    },
    yAxis: {
      title: 'Month',
    },
    xAxis: {
      title: 'Amount',
      min: 0,
      max: 9000,
      suffix: '$',
    },
    series: {
      showLabel: true,
    },
    legend: {
      visible: false,
      showCheckbox: false,
    },
  };

  return (
    <>
      <AreaChart data={data} options={options} />
    </>
  );
};

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
              display: 'block',
              //   paddingBottom: '56.25%',
              //   overflow: 'hidden',
            }}
          >
            <iframe
              width="100%"
              height="250px"
              src="https://www.youtube.com/embed/LSkzkePLuCM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div style={{ display: 'block' }}>
            <h2>사용 단어</h2>
            <img
              width="80%"
              alt="wordcloud-sample"
              src="https://kr.mathworks.com/help/matlab/ref/wordcloud.png"
            />
          </div>
          <div style={{ display: 'block' }}>
            <h2>주요 감정</h2>
            <FeelingChart />
          </div>
          <div style={{ display: 'block' }}>
            <h2>분량 변화</h2>
            <AmountChart />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Character;
