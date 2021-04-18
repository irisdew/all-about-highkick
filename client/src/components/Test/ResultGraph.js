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
const BottomSectorTitle = styled.h1`
  color: black;
`;
const BottomGraphDiv = styled.div`
  display: block;
  justify-content: center;
`;

function ResultGraph(props) {
  const userName = useSelector((state) => state.test.name);

  var total =
    props.userCharacterInfo['기쁨'] +
    props.userCharacterInfo['슬픔'] +
    props.userCharacterInfo['분노'];
  var happy = Math.round((props.userCharacterInfo['기쁨'] / total) * 100);
  var sadness = Math.round((props.userCharacterInfo['슬픔'] / total) * 100);
  var angry = Math.round((props.userCharacterInfo['분노'] / total) * 100);

  const data = {
    categories: ['기쁨', '슬픔', '분노'],
    series: [
      {
        name: `${userName}님`,
        data: [happy, sadness, angry],
      },
      {
        name: props.characterName,
        data: [
          props.characterEmotion['기쁨'],
          props.characterEmotion['슬픔'],
          props.characterEmotion['분노'],
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
        text: '백분율',
      },
      min: 0,
      max: 10,
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
        <ColumnChart data={data} options={options} />
      </BottomGraphDiv>
    </BottomSectorContainer>
  );
}

export default ResultGraph;
