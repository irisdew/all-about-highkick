import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button>
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
            alt="gacha_1"
            src="/images/game/gacha_1.png"
            style={{ width: '80%' }}
          />
          <h2>"얏옹~ 나와라~"</h2>
          <h4>당신의 추억은 "야동순재"입니다</h4>
          <Typography gutterBottom>
            시리와 빅스비를 앞서간 음성인식 노트북! <br />
            순재가 노트북에 외친 ‘얏옹~’은 총 몇 번일까요 ?
          </Typography>
          <Typography gutterBottom>
            <p>
              순재가 노트북에 <b>얏옹~</b>을 외친 횟수는 <b>14번</b> 입니다.
            </p>
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
