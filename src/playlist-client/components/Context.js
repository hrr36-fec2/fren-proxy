import React from 'react';
import axios from 'axios';
import socketIO from 'socket.io-client';

export const PlayListContext = React.createContext();

export default class ContextWrap extends React.Component {
  constructor() {
    super();
    this.socket = null;
    this.state = {
      isPlaying : false,
      activeTrack: '',
      activeTrackDuration: '',
      playlist_owner: '',
      playlist_name: '',
      playlist_id: '',
      song_tracks: [],
      song_count: 0
    }
  }
  componentDidMount() {
    this.socket = socketIO().connect('http://54.218.79.7:3000');
    this.fetchCurrentPlaylistData();
  }
  fetchCurrentPlaylistData = () => {
    // axios
    //   .get('http://localhost:3002/api/playlist/1')
    //   // .get('/api/playlist/1')
    //   .then((results) => {
    //     if (!results) {
    //       throw 'failed to get data';
    //     }
    //     let songs = JSON.parse(results.data.songs);
    //     this.setState({
    //       playlist_owner: results.data.owner,
    //       playlist_name: results.data.name,
    //       playlist_id: results.data._id,
    //       song_tracks: songs,
    //       song_count: songs.length - 1
    //     });
    //     return;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    this.socket.emit('getPlaylistData', '1', (data) => {
      let songs = JSON.parse(data.songs);
      this.setState({
        playlist_owner: data.owner,
        playlist_name: data.name,
        playlist_id: data._id,
        song_tracks: songs,
        song_count: songs.length - 1
      });
    });
  }
  changeActiveTrack = (track_id, track_duration) => {
    this.setState({
      activeTrack: track_id,
      activeTrackDuration: track_duration
    });
  }
  handlePlayClick = (track_id, track_duration) => {
    this.setState({
      isPlaying: !this.state.isPlaying
    });
    this.changeActiveTrack(track_id, track_duration);
  }
  handleRemoveTrack = (index, track_id) => {
    let newList = [...this.state.song_tracks];
    newList.splice(index, 1);
    this.setState({
      song_tracks: newList
    });
    // TODO : api call to remove base on track_id
  }
  render() {
    let ctx = {
      ...this.state,
      handlePlayClick: this.handlePlayClick,
      changeActiveTrack: this.changeActiveTrack,
      handleRemoveTrack: this.handleRemoveTrack
    }
    return (
      <PlayListContext.Provider value={ctx}>
        {this.props.children}
      </PlayListContext.Provider>
    )
  }
}

// {"track_id": "89433", "track_title": "nostalgia of an ex-gangsta-rapper", "track_duration": "00:05:30", "artist_name": "deef", "album_title": "Beat Scene Routine", "album_image_file": "images/albums/deef_-_Beat_Scene_Routine_-_20130821140335983.jpg", "track_url": "https://freemusicarchive.org/music/no_curator/deef/Beat_Scene_Routine/deef_-_04_-_nostalgia_of_an_ex-gangsta-rapper.mp3"}
