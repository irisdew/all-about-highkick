import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Image from '../../components/Test/Image';
import Question from '../../components/Test/Question';
import PageNav from '../../components/Test/PageNav';
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

function TestSurvey(props) {
  // qnumber를 통해서, 마지막 설문지(qNumber === N)일 경우, 다음버튼 보여지도록 제어
  // 이 역시, 리덕스로 관리하는 방향으로 하면 좋을 듯
  const [qNumber, setQNumber] = useState(1);

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
            <TestRadio qNumber={qNumber} setQNumber={setQNumber} />
            <ButtonContainer>
              {/* 첫 페이지 일때 === 1 일때
        <Button
          style={{ display: qNumber === 12 ? true : 'none' }}
          variant="contained"
          color="primary"
          onClick={() => props.setIsStarted(1)}
        >
          돌아가기
        </Button> */}

              <Button
                style={{ display: qNumber === 10 ? true : 'none' }}
                type="submit"
                variant="contained"
                color="primary"
                onClick={() => {
                  props.setIsStarted(3);
                }}
              >
                다음
              </Button>
            </ButtonContainer>
          </Paper>
        </Grid>
        {/* 페이지네이션 */}
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>
            <PageNav qNumber={qNumber} />
          </Paper>
        </Grid> */}
      </Grid>
    </ContentContainer>
  );
}

export default TestSurvey;
