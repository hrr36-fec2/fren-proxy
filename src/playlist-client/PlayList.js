import React from 'react';

import List from './components/List';
import Info from './components/Info';

import ContextWrap from './components/Context.js';
import { Container } from './components/Styled.js';

const PlayList = (props) => {
  return (
    <ContextWrap socket={props.socket}>
      <Container>
        <Info />
        <List />
      </Container>
    </ContextWrap>
  );
};

export default PlayList;