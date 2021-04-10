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
      <div
        style={{
          width: '70%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '1vw',
        }}
      >
        {!isDA && <p>우리가 익히 알고 있는 하이킥의 인물 관계입니다.</p>}
        {isDA && (
          <p>
            대본 데이터 분석 결과 함께 있는 씬의 횟수로 집계된 하이킥의 인물
            관계입니다.
          </p>
        )}
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
      </div>
      <Map isDA={isDA} />
    </div>
  );
}

export default Characters;
