import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { testEmotionCount, testWordCount } from '../../actions';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import baseUrl from '../../url/http';

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
  margin: auto;
  align-items: center;
  border: 10px solid black;
  transition: all ease 1s;
  cursor: pointer;
`;
const WordLabel = styled.label`
  width: 100%;
`;
const WordRadioButton = styled.input``;

function WordItems() {
  const classes = useStyles();
  const [words, setWords] = useState([]);
  const emotionCount = useSelector((state) => state.test.emotionCount);
  const wordCount = useSelector((state) => state.test.wordCount);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      axios.get(baseUrl + 'test/word').then((response) => {
        setWords(response.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // function changeDivCss(idx) {
  //   var parent = document.querySelector(`#word${idx}`).parentElement;
  //   parent.style.opacity = 0;
  // }

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
                dispatch(testEmotionCount(emotionCount));
                emotionCount[event.target.value] += 1;
                dispatch(testWordCount(wordCount + 1));
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
