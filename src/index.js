import React from 'react';
import ReactDOM from 'react-dom';

import PlayList from './playlist/PlayList.js';
import Recommends from './recommends/client/components/Recommends.js';

// console.log(Recommends);

const App = () => {
  return (
    <div>
      <PlayList />
      <Recommends />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);