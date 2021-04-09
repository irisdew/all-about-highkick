import React from 'react';
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

  const word = {
    1: [1, '동해물과'],
    2: [4, '백두산이'],
    3: [2, '마르고'],
    4: [4, '닳도록'],
    5: [5, '하느님이'],
    6: [3, '보우하사'],
    7: [3, '우리나라'],
    8: [2, '만세이'],
    9: [1, '무궁화'],
    10: [3, '삼천리'],
    11: [5, '화려강산'],
    12: [4, '대한사람'],
    13: [2, '대한으로'],
    14: [3, '길이보전'],
    15: [4, '남산위에'],
    16: [5, '저소나무'],
    17: [2, '철갑을'],
    18: [2, '두른듯'],
    19: [1, '바람서리'],
    20: [5, '불변함은'],
  };

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <WordDiv>
              <WordRadioButton id="word1" type="radio" value={word[1][0]} />
              <WordLabel htmlFor="word1">{word[1][1]}</WordLabel>
            </WordDiv>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <WordDiv>
              <WordRadioButton id="word2" type="radio" value={word[2][0]} />
              <WordLabel htmlFor="word2">{word[2][1]}</WordLabel>
            </WordDiv>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <WordDiv>
              <WordRadioButton id="word3" type="radio" value={word[3][0]} />
              <WordLabel htmlFor="word3">{word[3][1]}</WordLabel>
            </WordDiv>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <WordDiv>
              <WordRadioButton id="word4" type="radio" value={word[4][0]} />
              <WordLabel htmlFor="word4">{word[4][1]}</WordLabel>
            </WordDiv>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <WordDiv>
              <WordRadioButton id="word5" type="radio" value={word[5][0]} />
              <WordLabel htmlFor="word5">{word[5][1]}</WordLabel>
            </WordDiv>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <WordDiv>
              <WordRadioButton id="word6" type="radio" value={word[6][0]} />
              <WordLabel htmlFor="word6">{word[6][1]}</WordLabel>
            </WordDiv>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <WordDiv>
              <WordRadioButton id="word7" type="radio" value={word[7][0]} />
              <WordLabel htmlFor="word7">{word[7][1]}</WordLabel>
            </WordDiv>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <WordDiv>
              <WordRadioButton id="word8" type="radio" value={word[8][0]} />
              <WordLabel htmlFor="word8">{word[8][1]}</WordLabel>
            </WordDiv>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <WordDiv>
              <WordRadioButton id="word9" type="radio" value={word[9][0]} />
              <WordLabel htmlFor="word9">{word[9][1]}</WordLabel>
            </WordDiv>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <WordDiv>
              <WordRadioButton id="word10" type="radio" value={word[10][0]} />
              <WordLabel htmlFor="word10">{word[10][1]}</WordLabel>
            </WordDiv>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <WordDiv>
              <WordRadioButton id="word11" type="radio" value={word[11][0]} />
              <WordLabel htmlFor="word11">{word[11][1]}</WordLabel>
            </WordDiv>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <WordDiv>
              <WordRadioButton id="word12" type="radio" value={word[12][0]} />
              <WordLabel htmlFor="word12">{word[12][1]}</WordLabel>
            </WordDiv>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <WordDiv>
              <WordRadioButton id="word13" type="radio" value={word[13][0]} />
              <WordLabel htmlFor="word13">{word[13][1]}</WordLabel>
            </WordDiv>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <WordDiv>
              <WordRadioButton id="word14" type="radio" value={word[14][0]} />
              <WordLabel htmlFor="word14">{word[14][1]}</WordLabel>
            </WordDiv>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <WordDiv>
              <WordRadioButton id="word15" type="radio" value={word[15][0]} />
              <WordLabel htmlFor="word15">{word[15][1]}</WordLabel>
            </WordDiv>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <WordDiv>
              <WordRadioButton id="word16" type="radio" value={word[16][0]} />
              <WordLabel htmlFor="word16">{word[16][1]}</WordLabel>
            </WordDiv>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <WordDiv>
              <WordRadioButton id="word17" type="radio" value={word[17][0]} />
              <WordLabel htmlFor="word17">{word[17][1]}</WordLabel>
            </WordDiv>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <WordDiv>
              <WordRadioButton id="word18" type="radio" value={word[18][0]} />
              <WordLabel htmlFor="word18">{word[18][1]}</WordLabel>
            </WordDiv>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <WordDiv>
              <WordRadioButton id="word19" type="radio" value={word[19][0]} />
              <WordLabel htmlFor="word19">{word[19][1]}</WordLabel>
            </WordDiv>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <WordDiv>
              <WordRadioButton id="word20" type="radio" value={word[20][0]} />
              <WordLabel htmlFor="word20">{word[20][1]}</WordLabel>
            </WordDiv>
          </Paper>
        </Grid>
      </React.Fragment>
    );
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
