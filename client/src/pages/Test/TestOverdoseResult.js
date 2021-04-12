import React, { useState, useEffect } from 'react';
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
const MyLink = styled(Link)`
  text-decoration: none;
`;
const MyALink = styled.a`
  text-decoration: none;
`;

function TestOverdoseResult(props) {
  const classes = useStyles();
  const [overdoseData, setOverdoseData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/overdose.json')
      .then((res) => res.json())
      .then((res) => {
        console.log(res.result);
        setOverdoseData(res.result);
      });
  }, []);

  if (!overdoseData.length) return null;
  return (
    <div className={classes.root}>
      {overdoseData.length && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <ResultTitle>당신의 하이킥 티어는 ?</ResultTitle>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {props.overdoseCount !== -1 && (
                <OverdoseContents
                  answerCount={props.overdoseCount}
                  data={overdoseData}
                />
              )}
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                onClick={() => props.setIsStarted(6)}
              >
                재도전 하기
              </Button>
              <MyALink
                href="https://www.youtube.com/watch?v=45nLn4kHxmY&list=PL1FPDVeoyuPeQF67xCTaoMfC0QeBVsxa8&index=1"
                target="_blank"
              >
                <Button
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                >
                  티어 올리러가기
                </Button>
              </MyALink>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <MyLink to="/">
                <Button variant="contained" color="secondary">
                  Home 이동
                </Button>
              </MyLink>
            </Paper>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default TestOverdoseResult;
