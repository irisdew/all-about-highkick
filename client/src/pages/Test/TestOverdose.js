import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { testPage, testOverdoseCount } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

import OverdoseTestQuestion from '../../components/Test/OverdoseTestQuestion';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    background: 'none',
  },
}));

const PageTitle = styled.h1`
  color: black;
  margin-top: 0;
`;
const PageSubTitle = styled.h2`
  color: black;
  margin-bottom: 0;
`;

function TestOverdose() {
  const classes = useStyles();

  const [overdoseQuestion, setOverdoseQuestion] = useState([]);
  // 제출버튼 활성화용 일뿐, 다른페이지에서는 이 state를 사용하지 않기에, 굳이 redux로 관리하지 않아도 되나 ?
  const [isChecked, setIsChecked] = useState(0);
  const dispatch = useDispatch();

  function AnswerCounter() {
    let AnswerCount = 0;

    for (var i = 1; i <= 10; i++)
      if (document.querySelector(`input[name='${i}']:checked`).value === 'true')
        AnswerCount += 1;

    dispatch(testOverdoseCount(AnswerCount));
  }
  function CheckedCounter() {
    let checkedCount = 0;
    for (var i = 0; i < document.querySelectorAll('.select-radio').length; i++)
      if (document.querySelectorAll('.select-radio')[i].checked)
        checkedCount += 1;

    // 일단은, useState로 관리하는데, redux를 사용하기 시작했으므로, 사소한 것도, 모두 redux에서 관리해야 한다면, dispatch 할 것
    setIsChecked(checkedCount);
  }
  useEffect(() => {
    fetch('http://localhost:3000/data/overdose.json')
      .then((res) => res.json())
      .then((res) => {
        console.log(res.test);
        setOverdoseQuestion(res.test);
      });
  }, []);

  if (!overdoseQuestion.length) return null;
  return (
    <div
      style={{
        backgroundImage: `url(${'./images/examimg1.jpg'})`,
        backgroundSize: 'cover',
      }}
    >
      <Grid container alignItems="center" justify="center" spacing={0}>
        <Grid
          item
          xs={12}
          style={{ margin: '0 2vw', borderBottom: '3px solid black' }}
        >
          <PageSubTitle>2021년도 제 1회 하이킥 이순재고사</PageSubTitle>
          <PageTitle>하이킥 중독성 영역</PageTitle>
        </Grid>
        <Grid style={{ margin: '1vh 0' }} container item xs={12} spacing={0}>
          <Grid item xs={6} style={{ borderRight: '2px solid black' }}>
            <Paper elevation={0} className={classes.paper}>
              {overdoseQuestion.slice(0, 5).map((question, index) => {
                return (
                  <OverdoseTestQuestion
                    key={index}
                    id={question.qnum}
                    question={question.question}
                    select1={question.select[0]}
                    select2={question.select[1]}
                    select3={question.select[2]}
                    select4={question.select[3]}
                    checkedCounter={CheckedCounter}
                  />
                );
              })}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={0} className={classes.paper}>
              {overdoseQuestion.slice(5, 10).map((question, index) => {
                return (
                  <OverdoseTestQuestion
                    key={index}
                    id={question.qnum}
                    question={question.question}
                    select1={question.select[0]}
                    select2={question.select[1]}
                    select3={question.select[2]}
                    select4={question.select[3]}
                    checkedCounter={CheckedCounter}
                  />
                );
              })}
            </Paper>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ margin: '0 2vw', borderTop: '3px solid black' }}
        >
          <Paper elevation={0} className={classes.paper}>
            <Button
              disabled={isChecked === 10 ? false : true}
              variant="contained"
              color="primary"
              onClick={() => {
                AnswerCounter();
                dispatch(testPage(4));
                setTimeout(function () {
                  dispatch(testPage(7));
                }, 3000);
              }}
            >
              제출하기
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default TestOverdose;
