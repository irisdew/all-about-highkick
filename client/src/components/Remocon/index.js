import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { BsCardChecklist, BsFillPersonCheckFill } from 'react-icons/bs';
import { IoGameControllerOutline } from 'react-icons/io5';
import { GiOrganigram } from 'react-icons/gi';
import { AiOutlineHome } from 'react-icons/ai';

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
        icon={<AiOutlineHome />}
      />
      <BottomNavigationAction
        key={1}
        label="게임"
        onClick={() => dispatch(home(1))}
        icon={<IoGameControllerOutline />}
      />
      <BottomNavigationAction
        key={2}
        label="캐릭터"
        onClick={() => dispatch(home(2))}
        icon={<BsFillPersonCheckFill />}
      />

      <BottomNavigationAction
        key={3}
        label="고사"
        onClick={() => dispatch(home(3))}
        icon={<BsCardChecklist />}
      />

      <BottomNavigationAction
        key={4}
        label="관계도"
        onMouseOver={() => dispatch(home(4))}
        icon={<GiOrganigram />}
      />
    </BottomNavigation>
  );
}
