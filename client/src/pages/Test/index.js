import React, { useState } from 'react';
import TestMain from '../../components/Test';
import styled from 'styled-components';

// 페이지 레이아웃 컨테이너
const Container = styled.div`
  display: flex;
  text-align: center;
  background-color: white;
  align-items: center; /* 세로에서 가운데에 요소를 배치하겠다 */
  justify-content: center; /*가로에서 가운데에 요소(자식요소)를 배치하겠다*/
  margin-left: 20vw;
  margin-right: 20vw;
  height: 100vh;
`;
function Test() {
  return (
    <Container>
      <TestMain />
    </Container>
  );
}

export default Test;
