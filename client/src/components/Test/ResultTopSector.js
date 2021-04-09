import React from 'react';
import styled from 'styled-components';

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

// props : 검사 결과, 매칭 캐릭터 정보 객체 ( 내 이름, 캐릭터 매핑정보 )
// 매칭 캐릭터별
// 변해야 할 것들 : 캐릭터 형용사, 캐릭터 이름, 캐릭터 이미지, 캐릭터 설명 멘트

function ResultTopSector(props) {
  return (
    <>
      <TopSectorTitle>
        {props.userName}님은 {'엉뚱발랄'} {'나문희'}
      </TopSectorTitle>
      <TopSectorImageContainer>
        <TopSectorImage src="/images/moonhee.png" alt={'나문희'} />
      </TopSectorImageContainer>
      <TopSectorDescription>
        {/* 캐릭터 설명멘트 */}
        "나도 알어 !! 호박고무마 !!" <br />
        엉뚱발랄 나문희와 성향이 비슷하시군요 !! <br />
        하이킥 가족들중에서 억울하면서도 귀여운 면이 많은 캐릭터입니다. <br />
      </TopSectorDescription>
    </>
  );
}

export default ResultTopSector;
