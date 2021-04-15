import { Select } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const QuestionDiv = styled.div`
  margin: 1vh 2vw;
  text-align: left;
`;
const SelectDiv = styled.div`
  display: block;
`;
function OverdoseTestQuestion(props) {
  return (
    <QuestionDiv>
      <h3>
        {props.id}. {props.question}
      </h3>
      <SelectDiv>
        <input
          id={`q${props.id}-select1`}
          className="select-radio"
          type="radio"
          value={`${props.select1[1]}`}
          name={`${props.id}`}
          onClick={() => props.checkedCounter()}
        />
        <label htmlFor={`q${props.id}-select1`}>{props.select1[0]}</label>
      </SelectDiv>
      <SelectDiv>
        <input
          id={`q${props.id}-select2`}
          className="select-radio"
          type="radio"
          value={`${props.select2[1]}`}
          name={`${props.id}`}
          onClick={() => props.checkedCounter()}
        />
        <label htmlFor={`q${props.id}-select2`}>{props.select2[0]}</label>
      </SelectDiv>
      <SelectDiv>
        <input
          id={`q${props.id + 1}-select3`}
          className="select-radio"
          type="radio"
          value={`${props.select3[1]}`}
          name={`${props.id}`}
          onClick={() => props.checkedCounter()}
        />
        <label htmlFor={`q${props.id}-select3`}>{props.select3[0]}</label>
      </SelectDiv>
      <SelectDiv>
        <input
          id={`q${props.id}-select4`}
          className="select-radio"
          type="radio"
          value={`${props.select4[1]}`}
          name={`${props.id}`}
          onClick={() => props.checkedCounter()}
        />
        <label htmlFor={`q${props.id}-select4`}>{props.select4[0]}</label>
      </SelectDiv>
    </QuestionDiv>
  );
}

export default OverdoseTestQuestion;
