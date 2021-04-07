import React from 'react';
import styled from 'styled-components';
import Pagination from '@material-ui/lab/Pagination';

const PageNavContainer = styled.div`
  width: 30vw;
  border: 2px solid black;
`;

function PageNav(props) {
  return (
    <PageNavContainer>
      {/* props(qNumber)값에 동적으로 count 제어 */}
      <Pagination count={12} variant="outlined" color="secondary" />
    </PageNavContainer>
  );
}

export default PageNav;
