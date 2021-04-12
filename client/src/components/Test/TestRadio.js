import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { testSurveyNumber } from '../../actions';

const TestRadioContainer = styled.div`
  border: 2px solid black;
  margin: 3vh 0;
`;
const TestLabel = styled.label`
  display: block;
  padding-top: 4vh;

  height: 7vh;
  border-radius: 30px;
  margin: 2vw 2vh;
  background-color: skyblue;
`;
const TestRadioButton = styled.input`
  display: none;
  &:checked + ${TestLabel} {
    background: red;
  }
`;

function TestRadio(props) {
  const selectQuestions = {
    1: [1, '1.문희는 문희했다. 그래서 문희했다.'],
    2: [3, '2.문희는 문희했다. 그래서 문희했다.'],
    3: [4, '1.순재는 순재했다. 그래서 순재했다.'],
    4: [2, '2.순재는 순재했다. 그래서 순재했다.'],
    5: [5, '1.혜미는 혜미했다. 그래서 혜미했다.'],
    6: [2, '2.혜미는 혜미했다. 그래서 혜미했다.'],
    7: [2, '1.준하는 준하했다. 그래서 준하했다.'],
    8: [4, '2.준하는 준하했다. 그래서 준하했다.'],
    9: [3, '1.범이는 범이했다. 그래서 범이했다.'],
    10: [1, '2.범이는 범이했다. 그래서 범이했다.'],
    11: [2, '1.민용이는 민용했다. 그래서 민용했다.'],
    12: [1, '2.민용이는 민용했다. 그래서 민용했다.'],
    13: [2, '1.서선생은 서선생했다. 그래서 서선생했다.'],
    14: [1, '2.서선생은 서선생했다. 그래서 서선생했다.'],
    15: [3, '1.찬성은 찬성했다. 그래서 찬성했다.'],
    16: [4, '2.찬성은 찬성했다. 그래서 찬성했다.'],
    17: [2, '1.개성댁은 개성댁했다. 그래서 개성댁했다.'],
    18: [3, '2.개성댁은 개성댁은했다. 그래서 개성댁했다.'],
    19: [5, '1.신지는 신지했다. 그래서 신지했다.'],
    20: [4, '2.신지는 신지했다. 그래서 신지했다.'],
  };
  const dispatch = useDispatch();
  return (
    <TestRadioContainer>
      <div>
        <TestRadioButton
          type="radio"
          id="radio1"
          value={selectQuestions[2 * props.qNumber - 1][0]}
          name="select-radio"
          onClick={(event) => {
            setTimeout(() => (event.target.checked = false), 500);
            if (props.qNumber !== 10) {
              dispatch(testSurveyNumber(props.qNumber + 1));
              // props.setQNumber(props.qNumber + 1);
              console.log(event.target.value);
            } else {
              console.log(event.target.value);
            }
          }}
        />
        <TestLabel htmlFor="radio1">
          {selectQuestions[2 * props.qNumber - 1][1]}
        </TestLabel>
        <TestRadioButton
          type="radio"
          id="radio2"
          value={selectQuestions[2 * props.qNumber][0]}
          name="select-radio"
          onClick={(event) => {
            setTimeout(() => (event.target.checked = false), 500);
            if (props.qNumber !== 10) {
              dispatch(testSurveyNumber(props.qNumber + 1));
              // props.setQNumber(props.qNumber + 1);
              console.log(event.target.value);
            } else {
              console.log(event.target.value);
            }
          }}
        />
        <TestLabel htmlFor="radio2">
          {selectQuestions[2 * props.qNumber][1]}
        </TestLabel>
      </div>
    </TestRadioContainer>
  );
}

export default TestRadio;
