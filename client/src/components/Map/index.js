import React, { useState } from 'react';
import MapOrigin from './MapOrigin';
import MapDA from './MapDA';

import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function Map({ isDA }) {
  return (
    <>
      {!isDA && <MapOrigin />}
      {isDA && <MapDA />}
    </>
  );
}
