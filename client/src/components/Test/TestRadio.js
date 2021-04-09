import React from 'react';
import styled from 'styled-components';

const TestRadioContainer = styled.div`
  width: 30vw;
  height: 10vw;
  border: 2px solid black;
  margin: 3vh 0;
`;
const TestLabel = styled.label`
  display: inline-block;
  width: 20vw;
  height: 5vh;
  border-radius: 10px;
  margin: 2vh 0;
  background-color: skyblue;
`;
const TestRadioButton = styled.input`
  display: none;
  &:checked + ${TestLabel} {
    background: red;
  }
`;

function TestRadio(props) {
  return (
    <TestRadioContainer>
      <div>
        <TestRadioButton type="radio" id="radio1" value={''} name={1} />
        <TestLabel htmlFor="radio1">선택지 1</TestLabel>
        <TestRadioButton type="radio" id="radio2" value={''} name={1} />
        <TestLabel htmlFor="radio2">선택지 2</TestLabel>
      </div>
    </TestRadioContainer>
  );
}

export default TestRadio;
