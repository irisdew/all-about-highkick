import React from 'react';
import styled from 'styled-components';

const IntroImgContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

function IntroImage() {
  return (
    <>
      <IntroImgContainer>
        <img src="/images/introFamily.jpg" alt="intro-img" />
      </IntroImgContainer>
    </>
  );
}

export default IntroImage;
