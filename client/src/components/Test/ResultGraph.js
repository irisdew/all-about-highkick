import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ColumnChart } from '@toast-ui/react-chart';
import '@toast-ui/chart/dist/toastui-chart.min.css';

const BottomSectorContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
`;
const BottomSectorTitle = styled.h1``;
const BottomGraphDiv = styled.div`
  display: block;
  justify-content: center;
`;
function ResultGraph(props) {
  const userName = useSelector((state) => state.test.name);
  const data = {
    categories: ['기쁨', '슬픔', '화남'],
    series: [
      {
        name: `${userName}님`,
        data: [
          props.userCharacterInfo['기쁨'],
          props.userCharacterInfo['슬픔'],
          props.userCharacterInfo['화남'],
        ],
      },
      {
        name: props.characterName,
        data: [
          props.characterEmotion[0],
          props.characterEmotion[1],
          props.characterEmotion[2],
        ],
      },
    ],
  };
  const options = {
    theme: {
      series: {
        colors: ['#EDAE49', '#D1495B'],
      },
    },
    tooltip: {
      transition: 'transform 0.5s ease-in',
    },
    chart: {
      width: 600,
      height: 400,
      animation: {
        duration: 300,
      },
    },
    yAxis: {
      title: {
        text: '측정 수',
      },
      min: 0,
      max: 5,
    },
    xAxis: {
      title: {
        text: '3대 감정',
      },
      min: 0,
      max: 10,
      suffix: '$',
    },
    series: {
      eventDetectType: 'grouped',
      showLabel: true,
      selectable: true,
      dataLabels: {
        visible: true,
        anchor: 'outer',
      },
    },
    legend: {
      align: 'bottom',
      visible: true,
      showCheckbox: true,
    },
  };

  return (
    <BottomSectorContainer>
      <BottomSectorTitle>3대 감정 측정결과</BottomSectorTitle>
      <BottomGraphDiv>
        {/* <PieChart data={data} options={options} /> */}
        <ColumnChart data={data} options={options} />
      </BottomGraphDiv>
    </BottomSectorContainer>
  );
}

export default ResultGraph;
