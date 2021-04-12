import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
  const overdoseCount = useSelector((state) => state.test.overdoseCount);
  return (
    <ImgContainer>
      <img
        src={props.data[overdoseCount].imgSrc}
        alt={props.data[overdoseCount].rank}
      />
      <h2>맞은 갯수 : {overdoseCount}/10 개</h2>
      <h2>{props.data[overdoseCount].rank}</h2>
      <p>
        {props.data[overdoseCount].description1} <br />
        {props.data[overdoseCount].description2}
        <br />
        {props.data[overdoseCount].description3}
        <br />
        {props.data[overdoseCount].description4}
        <br />
      </p>
    </ImgContainer>
  );
}

export default OverdoseContents;
