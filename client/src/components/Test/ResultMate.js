import React from 'react';
import styled from 'styled-components';
import baseUrl from '../../url/http';

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
const MiddleMateSectorImage = styled.img`
  width: 20vw;
  height: 20vh;
`;
const MiddleMateSectorName = styled.p`
  color: black;
`;
function ResultMate(props) {
  return (
    <>
      <MiddleSectorContainer>
        <MiddlesectorEmotionContainer>
          <MiddleSectorTitle>찰떡 궁합</MiddleSectorTitle>
          <MiddleMateSectorImage
            src={`${baseUrl}/image/result/${props.pair[0]}`}
            alt={''}
          />
          <MiddleMateSectorName>{''}</MiddleMateSectorName>
        </MiddlesectorEmotionContainer>
        <MiddlesectorEmotionContainer>
          <MiddleSectorTitle>극혐 조합</MiddleSectorTitle>
          <MiddleMateSectorImage
            src={`${baseUrl}/image/result/${props.pair[1]}`}
            alt={''}
          />
          <MiddleMateSectorName>{''}</MiddleMateSectorName>
        </MiddlesectorEmotionContainer>
      </MiddleSectorContainer>
    </>
  );
}

export default ResultMate;
