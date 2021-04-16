import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { testUserName } from '../../actions';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import OverdoseContents from '../../components/Test/OverdoseContents';

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
  button: {
    margin: theme.spacing(1),
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
const ResultTitle = styled.h1`
  color: black;
  font-size: 5vh;
`;
const ResultPhargraph = styled.p`
  color: black;
  font-size: 5vh;
  display: inline-block;
  margin: 0 2vw;
  cursor: pointer;
  font-family: 'yangjin';
`;
const MyLink = styled(Link)`
  text-decoration: none;
`;

function TestOverdoseResult() {
  const classes = useStyles();
  const [overdoseData, setOverdoseData] = useState([]);
  const userName = useSelector((state) => state.test.name);
  const overdoseCount = useSelector((state) => state.test.overdoseCount);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    fetch('http://localhost:3000/data/overdoseResult.json')
      .then((res) => res.json())
      .then((res) => {
        console.log(res.result);
        setOverdoseData(res.result);
      });
  }, []);

  if (!overdoseData.length) return null;
  return (
    <Container>
      <div className={classes.root}>
        {overdoseData.length && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <ResultTitle>{userName}님의 시험결과</ResultTitle>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <OverdoseContents
                  name={userName}
                  answerCount={overdoseCount}
                  data={overdoseData}
                />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper} style={{ paddingTop: '2.2vh' }}>
                <ResultPhargraph
                  onClick={() => {
                    history.push('/overdose/process');
                  }}
                >
                  재도전 하기
                </ResultPhargraph>
                <MyLink to="/">
                  <ResultPhargraph
                    onClick={() => {
                      history.push('/');
                      dispatch(testUserName(''));
                    }}
                  >
                    홈으로 이동
                  </ResultPhargraph>
                </MyLink>
              </Paper>
            </Grid>
          </Grid>
        )}
      </div>
    </Container>
  );
}

export default TestOverdoseResult;
