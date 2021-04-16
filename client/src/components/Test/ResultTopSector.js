import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import baseUrl from '../../url/http';

const TopSectorTitle = styled.h1`
  color: black;
  font-size: 5.5vh;
  margin-top: 1vh;
  margin-bottom: 2vh;
`;
const TopSectorImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
`;
const TopSectorImage = styled.img`
  width: 25vw;
  height: 30vh;
`;
const TopSectorDescription = styled.h3`
  color: black;
  font-size: 4vh;
  margin-top: 3vh;
  margin-bottom: 0;
`;
function ResultTopSector(props) {
  const userName = useSelector((state) => state.test.name);

  useEffect(() => {}, []);
  return (
    <>
      <TopSectorTitle>
        {userName}님은 {props.nickName} {props.name}
      </TopSectorTitle>
      <TopSectorImageContainer>
        <TopSectorImage
          src={`${baseUrl}/image/result/${props.image}`}
          alt={props.name}
        />
      </TopSectorImageContainer>
      <TopSectorDescription>{props.desc}</TopSectorDescription>
    </>
  );
}

export default ResultTopSector;
