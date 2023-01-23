import React from 'react';
import './App.scss';
import './normalize.css';
import { Cats } from './Components/Cats/Cats';
import { Wrapper } from './Components/Wrapper/Wrapper';
import { Main } from './Components/Main/Main';

function App() {

  return (
    <>
      <Wrapper>
        <Main >
          <Cats />
        </Main>
      </Wrapper>
    </>
  );
}

export default App;
