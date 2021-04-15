import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import WordItems from '../../components/Test/WordItems';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
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

  margin-left: 20vw;
  margin-right: 20vw;
`;
const WordTestTitle = styled.h1`
  color: black;
`;
const WordSubmit = styled.h1`
  color: black;
  margin: 0 auto;
  cursor: pointer;
`;

function TestWord() {
  const classes = useStyles();
  const wordCounter = useSelector((state) => state.test.wordCount);
  const history = useHistory();
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <WordTestTitle>
              다음 중 평소 사용하는 단어와 비슷한 단어를 골라주세요.
            </WordTestTitle>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <WordItems />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            elevation={0}
            className={classes.paper}
            style={{ border: 'none' }}
          >
            <WordSubmit
              style={{ display: wordCounter < 10 && 'none' }}
              onClick={() => {
                history.push('/roading');
                setTimeout(function () {
                  history.push('/survey/result');
                }, 3000);
              }}
            >
              제출하기
            </WordSubmit>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TestWord;
