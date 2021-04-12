import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const TopSectorTitle = styled.h1``;
const TopSectorImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
`;
const TopSectorImage = styled.img`
  width: 400px;
  height: 300px;
`;
const TopSectorDescription = styled.p``;

// API : 매칭 캐릭터 정보 객체 ( 캐릭터 매핑정보 )
// => 캐릭터 이름, 캐릭터이미지경로, 결과멘트
// 매칭 캐릭터별
// 변해야 할 것들 : 캐릭터 형용사, 캐릭터 이름, 캐릭터 이미지, 캐릭터 설명 멘트

function ResultTopSector() {
  const userName = useSelector((state) => state.test.name);

  useEffect(() => {}, []);
  return (
    <>
      <TopSectorTitle>
        {userName}님은 {'엉뚱발랄'} {'나문희'}
      </TopSectorTitle>
      <TopSectorImageContainer>
        <TopSectorImage src="/images/moonhee.png" alt={'나문희'} />
      </TopSectorImageContainer>
      <TopSectorDescription>
        {/* 결과멘트 */}
        "나도 알어 !! 호박고무마 !!" <br />
        엉뚱발랄 나문희와 성향이 비슷하시군요 !! <br />
        하이킥 가족들중에서 억울하면서도 귀여운 면이 많은 캐릭터입니다. <br />
      </TopSectorDescription>
    </>
  );
}

export default ResultTopSector;
