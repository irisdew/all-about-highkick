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
        label="홈"
        onClick={() => dispatch(home(0))}
        icon={<IoHomeOutline />}
      />

      <BottomNavigationAction
        key={1}
        label="테스트"
        onClick={() => dispatch(home(1))}
        icon={<BsCardChecklist />}
      />
      <BottomNavigationAction
        key={2}
        label="게임"
        onClick={() => dispatch(home(2))}
        icon={<IoGameControllerOutline />}
      />
      <BottomNavigationAction
        key={3}
        label="캐릭터"
        onMouseOver={() => dispatch(home(3))}
        icon={<GiOrganigram />}
      />
    </BottomNavigation>
  );
}
