import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: '2px solid black',
  },
}));

const ContentContainer = styled.div`
  align-items: center;
`;
const HomeButtonLink = styled(Link)`
  text-decoration: none;
`;

function TestResult() {
  const classes = useStyles();
  return (
    <ContentContainer>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ResultTopSector userName={'위영민(임시)'} />
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
            <ResultGraph />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ResultButtons />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <HomeButtonLink to="/">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Home으로 이동
              </Button>
            </HomeButtonLink>
          </Paper>
        </Grid>
      </Grid>
    </ContentContainer>
  );
}

export default TestResult;
