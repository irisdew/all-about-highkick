import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

function Test() {
  // User Name 입력 값 확인 메소드
  const [userName, setUserName] = useState('');

  const handleChange = (e) => {
    console.log(e.tartget.value);
    setUserName(e.tartget.value);
    console.log(userName);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <ContentContainer>
        <TestTitle>내가 하이킥 등장인물이라면 ?</TestTitle>
        <TestParagraph>
          몇 가지 테스트 결과를 진행해보고
          <br />
          본인의 성향과 맞는 하이킥 등장인물을 찾아보세요.
          <br />
        </TestParagraph>
        <FormContainer>
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="이름을 입력해주세요."
              variant="outlined"
              value={userName}
              onChange={handleChange}
            />
          </form>
        </FormContainer>
        <Button type="submit" variant="contained" color="primary">
          시작하기
        </Button>
      </ContentContainer>
    </Container>
  );
}

export default Test;

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
// 콘텐츠 컨테이너
const ContentContainer = styled.div`
  align-items: center; /* 세로에서 가운데에 요소를 배치하겠다 */
`;
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
  font-size: 2vw;
`;
// 사용자 정보 & 버튼 컨테이너
const FormContainer = styled.div`
  padding-top: 5vh;
  padding-bottom: 5vh;
`;
