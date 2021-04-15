import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

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
const TopSectorDescription = styled.p`
  color: black;
  font-size: 4vh;
  margin-top: 3vh;
  margin-bottom: 0;
`;

// API : 매칭 캐릭터 정보 객체 ( 캐릭터 매핑정보 )
// => 캐릭터 이름, 캐릭터이미지경로, 결과멘트
// 매칭 캐릭터별
// 변해야 할 것들 : 캐릭터 형용사, 캐릭터 이름, 캐릭터 이미지, 캐릭터 설명 멘트

function ResultTopSector(props) {
  const userName = useSelector((state) => state.test.name);

  useEffect(() => {}, []);
  return (
    <>
      <TopSectorTitle>
        {userName}님은 {props.nickName} {props.name}
      </TopSectorTitle>
      <TopSectorImageContainer>
        <TopSectorImage src={props.img} alt={props.name} />
      </TopSectorImageContainer>
      <TopSectorDescription>{props.desc}</TopSectorDescription>
    </>
  );
}

export default ResultTopSector;
