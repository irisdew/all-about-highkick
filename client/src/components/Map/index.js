import React, { useState } from 'react';
import MapOrigin from './MapOrigin';
import MapDA from './MapDA';

export default function Map({ isDA }) {
  return (
    <>
      {!isDA && <MapOrigin />}
      {isDA && <MapDA />}
    </>
  );
}
