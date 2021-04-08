import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 30vw;
  height: 20vw;
  border: 2px solid black;
  /* background-image : url() */
`;

function Image(props) {
  return <ImageContainer>이미지 컨테이너</ImageContainer>;
}

export default Image;
