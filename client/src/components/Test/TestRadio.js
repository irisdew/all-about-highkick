import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { testSurveyNumber, testEmotionCount, testPage } from '../../actions';

const TestRadioContainer = styled.div`
  margin-bottom: 0;
`;
const TestLabel = styled.label`
  display: block;
  padding-top: 4vh;
  height: 7vh;
  border: 2px solid black;
  border-radius: 30px;
  margin: 1vw 2vh;
  background-color: #dbdbdb;
`;
const TestRadioButton = styled.input`
  display: none;

  &:checked + ${TestLabel} {
    background: #ffc107;
  }
`;

function TestRadio(props) {
  const emotionCount = useSelector((state) => state.test.emotionCount);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {}, [emotionCount]);
  return (
    <TestRadioContainer>
      <TestRadioButton
        type="radio"
        id="radio1"
        value={props.select1[0]}
        name="select-radio"
        onClick={(event) => {
          setTimeout(() => (event.target.checked = false), 500);
          if (props.qNumber < 9) {
            dispatch(testSurveyNumber(props.qNumber + 1));
            emotionCount[event.target.value] += 1;
            dispatch(testEmotionCount(emotionCount));
            console.log(emotionCount);
          } else {
            dispatch(testSurveyNumber(props.qNumber + 1));
            emotionCount[event.target.value] += 1;
            dispatch(testEmotionCount(emotionCount));
            console.log(emotionCount);
            //dispatch(testPage(3));
            history.push('/survey/word');
          }
        }}
      />
      <TestLabel htmlFor="radio1">{props.select1[1]}</TestLabel>
      <TestRadioButton
        type="radio"
        id="radio2"
        value={props.select2[0]}
        name="select-radio"
        onClick={(event) => {
          setTimeout(() => (event.target.checked = false), 500);
          if (props.qNumber < 9) {
            dispatch(testSurveyNumber(props.qNumber + 1));
            emotionCount[event.target.value] += 1;
            dispatch(testEmotionCount(emotionCount));
            console.log(emotionCount);
          } else {
            dispatch(testSurveyNumber(props.qNumber + 1));
            emotionCount[event.target.value] += 1;
            dispatch(testEmotionCount(emotionCount));
            console.log(emotionCount);
            //dispatch(testPage(3));
            history.push('/survey/word');
          }
        }}
      />
      <TestLabel htmlFor="radio2">{props.select2[1]}</TestLabel>
      <TestRadioButton
        type="radio"
        id="radio3"
        value={props.select3[0]}
        name="select-radio"
        onClick={(event) => {
          setTimeout(() => (event.target.checked = false), 500);
          if (props.qNumber < 9) {
            dispatch(testSurveyNumber(props.qNumber + 1));
            emotionCount[event.target.value] += 1;
            dispatch(testEmotionCount(emotionCount));
            console.log(emotionCount);
          } else {
            dispatch(testSurveyNumber(props.qNumber + 1));
            dispatch(testPage(3));
            emotionCount[event.target.value] += 1;
            console.log(emotionCount);
            dispatch(testEmotionCount(emotionCount));
          }
        }}
      />
      <TestLabel htmlFor="radio3">{props.select3[1]}</TestLabel>
    </TestRadioContainer>
  );
}

export default TestRadio;
