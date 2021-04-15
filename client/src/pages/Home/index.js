import React from 'react';
import styled from 'styled-components';
import { Television } from '../../components/Television';
import { Article } from '../../components/Article';
import Remocon from '../../components/Remocon';

function Home() {
  const Container = styled.div`
    top: 10vh;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-basis: auto;
    margin-bottom: 5vh;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  `;

  return (
    <>
      <Container>
        <Television />
        <Article />
      </Container>
      <Container>
        <Remocon />
      </Container>
    </>
  );
}

export default Home;
