import React from 'react';
import Map from '../../components/Map';

function Characters() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90vw',
        height: '90vh',
        margin: 'auto',
      }}
    >
      <Map />
    </div>
  );
}

export default Characters;
