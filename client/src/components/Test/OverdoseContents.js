import React from 'react';
import styled from 'styled-components';

const ImgContainer = styled.div`
  overflow: hidden;
  display: block;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
`;

function OverdoseContents(props) {
  return (
    <ImgContainer>
      <img src={'./images/overdoseimg1.jpg'} alt={'bronze'} />
      <h2>맞은 갯수 : {'2'}개</h2>
      <h2>{'Bronse'}</h2>
      <p>
        당신은 하이킥 초보자 !! <br />
        최소 2000년생으로 추측이 됩니다.
        <br />
        이번 기회에 2007년 최고의 빅재미 시트콤 !!
        <br />
        거침없이 하이킥을 정주행 해보는 건 어떠신가요 ?<br />
      </p>
    </ImgContainer>
  );
}

export default OverdoseContents;
