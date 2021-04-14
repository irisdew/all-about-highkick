import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { testPage, testUserName, testSurveyNumber } from '../../actions';
import styled from 'styled-components';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink as Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();

  return (
    <Nav>
      <Logo to="/">하이킥 완전정복</Logo>
      {isOpen ? (
        <Close onClick={handleClick} />
      ) : (
        <Bars onClick={handleClick} />
      )}
      <Menu isOpen={isOpen}>
        <MenuLink to="/about" activeStyle>
          소개
        </MenuLink>
        <MenuLink to="/game" activeStyle>
          추억의 뽑기게임
        </MenuLink>
        <MenuLink
          to="/test"
          activeStyle
          onClick={() => {
            dispatch(testPage(1));
            dispatch(testUserName(''));
            dispatch(testSurveyNumber(1));
          }}
        >
          나와 닮은 캐릭터
        </MenuLink>
        <MenuLink to="/gosa" activeStyle>
          하이킥 고사
        </MenuLink>
        <MenuLink to="/characters" activeStyle>
          인물관계도
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  border-bottom: solid lightgray 1px;
`;

const Logo = styled(Link)`
  padding: 1rem 0;
  color: #000;
  text-decoration: none;

  font-weight: 900;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    font-weight: 800;
    width: 100vw;
    font-size: 1rem;
    margin-left: 3vw;
  }
`;

const Bars = styled(AiOutlineMenu)`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 5vw;
    cursor: pointer;
  }
`;

const Close = styled(AiOutlineClose)`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 5vw;
    cursor: pointer;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media (max-width: 768px) {
    overflow: hidden;
    position: fixed;
    justify-content: flex-end;
    top: 8rem;
    left: 30vh;
    flex-direction: column;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    background: #fff;
  }
`;

const MenuLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #0984e3;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1.5vh;
    justify-content: flex-end;
  }
`;
