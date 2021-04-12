import React, { useState, useEffect } from 'react';
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
        src={props.data[props.answerCount].imgSrc}
        alt={props.data[props.answerCount].rank}
      />
      <h2>맞은 갯수 : {props.answerCount}/10 개</h2>
      <h2>{props.data[props.answerCount].rank}</h2>
      <p>
        {props.data[props.answerCount].description1} <br />
        {props.data[props.answerCount].description2}
        <br />
        {props.data[props.answerCount].description3}
        <br />
        {props.data[props.answerCount].description4}
        <br />
      </p>
    </ImgContainer>
  );
}

export default OverdoseContents;
