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

const ButtonContainer = styled.div``;
const HomeButtonContainer = styled.div`
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
          Share
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<GoLink />}
        >
          URL
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<GiSaveArrow />}
        >
          Save
        </Button>
      </ButtonContainer>
    </>
  );
}

export default ResultButton;