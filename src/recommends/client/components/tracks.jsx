import React from 'react';
import Track from './track.jsx';
import { List } from './styles.js';

class Tracks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List fade={this.props.fade}>
        {this.props.tracks.map((ele, id) => {
          return (
            <li key={ele.track_id}>
              <Track
                ele={ele}
                id={id}
                playing={this.props.playing}
                added={this.props.added}
                resetAdded={this.props.resetAdded}
                updatePlay={this.props.updatePlay}
                removeTrack={this.props.removeTrack}
              />
            </li>
          );
        })}
      </List>
    );
  }
}

export default Tracks;
