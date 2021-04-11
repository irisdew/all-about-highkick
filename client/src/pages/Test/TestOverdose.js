import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: '2px solid black',
  },
}));

const PageTitle = styled.h1``;

function TestOverdose(props) {
  const classes = useStyles();

  const [isAnswer, setIsAnswer] = useState(0);
  const [isChecked, setIsChecked] = useState(0);

  function AnswerCounter() {
    let AnswerCount = 0;
    for (var i = 1; i <= 10; i++)
      if (document.querySelector(`input[name='${i}']:checked`).value === 'true')
        AnswerCount += 1;

    return AnswerCount;
  }
  function CheckedCounter() {
    let checkedCount = 0;
    for (var i = 0; i < document.querySelectorAll('.select-radio').length; i++)
      if (document.querySelectorAll('.select-radio')[i].checked)
        checkedCount += 1;

    setIsChecked(checkedCount);
  }
  useEffect(() => {
    if (isAnswer !== 0) console.log(isAnswer);
  }, [isAnswer, isChecked]);

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" justify="center" spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <PageTitle>제 1회 하이킥 모의고사</PageTitle>
          </Paper>
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div className={classes.root}>
                <p>Q1. 이씨가족 가족유니폰 4번에 해당되는 사람은 ?</p>
                <input
                  id="q1-select1"
                  className="select-radio"
                  type="radio"
                  value={true}
                  name="1"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q1-select1">이준하</label>
                <input
                  id="q1-select2"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="1"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q1-select2">이민호</label>
                <input
                  id="q1-select3"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="1"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q1-select3">이윤호</label>
                <input
                  id="q1-select4"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="1"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q1-select4">이민용</label>
              </div>
              <div className={classes.root}>
                <p>Q1. 이씨가족 가족유니폰 4번에 해당되는 사람은 ?</p>
                <input
                  id="q2-select1"
                  className="select-radio"
                  type="radio"
                  value={true}
                  name="2"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q2-select1">이준하</label>
                <input
                  id="q2-select2"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="2"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q2-select2">이민호</label>
                <input
                  id="q2-select3"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="2"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q2-select3">이윤호</label>
                <input
                  id="q2-select4"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="2"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q2-select4">이민용</label>
              </div>
              <div className={classes.root}>
                <p>Q1. 이씨가족 가족유니폰 4번에 해당되는 사람은 ?</p>
                <input
                  id="q3-select1"
                  className="select-radio"
                  type="radio"
                  value={true}
                  name="3"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q3-select1">이준하</label>
                <input
                  id="q3-select2"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="3"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q3-select2">이민호</label>
                <input
                  id="q3-select3"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="3"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q3-select3">이윤호</label>
                <input
                  id="q3-select4"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="3"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q3-select4">이민용</label>
              </div>
              <div className={classes.root}>
                <p>Q1. 이씨가족 가족유니폰 4번에 해당되는 사람은 ?</p>
                <input
                  id="q4-select1"
                  className="select-radio"
                  type="radio"
                  value={true}
                  name="4"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q4-select1">이준하</label>
                <input
                  id="q4-select2"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="4"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q4-select2">이민호</label>
                <input
                  id="q4-select3"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="4"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q4-select3">이윤호</label>
                <input
                  id="q4-select4"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="4"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q4-select4">이민용</label>
              </div>
              <div className={classes.root}>
                <p>Q1. 이씨가족 가족유니폰 4번에 해당되는 사람은 ?</p>
                <input
                  id="q5-select1"
                  className="select-radio"
                  type="radio"
                  value={true}
                  name="5"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q5-select1">이준하</label>
                <input
                  id="q5-select2"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="5"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q5-select2">이민호</label>
                <input
                  id="q5-select3"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="5"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q5-select3">이윤호</label>
                <input
                  id="q5-select4"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="5"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q5-select4">이민용</label>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div className={classes.root}>
                <p>Q1. 이씨가족 가족유니폰 4번에 해당되는 사람은 ?</p>
                <input
                  id="q6-select1"
                  className="select-radio"
                  type="radio"
                  value={true}
                  name="6"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q6-select1">이준하</label>
                <input
                  id="q6-select2"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="6"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q6-select2">이민호</label>
                <input
                  id="q6-select3"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="6"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q6-select3">이윤호</label>
                <input
                  id="q6-select4"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="6"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q6-select4">이민용</label>
              </div>
              <div className={classes.root}>
                <p>Q1. 이씨가족 가족유니폰 4번에 해당되는 사람은 ?</p>
                <input
                  id="q7-select1"
                  className="select-radio"
                  type="radio"
                  value={true}
                  name="7"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q7-select1">이준하</label>
                <input
                  id="q7-select2"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="7"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q7-select2">이민호</label>
                <input
                  id="q7-select3"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="7"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q7-select3">이윤호</label>
                <input
                  id="q7-select4"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="7"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q7-select4">이민용</label>
              </div>
              <div className={classes.root}>
                <p>Q1. 이씨가족 가족유니폰 4번에 해당되는 사람은 ?</p>
                <input
                  id="q8-select1"
                  className="select-radio"
                  type="radio"
                  value={true}
                  name="8"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q8-select1">이준하</label>
                <input
                  id="q8-select2"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="8"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q8-select2">이민호</label>
                <input
                  id="q8-select3"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="8"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q8-select3">이윤호</label>
                <input
                  id="q8-select4"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="8"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q8-select4">이민용</label>
              </div>
              <div className={classes.root}>
                <p>Q1. 이씨가족 가족유니폰 4번에 해당되는 사람은 ?</p>
                <input
                  id="q9-select1"
                  className="select-radio"
                  type="radio"
                  value={true}
                  name="9"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q9-select1">이준하</label>
                <input
                  id="q9-select2"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="9"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q9-select2">이민호</label>
                <input
                  id="q9-select3"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="9"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q9-select3">이윤호</label>
                <input
                  id="q9-select4"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="9"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q9-select4">이민용</label>
              </div>
              <div className={classes.root}>
                <p>Q1. 이씨가족 가족유니폰 4번에 해당되는 사람은 ?</p>
                <input
                  id="q10-select1"
                  className="select-radio"
                  type="radio"
                  value={true}
                  name="10"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q10-select1">이준하</label>
                <input
                  id="q10-select2"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="10"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q10-select2">이민호</label>
                <input
                  id="q10-select3"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="10"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q10-select3">이윤호</label>
                <input
                  id="q10-select4"
                  className="select-radio"
                  type="radio"
                  value={false}
                  name="10"
                  onClick={() => CheckedCounter()}
                />
                <label htmlFor="q10-select4">이민용</label>
              </div>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Button
              disabled={isChecked === 10 ? false : true}
              variant="contained"
              color="primary"
              onClick={() => {
                setIsAnswer(AnswerCounter());
                props.setIsStarted(4);
                setTimeout(function () {
                  props.setIsStarted(7);
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
