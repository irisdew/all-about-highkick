import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { testPage } from '../../actions';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import WordItems from '../../components/Test/WordItems';

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

const WordTestTitle = styled.h1``;

function TestWord() {
  // 문항 10개 고르지 않은 경우, 버튼 활성화 안되도록 해야함
  // 그러기 위해선, WordItems 컴포넌트에서, 체크된 카운팅 State 필요
  const [isChecked, setIsChecked] = useState(10);
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div>
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
          <Paper className={classes.paper}>
            {/* 전체 항목 체크 << 기능을 안한다는 전제, 최대 N개 까지만 체크할 수 있도록 제어하는 부분도 필요할 듯 */}
            {/* 제출하기 버튼 눌렀을 때, 감정객체의 카운팅 값을 sortring해서, 최상위 키값을 서버에 통신하기로 생각 중 */}
            {/* 검사 집계 작업필요, 생각해보니 설문조사파트이든,단어선택파트이든, 항목에 내재된 것은, 감정 키값들이니깐 */}
            {/* 그 감정 키값에 대한 카운트를 하는 객체 state를 리덕스로 관리해서, 마지막 제출시, 전달하면 되지 않을까 생각중 */}
            {/* 서버에서 반환되는 결과를 받아오기까지, 로딩페이지를 잠시 보여주고, 결과페이지를 보여주는 방식, setTimeout 사용 */}
            <Button
              disabled={isChecked !== 10}
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch(testPage(4));
                // props.setIsStarted(4);
                setTimeout(function () {
                  dispatch(testPage(5));
                  // props.setIsStarted(5);
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

export default TestWord;
