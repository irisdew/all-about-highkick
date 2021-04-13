import React from 'react';
import styled from 'styled-components';

const QuestionContainer = styled.h1`
  border: 2px solid black;
  color: black;
`;

function Question(props) {
  return <QuestionContainer>{props.question}</QuestionContainer>;
}

export default Question;
