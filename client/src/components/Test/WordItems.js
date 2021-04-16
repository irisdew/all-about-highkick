import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { testEmotionCount, testWordCount } from '../../actions';
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
  margin: auto;
  align-items: center;
  border: 10px solid black;
  transition: all ease 1s;
  cursor: pointer;

  /* :hover {
    border: 10px solid red;
  } */
`;
const WordLabel = styled.label`
  /* display: block;
  height: 7vh;
  margin: 0 5vh;
  border-radius: 30px;
  background-color: skyblue; */
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
    fetch('http://localhost:3000/data/word.json')
      .then((res) => res.json())
      .then((res) => {
        console.log(res.words);
        setWords(res.words);
      });
  }, [emotionCount, wordCount]);

  function changeDivCss(idx) {
    var parent = document.querySelector(`#word${idx}`).parentElement;
    parent.style.opacity = 0;
  }

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
                // 선택한 radio버튼 박스는 사라지고, 버튼활성화 카운터 1증가 하고 싶음
                // 아래 처럼 작동시키면, changeDivCss 가 먹힌다. => 대신 버튼활성화 카운트가 안된다. => 당연히 안됨, 조건을 봐라.
                // 그러자고, 저 if문을 제거해서 실행하면, changeDivCss만 안먹힌다. ㅠ
                // changeDivCss(word[0]);
                dispatch(testEmotionCount(emotionCount));
                emotionCount[event.target.value] += 1;
                dispatch(testWordCount(wordCount + 1));
                //dispatch(testWordCount(wordCount + 1));

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
