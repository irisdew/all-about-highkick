import React from 'react';
import styled from 'styled-components';

const ProcessImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  border: 2px solid black;
`;
const ProcessImg = styled.img``;

function Image(props) {
  return (
    <>
      <ProcessImageContainer>
        <ProcessImg src={props.imgSrc} alt={props.imgSrc} />
      </ProcessImageContainer>
    </>
  );
}

export default Image;
