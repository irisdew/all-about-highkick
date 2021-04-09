import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const ContentContainer = styled.div`
  padding-top: 40vh;
`;
const LoadingMention = styled.h3``;

function TestRoading() {
  return (
    <ContentContainer>
      <CircularProgress />
      <LoadingMention>로딩중 페이지...</LoadingMention>
    </ContentContainer>
  );
}

export default TestRoading;
