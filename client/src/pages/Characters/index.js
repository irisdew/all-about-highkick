import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Map from '../../components/Map';

function Characters() {
  const [isDA, setIsDA] = useState(false);

  function handleChange() {
    setIsDA(!isDA);
  }

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
      <FormControlLabel
        style={{
          alignSelf: 'flex-end',
          marginTop: '1vw',
        }}
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
      <Map isDA={isDA} />
    </div>
  );
}

export default Characters;
