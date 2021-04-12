import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { testPage } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Image from '../../components/Test/Image';
import Question from '../../components/Test/Question';

import TestRadio from '../../components/Test/TestRadio';
import ProgressBar from '../../components/Test/ProgressBar';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: '2px solid black',
  },
}));

const ContentContainer = styled.div`
  align-items: center;
`;
const ButtonContainer = styled.div`
  margin-top: 2vw;
`;

function TestSurvey() {
  const qNumber = useSelector((state) => state.test.surveyNumber);
  const dispatch = useDispatch();

  const classes = useStyles();
  return (
    <ContentContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Question qNumber={qNumber} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Image qNumber={qNumber} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ProgressBar qNumber={qNumber} />
            <TestRadio qNumber={qNumber} />
            <ButtonContainer>
              <Button
                disabled={qNumber === 10 ? false : true}
                type="submit"
                variant="contained"
                color="primary"
                onClick={() => {
                  dispatch(testPage(3));
                }}
              >
                다음
              </Button>
            </ButtonContainer>
          </Paper>
        </Grid>
      </Grid>
    </ContentContainer>
  );
}

export default TestSurvey;
