import React from 'react';
import styled from 'styled-components';

const IntroArticle = styled.article``;
const IntroParagraph = styled.p``;
function IntroContext() {
  return (
    <>
      <IntroArticle>
        <IntroParagraph>
          ‘음~ 맛있다~’ 라는 말을 들으면 ‘마트다녀오셨어요~?’ 라고
          상황극을시작하시나요 ? <br />
          호박고구마를 먹을때 ‘호! 박! 고! 구! 마! 호박 고구마!!!’ 라고
          소리친적이 있으신가요 ? <br /> ‘문의주세요’ 라는 말에 ‘문희는 포도가
          먹고시푼데에~’ 를 대답하고 싶었던 적이 있나요? <br />
          컴퓨터 앞에서 ‘얏옹. 야아도옹~ 야. 한. 동. 영. 상.'을 외치던
          ‘얏옹순재’가 기억나시나요 ? <br />
          그럼 제대로 찾아오셨습니다.
          <br /> 방영 15주년을 맞이한 대한민국 레전드 시트콤 ‘거침없이 <br />그
          모든 것을 분석했습니다. <br />
          여러분들의 추억 상자를 열어보세요 !
        </IntroParagraph>
      </IntroArticle>
    </>
  );
}

export default IntroContext;
