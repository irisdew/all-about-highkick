import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { testPage, testUserName } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

// 제목 컴포넌트
const TestTitle = styled.h1`
  font-size: 3vw;
  margin-top: 0;
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;
// 제목 설명 컴포넌트
const TestParagraph = styled.p`
  font-size: 1.5vw;
`;
// 사용자 정보 & 버튼 컨테이너
const FormContainer = styled.div`
  padding-top: 5vh;
  padding-bottom: 5vh;
`;
// 콘텐츠 컨테이너
const ContentContainer = styled.div`
  align-items: center; /* 세로에서 가운데에 요소를 배치하겠다 */
  padding-top: 20vh;
`;
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

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function TestOverdoseMain(props) {
  // User Name 입력 값 확인 메소드
  const userName = useSelector((state) => state.test.name);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const handleChange = (e) => {
    dispatch(testUserName(e.target.value));
  };

  return (
    <Container>
      <ContentContainer>
        <TestTitle>나의 하이킥 인지능력은 ?</TestTitle>
        <TestParagraph>
          {/* 몇 가지 테스트를 진행해보세요.
        <br />
        나의 하이킥 중독성 수준을 알아볼 수 있거나 <br />
        본인의 성향과 맞는 하이킥 등장인물을 찾아보세요.
        <br /> */}
          소싯적 거침없이 하이킥을 시청해보셨나요 ?
          <br />
          본인의 하이킥내용을 얼마나 알고있는지 알고 싶다면
          <br />
          아래 테스트를 진행해보세요.
        </TestParagraph>
        <FormContainer>
          <form
            onSubmit={() => console.log('테스트 시작.')}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="이름을 입력해주세요."
              name="name"
              value={userName}
              onChange={handleChange}
            />
          </form>
        </FormContainer>
        <Button
          className={classes.button}
          disabled={!userName}
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => {
            history.push('/overdose/process');
            //dispatch(testPage(6));
          }}
        >
          중독성 테스트
        </Button>
      </ContentContainer>
    </Container>
  );
}

export default TestOverdoseMain;
