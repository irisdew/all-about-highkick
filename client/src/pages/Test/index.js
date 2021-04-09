import React, { useState } from 'react';
import TestMain from '../../components/Test';
import TestSurvey from './TestSurvey';
import TestRoading from './TestRoading';
import TestResult from './TestResult';
import TestWord from './TestWord';
import { Route } from 'react-router-dom';

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

function Test() {
  // 리덕스로 isStarted 상태제어해서 뷰 분리 해야함.
  // 일단은, 부모컴포넌트에서 setState를 넘겨줘서, 자식컴포넌트에서 변경하는 식으로 했음
  const [isStarted, setIsStarted] = useState(1);

  return (
    <>
      <Container>
        {isStarted === 1 && <TestMain setIsStarted={setIsStarted} />}
        {isStarted === 2 && <TestSurvey setIsStarted={setIsStarted} />}
        {isStarted === 3 && <TestWord setIsStarted={setIsStarted} />}
        {isStarted === 4 && <TestRoading setIsStarted={setIsStarted} />}
        {isStarted === 5 && <TestResult setIsStarted={setIsStarted} />}

        {/* <Route path="/test/result" exact component={TestResult} /> */}
      </Container>
    </>
  );
}

export default Test;
