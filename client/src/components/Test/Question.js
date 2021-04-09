import React from 'react';
import styled from 'styled-components';

const QuestionContainer = styled.h1`
  border: 2px solid black;
  color: black;
`;

function Question(props) {
  const question = {
    1: 'Q1. 문희가 문희했다. 그럼 문희는 ?',
    2: 'Q2. 순재가 순재했다. 그럼 순재는 ?',
    3: 'Q3. 혜미가 혜미했다. 그럼 혜미는 ?',
    4: 'Q4. 준하가 준하했다. 그럼 준하는 ?',
    5: 'Q5. 서선생이 서선생했다. 그럼 서선생은 ?',
    6: 'Q6. 민용이가 민용했다. 그럼 민용이는 ?',
    7: 'Q7. 찬성이가 찬성했다. 그럼 찬성이는 ?',
    8: 'Q8. 범이가 범이했다. 그럼 범이는 ?',
    9: 'Q9. 개성댁이 개성댁했다. 그럼 개성댁은 ?',
    10: 'Q10. 신지가 신지했다. 그럼 신지는 ?',
  };

  return <QuestionContainer>{question[props.qNumber]}</QuestionContainer>;
}

export default Question;
