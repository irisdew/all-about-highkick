import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { BiShareAlt } from 'react-icons/bi';
import { GiSaveArrow } from 'react-icons/gi';
import { GoLink } from 'react-icons/go';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const ButtonContainer = styled.div`
  align-items: center;
`;

function ResultButton() {
  const classes = useStyles();
  return (
    <>
      <ButtonContainer>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<BiShareAlt />}
        >
          공유하기
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<GoLink />}
        >
          링크복사
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<GiSaveArrow />}
        >
          저장하기
        </Button>
      </ButtonContainer>
    </>
  );
}

export default ResultButton;
