import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  testUserName,
  testSurveyNumber,
  testEmotionCount,
  testWordCount,
} from '../../actions';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import ResultTopSector from '../../components/Test/ResultTopSector';
import ResultEmotionSector from '../../components/Test/ResultEmotionSector';
import ResultMate from '../../components/Test/ResultMate';
import ResultGraph from '../../components/Test/ResultGraph';
import ResultButtons from '../../components/Test/ResultButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: '4px solid black',
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

  padding: 0 15vw;
`;
const HomeButtonLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const ResultPhargraph = styled.h1`
  color: black;
  font-size: 5vh;
  display: inline-block;
  margin: 0 2vw;
`;

function TestResult() {
  const classes = useStyles();
  const [characterInfo, setCharacterInfo] = useState({});
  const userCharacterInfo = useSelector((state) => state.test.emotionCount);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    fetch('http://localhost:3000/data/surveyResult.json')
      .then((res) => res.json())
      .then((res) => {
        console.log(res.result);
        setCharacterInfo(res.result);
      });
  }, []);

  if (Object.keys(characterInfo).length === 0) return null;
  return (
    <Container id="result-img">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ResultTopSector
              name={characterInfo[0].name}
              nickName={characterInfo[0].nickName}
              img={characterInfo[0].imgSrc}
              desc={characterInfo[0].description}
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ResultEmotionSector />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ResultMate />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ResultGraph
              userCharacterInfo={userCharacterInfo}
              characterName={characterInfo[0].name}
              characterEmotion={characterInfo[0].emotion}
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ResultButtons />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ResultPhargraph
              onClick={() => {
                history.push('/');
                dispatch(testUserName(''));
                dispatch(testSurveyNumber(0));
                dispatch(testEmotionCount({ 기쁨: 0, 슬픔: 0, 화남: 0 }));
                dispatch(testWordCount(0));
              }}
            >
              <HomeButtonLink to="/"> 홈 이동</HomeButtonLink>
            </ResultPhargraph>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TestResult;
