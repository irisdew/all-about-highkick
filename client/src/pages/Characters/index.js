import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import MapOrigin from '../../components/Map/MapOrigin';
import MapDA from '../../components/Map/MapDA';
import MapToolTip from '../../components/Dialog/MapTooltip';
import Character from '../../components/Character';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

import { MdClose } from 'react-icons/md';

function Characters() {
  const selectedName = useSelector((state) => state.character.name);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/data/character_detail.json')
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data[0]);
        setData(response.data[0]);
      });
  }, []);

  const [isDA, setIsDA] = useState(false);

  function handleChange() {
    setIsDA(!isDA);
  }

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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90vw',
        height: '90vh',
        margin: 'auto',
      }}
    >
      <div
        style={{
          width: '70%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '1vw',
        }}
      >
        {isDA && <p>우리가 익히 알고 있는 하이킥의 인물 관계입니다.</p>}
        {!isDA && (
          <p>
            대본 데이터 분석 결과 함께 있는 씬의 횟수로 집계된 하이킥의 인물
            관계입니다.
          </p>
        )}
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <FormControlLabel
            control={
              <Switch
                checked={isDA}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Data Analysis"
          />
          <MapToolTip />
        </div>
      </div>
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
              <Character data={data} />
            </Dialog>
          </div>
        )}
      </>
    </div>
  );
}

export default Characters;
