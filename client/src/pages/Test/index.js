import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import TestMain from '../../components/Test';
import TestSurvey from './TestSurvey';
import TestRoading from './TestRoading';
import TestResult from './TestResult';
import TestWord from './TestWord';
import TestOverdose from './TestOverdose';
import TestOverdoseResult from './TestOverdoseResult';

import styled from 'styled-components';

// 페이지 레이아웃 컨테이너
const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  text-align: center;
  background-color: white;
  align-items: center; /* 세로에서 가운데에 요소를 배치하겠다 */
  justify-content: center; /*가로에서 가운데에 요소(자식요소)를 배치하겠다*/

  margin-left: 20vw;
  margin-right: 20vw;
`;

// TestMain 에서, 2가지 버튼을 주고, 버튼에 따라 => 성향테스트 or 덕후테스트 진행할 수 있도록 해야 할 것 같음
// /test 에서는 TestMain만 있고, 그 밑에 라우팅을 줘서
// 성향테스트 => /test/character  , 덕후테스트 => /test/overdose  이런식으로 라우팅이 필요해 보임.
function Test() {
  // 리덕스로 isStarted 상태제어해서 뷰 분리 해야함.
  // 일단은, 부모컴포넌트에서 setState를 넘겨줘서, 자식컴포넌트에서 변경하는 식으로 했음
  const isStarted = useSelector((state) => state.test.page);

  useEffect(() => {}, [isStarted]);

  return (
    <>
      <Container>
        {isStarted === 1 && <TestMain />}
        {isStarted === 2 && <TestSurvey />}
        {isStarted === 3 && <TestWord />}
        {isStarted === 4 && <TestRoading />}
        {isStarted === 5 && <TestResult />}
        {isStarted === 6 && <TestOverdose />}
        {isStarted === 7 ? <TestOverdoseResult /> : <></>}

        {/* 테스트 둘다 공유기능 생각했을 때, 라우팅으로, 개별 페이지로 전환해야하나 ? */}
      </Container>
    </>
  );
}

export default Test;
