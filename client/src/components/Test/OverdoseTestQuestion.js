import React from 'react';
import styled from 'styled-components';

const QuestionDiv = styled.div``;
function OverdoseTestQuestion(props) {
  return (
    <div>
      <p>
        {props.id}. {props.question}
      </p>
      <input
        id={`q${props.id}-select1`}
        className="select-radio"
        type="radio"
        value={`${props.select1[1]}`}
        name={`${props.id}`}
        onClick={() => props.checkedCounter()}
      />
      <label htmlFor={`q${props.id}-select1`}>{props.select1[0]}</label>
      <input
        id={`q${props.id}-select2`}
        className="select-radio"
        type="radio"
        value={`${props.select2[1]}`}
        name={`${props.id}`}
        onClick={() => props.checkedCounter()}
      />
      <label htmlFor={`q${props.id}-select2`}>{props.select2[0]}</label>
      <input
        id={`q${props.id + 1}-select3`}
        className="select-radio"
        type="radio"
        value={`${props.select3[1]}`}
        name={`${props.id}`}
        onClick={() => props.checkedCounter()}
      />
      <label htmlFor={`q${props.id}-select3`}>{props.select3[0]}</label>
      <input
        id={`q${props.id}-select4`}
        className="select-radio"
        type="radio"
        value={`${props.select4[1]}`}
        name={`${props.id}`}
        onClick={() => props.checkedCounter()}
      />
      <label htmlFor={`q${props.id}-select4`}>{props.select4[0]}</label>
    </div>
  );
}

export default OverdoseTestQuestion;
