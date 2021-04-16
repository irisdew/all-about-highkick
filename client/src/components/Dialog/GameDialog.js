import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gameClose } from '../../actions';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import { MdClose } from 'react-icons/md';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <MdClose />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function GameDialog() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.game.open);
  const ball = useSelector((state) => state.game.ball);

  const handleClose = () => {
    dispatch(gameClose());
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          하이킥 추억 돌아보기
        </DialogTitle>
        <DialogContent dividers style={{ textAlign: 'center' }}>
          <img
            // 이미지 번호는 ball.key
            alt="gacha_1"
            src="/images/game/gacha_1.png"
            style={{ width: '80%' }}
          />
          <h2>{ball.quote}</h2>
          <h3>당신의 추억은 "nickname"입니다</h3>
          {/* 나중에 ball.nickname으로 넣을 것임 */}
          <Typography gutterBottom>
            {ball.question.map((line) => {
              return <p>{line}</p>;
            })}
          </Typography>
          <Typography gutterBottom>
            <h3>
              {ball.description}
              {/* 순재가 노트북에 <b>얏옹~</b>을 외친 횟수는 <b>14번</b> 입니다. */}
            </h3>
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
