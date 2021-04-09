import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  align-items: center;
  text-align: center;
  /* background-image : url() */
`;
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
  const imgName = `/images/Qimage${props.qNumber}.jpg`;

  return (
    <>
      <ProcessImageContainer>
        <ProcessImg src={imgName} alt={imgName} />
      </ProcessImageContainer>
    </>
  );
}

export default Image;
