import React from 'react';
import styled from 'styled-components';

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
const MiddleSectorTitle = styled.h1`
  color: black;
`;
const MiddleMateSectorImage = styled.img``;
const MiddleMateSectorName = styled.p`
  color: black;
`;
function ResultMate() {
  return (
    <>
      <MiddleSectorContainer>
        <MiddlesectorEmotionContainer>
          <MiddleSectorTitle>찰떡 궁합</MiddleSectorTitle>
          <MiddleMateSectorImage src="/images/Hyemi.jpg" alt={'박혜미'} />
          <MiddleMateSectorName>{'박혜미'}</MiddleMateSectorName>
        </MiddlesectorEmotionContainer>
        <MiddlesectorEmotionContainer>
          <MiddleSectorTitle>극혐 조합</MiddleSectorTitle>
          <MiddleMateSectorImage src="/images/Soonjae.jpg" alt={'이순재'} />
          <MiddleMateSectorName>{'이순재'}</MiddleMateSectorName>
        </MiddlesectorEmotionContainer>
      </MiddleSectorContainer>
    </>
  );
}

export default ResultMate;
