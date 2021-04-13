import React from 'react';

import styled from 'styled-components';

const ImgContainer = styled.div`
  overflow: hidden;
  display: block;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
`;

function OverdoseContents(props) {
  return (
    <ImgContainer>
      <img
        src={props.data[Math.round(props.answerCount / 2)].imgSrc}
        alt={props.data[Math.round(props.answerCount / 2)].rank}
      />
      <h2>맞은 갯수 : {props.answerCount}/10 개</h2>
      <h2>{props.data[Math.round(props.answerCount / 2)].rank}</h2>
      <p>
        {props.data[Math.round(props.answerCount / 2)].description[0]} <br />
        {props.data[Math.round(props.answerCount / 2)].description[1]}
        <br />
        {props.data[Math.round(props.answerCount / 2)].description[2]}
        <br />
        {props.data[Math.round(props.answerCount / 2)].description[3]}
        <br />
      </p>
    </ImgContainer>
  );
}

export default OverdoseContents;
