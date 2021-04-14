import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { BsCardChecklist } from 'react-icons/bs';
import { IoHomeOutline, IoGameControllerOutline } from 'react-icons/io5';
import { GiOrganigram } from 'react-icons/gi';

import { useDispatch } from 'react-redux';
import { home } from '../../actions';

export default function SimpleBottomNavigation() {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(event.target.key);
        console.log(value);
      }}
      showLabels
    >
      <BottomNavigationAction
        key={0}
        label="Home"
        onMouseOver={() => dispatch(home(0))}
        icon={<IoHomeOutline />}
      />

      <BottomNavigationAction
        key={1}
        label="Test"
        onMouseOver={() => dispatch(home(1))}
        icon={<BsCardChecklist />}
      />
      <BottomNavigationAction
        key={2}
        label="Game"
        onMouseOver={() => dispatch(home(2))}
        icon={<IoGameControllerOutline />}
      />
      <BottomNavigationAction
        key={3}
        label="Characters"
        onMouseOver={() => dispatch(home(3))}
        icon={<GiOrganigram />}
      />
    </BottomNavigation>
  );
}
