import React, { useState } from 'react';
import Image from '../../components/Test/Image';
import Question from '../../components/Test/Question';
import PageNav from '../../components/Test/PageNav';
import TestRadio from '../../components/Test/TestRadio';
import ProgressBar from '../../components/Test/ProgressBar';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const ContentContainer = styled.div`
  align-items: center;
`;
const ButtonContainer = styled.div`
  margin-top: 2vw;
`;

function TestProcess(props) {
  // qNumber를 Redux로 깔끔하게 정리하는게 Best 일듯
  // 질문마다 매핑되어있는, 감정 객체 형식 state 도 필요함
  const [qNumber, setQNumber] = useState(1);

  return (
    <ContentContainer>
      <Image qNumber={''} />
      <Question qNumber={''} />
      <ProgressBar qNumber={''} />
      <TestRadio qNumber={''} />
      <PageNav qNumber={''} />

      <ButtonContainer>
        {/* 첫 페이지 일때 === 1 일때 */}
        <Button
          style={{ display: qNumber === 1 ? true : 'none' }}
          variant="contained"
          color="primary"
          onClick={() => props.setIsStarted(1)}
        >
          돌아가기
        </Button>
        {/* 마지막페이지 일때 == n 일때 */}
        {/* 검사 집계 작업필요, serialize, 검사체크한 사용자정보 서버로 넘길 시 필요 */}
        {/* 서버에서 반환되는 결과를 받아오기까지, 로딩페이지를 잠시 보여주고, 결과페이지를 보여주는 방식, setTimeout 사용 */}
        <Button
          style={{ display: qNumber === 1 ? true : 'none' }}
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => {
            props.setIsStarted(3);
            setTimeout(function () {
              props.setIsStarted(4);
            }, 3000);
          }}
        >
          제출하기
        </Button>
      </ButtonContainer>
    </ContentContainer>
  );
}

export default TestProcess;
