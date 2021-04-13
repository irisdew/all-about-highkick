import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { testEmotionCount } from '../../actions';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    border: '2px solid black',
  },
}));
const WordDiv = styled.div`
  width: 10vw;
  height: 7vh;
  margin: auto;
  align-items: center;
  border: 10px solid black;
  transition: all ease 1s;
  cursor: pointer;

  :hover {
    border: 10px solid red;
  }
`;
const WordLabel = styled.label`
  /* display: block;
  height: 7vh;
  margin: 0 5vh;
  border-radius: 30px;
  background-color: skyblue; */
`;
const WordRadioButton = styled.input`
  /* display: none;
  &:checked + ${WordLabel} {
    border: 10px solid red;
  } */
`;

function WordItems() {
  const classes = useStyles();
  const [words, setWords] = useState([]);
  const emotionCount = useSelector((state) => state.test.emotionCount);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3000/data/word.json')
      .then((res) => res.json())
      .then((res) => {
        console.log(res.words);
        setWords(res.words);
      });
  }, [emotionCount]);

  function FormRow() {
    const wordList = words.map((word, index) => (
      <Grid key={index} item xs={3}>
        <Paper key={index} className={classes.paper}>
          <WordDiv key={index}>
            <WordRadioButton
              key={index}
              id={`word${word[0]}`}
              type="radio"
              value={word[1]}
              onClick={(event) => {
                emotionCount[event.target.value] += 1;
                dispatch(testEmotionCount(emotionCount));
                console.log(emotionCount);
              }}
            />
            <WordLabel htmlFor={`word${word[0]}`}>{word[2]}</WordLabel>
          </WordDiv>
        </Paper>
      </Grid>
    ));
    return <React.Fragment>{wordList}</React.Fragment>;
  }

  return (
    <div>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}

export default WordItems;
