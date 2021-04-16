import React from 'react';
import styled from 'styled-components';

const MiddleSectorTitle = styled.h1`
  color: black;
`;
const MiddleSectorContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
`;
const MiddlesectorEmotionContainer = styled.div`
  display: block;
  margin: 0 2vw;
`;
const MiddleSectorImage = styled.img`
  width: 100px;
`;
const MiddleSectorDescription = styled.p`
  color: black;
`;

// 변해야 할 것 : 매핑되는 감정이미지, 이미지 설명도 매핑시켜 저장해놔야 할듯
function ResultEmotionSector(props) {
  return (
    <>
      <MiddleSectorTitle>대표성격 분석결과</MiddleSectorTitle>
      <MiddleSectorContainer>
        <MiddlesectorEmotionContainer>
          <MiddleSectorImage src="/images/emotionHappy.png" alt={'기쁨'} />
          <MiddleSectorDescription></MiddleSectorDescription>
        </MiddlesectorEmotionContainer>

        <MiddlesectorEmotionContainer>
          <MiddleSectorImage src="/images/emotionSad.png" alt={'슬픔'} />
          <MiddleSectorDescription></MiddleSectorDescription>
        </MiddlesectorEmotionContainer>
        <MiddlesectorEmotionContainer>
          <MiddleSectorImage src="/images/emotionAngry.png" alt={'화남'} />
          <MiddleSectorDescription></MiddleSectorDescription>
        </MiddlesectorEmotionContainer>
      </MiddleSectorContainer>
    </>
  );
}

export default ResultEmotionSector;
