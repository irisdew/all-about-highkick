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

const ScoreDiv = styled.div`
  padding-top: 1vh;
`;
const Score = styled.h1`
  color: black;
  display: inline-block;
  margin: 0 1vw;
  font-size: 7vh;
`;
const ScoreText = styled.h1`
  color: black;
  display: inline-block;
`;
const ContentsDescription = styled.p`
  color: black;
  font-size: 3vh;
  margin-top: 0;
  font-family: 'yangjin';
`;

function OverdoseContents(props) {
  return (
    <ImgContainer>
      <ScoreDiv>
        <ScoreText>점수</ScoreText>
        <Score>{props.answerCount * 10}</Score>
        <ScoreText>점</ScoreText>
      </ScoreDiv>

      <img
        src={props.data[Math.round(props.answerCount / 2)].imgSrc}
        alt={props.data[Math.round(props.answerCount / 2)].rank}
      />
      <ContentsDescription>
        성적표야? 어디보자~
        <br />
        {
          props.data[Math.round(props.answerCount / 2)].description.split(
            '<br />',
          )[0]
        }
        <br />
        {
          props.data[Math.round(props.answerCount / 2)].description.split(
            '<br />',
          )[1]
        }
        <br />
      </ContentsDescription>
    </ImgContainer>
  );
}

export default OverdoseContents;
