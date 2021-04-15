import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { testPage } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import TestRadio from '../../components/Test/TestRadio';
import ProgressBar from '../../components/Test/ProgressBar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: '3px solid black',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: '2px solid black',
  },
}));
// 페이지 레이아웃 컨테이너
const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  text-align: center;
  background-color: white;
  align-items: center; /* 세로에서 가운데에 요소를 배치하겠다 */
  justify-content: center; /*가로에서 가운데에 요소(자식요소)를 배치하겠다*/

  margin-left: 20vw;
  margin-right: 20vw;
`;

const ContentContainer = styled.div`
  align-items: center;
`;
const ButtonContainer = styled.div`
  margin-top: 2vw;
`;
const ProcessImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
`;

function TestSurvey() {
  const [surveyData, setSurveyData] = useState([]);
  const qNumber = useSelector((state) => state.test.surveyNumber);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    fetch('http://localhost:3000/data/survey.json')
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setSurveyData(res.data);
      });
  }, []);

  if (surveyData.length === 0) return null;

  return (
    <Container>
      <ContentContainer className={classes.root}>
        <Grid container spacing={3}>
          {/* <Grid item xs={12}>
          <Paper className={classes.paper}>
           
          </Paper>
        </Grid> */}
          <Grid item xs={12}>
            <h1 style={{ marginBottom: 0 }}>
              Q{surveyData[qNumber].qnum}.{' '}
              {surveyData[qNumber].question.split('<br />')[0].length !== 0 &&
                surveyData[qNumber].question.split('<br />')[0]}
            </h1>
            <h1 style={{ marginTop: '1vh' }}>
              {surveyData[qNumber].question.split('<br />')[1].length !== 0 &&
                surveyData[qNumber].question.split('<br />')[1]}
            </h1>

            <ProcessImageContainer>
              <img
                src={surveyData[qNumber].imgSrc}
                alt={surveyData[qNumber].imgSrc}
              />
            </ProcessImageContainer>
          </Grid>
          <Grid item xs={12}>
            <ProgressBar qNumber={qNumber} />
            <TestRadio
              select1={surveyData[qNumber].select[0]}
              select2={surveyData[qNumber].select[1]}
              select3={surveyData[qNumber].select[2]}
              qNumber={qNumber}
            />
            {/* <ButtonContainer>
              <Button
                disabled={qNumber === 9 ? false : true}
                type="submit"
                variant="contained"
                color="primary"
                onClick={() => {
                  dispatch(testPage(3));
                }}
              >
                다음
              </Button>
            </ButtonContainer> */}
          </Grid>
        </Grid>
      </ContentContainer>
    </Container>
  );
}

export default TestSurvey;
