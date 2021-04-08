import React from 'react';
import styled from 'styled-components';

const TestRadioContainer = styled.div`
  width: 30vw;
  height: 10vw;
  border: 2px solid black;
  margin: 3vh 0;
`;

function TestRadio(props) {
  return (
    <TestRadioContainer>
      <li>선택지 1</li>
      <li>선택지 1</li>
    </TestRadioContainer>
  );
}

export default TestRadio;
