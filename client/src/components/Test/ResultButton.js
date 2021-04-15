import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { BiShareAlt } from 'react-icons/bi';
import { GiSaveArrow } from 'react-icons/gi';
import { GoLink } from 'react-icons/go';

const useStyles = makeStyles((theme) => ({
  svg: {
    margin: '0 0.5vw',
  },
}));

const ButtonContainer = styled.div`
  display: inline-block;
`;

const ResultPhargraph = styled.p`
  color: black;
  font-size: 4vh;
  display: inline-block;
  margin: 0 2vw;
`;

function ResultButton() {
  const classes = useStyles();
  return (
    <>
      <ButtonContainer>
        <ResultPhargraph>
          <BiShareAlt className={classes.svg} />
          공유하기
        </ResultPhargraph>
        <ResultPhargraph>
          <GoLink className={classes.svg} />
          링크복사
        </ResultPhargraph>
        <ResultPhargraph>
          <GiSaveArrow className={classes.svg} />
          저장하기
        </ResultPhargraph>
        {/* <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={}
        ></Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={}
        ></Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={}
        ></Button> */}
      </ButtonContainer>
    </>
  );
}

export default ResultButton;
