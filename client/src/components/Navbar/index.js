import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink as Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

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
          About
        </MenuLink>
        <MenuLink to="/test" activeStyle>
          Test
        </MenuLink>
        <MenuLink to="/game" activeStyle>
          Game
        </MenuLink>
        <MenuLink to="/characters" activeStyle>
          Characters
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