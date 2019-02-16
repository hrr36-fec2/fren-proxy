import React from 'react';
import Track from './track.js';
import { List } from './styles.js';

class Tracks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List fade={this.props.fade}>
        {this.props.tracks.map(ele => {
          return (
            <li key={ele.track_id}>
              <Track ele={ele}/>
            </li>
          )
        })}
      </List>
    );
  }
}

export default Tracks;
