import React from 'react';
import ReactDOM from 'react-dom';

// import PlayList from './playlist/PlayList.js';
import PlayList from './playlist-client/PlayList.js';
import Recommends from './recommends/client/components/Recommends.js';

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