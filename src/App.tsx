import React from 'react';
import './App.scss';
import './normalize.css';
import { Cats } from './Components/Cats/Cats';
import { Container } from './Components/Container/Container';
import { Wrapper } from './Components/Wrapper/Wrapper';

function App() {

  return (
    <>
      <Wrapper>
        <Container>
          <Cats />
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
