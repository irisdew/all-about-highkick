import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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
    border: '2px solid black',
  },
  button: {
    margin: theme.spacing(1),
  },
}));
const ResultTitle = styled.h1``;
const HomeLink = styled(Link)`
  text-decoration: none;
`;

function TestOverdoseResult() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ResultTitle>{'OOO'}님의 하이킥 티어는 ?</ResultTitle>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <OverdoseContents
              imgSrc={''}
              answerCount={''}
              rank={''}
              desc={''}
            />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
            >
              재도전 하기
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
            >
              티어 올리러가기
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <HomeLink to="/">
              <Button variant="contained" color="secondary">
                Home 이동
              </Button>
            </HomeLink>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default TestOverdoseResult;
