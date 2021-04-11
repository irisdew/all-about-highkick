import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { BsCardChecklist } from 'react-icons/bs';
import { IoHomeOutline, IoGameControllerOutline } from 'react-icons/io5';
import { GiOrganigram } from 'react-icons/gi';

import { useSelector, useDispatch } from 'react-redux';
import { home } from '../../actions';

export default function Remocon() {
  const isSelected = useSelector((state) => state.homeSelect);
  const dispatch = useDispatch();

  return (
    <BottomNavigation value={isSelected} showLabels>
      <BottomNavigationAction
        key={0}
        label="Home"
        onClick={() => dispatch(home(0))}
        icon={<IoHomeOutline />}
      />

      <BottomNavigationAction
        key={1}
        label="Test"
        onClick={() => dispatch(home(1))}
        icon={<BsCardChecklist />}
      />
      <BottomNavigationAction
        key={2}
        label="Game"
        onClick={() => dispatch(home(2))}
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
