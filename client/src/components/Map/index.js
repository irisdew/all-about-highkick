import React, { useState } from 'react';
import MapOrigin from './MapOrigin';
import MapDA from './MapDA';
import Character from '../Character';

import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { MdClose } from 'react-icons/md';
import Slide from '@material-ui/core/Slide';

export default function Map({ isDA }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <>
      {!isDA && <MapOrigin onClick={handleClickOpen} />}
      {isDA && <MapDA />}

      {open && (
        <div>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <AppBar color="default">
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <MdClose />
                </IconButton>
                <Typography variant="h6">나문희</Typography>
              </Toolbar>
            </AppBar>
            <Character />
          </Dialog>
        </div>
      )}
    </>
  );
}
