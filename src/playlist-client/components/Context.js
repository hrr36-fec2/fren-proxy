import React from 'react';

export const PlayListContext = React.createContext();

export default class ContextWrap extends React.Component {
  constructor() {
    super();
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
    this.fetchCurrentPlaylistData();
    this.props.socket.on('resetOther', (payload)=> {
      if (!(payload.emitter === 'PlayList')) {
        this.setState({ isPlaying: false })
      }
    });
    this.props.socket.on('newTrackAdded', (data) => {
      let addedSong = JSON.parse(data.songs);
      this.setState({
        song_tracks: this.state.song_tracks.concat(addedSong[0])
      });
    });
    this.props.socket.on('playerStart', () => {
      this.setState({
        isPlaying: !this.state.isPlaying
      });
    });
  }
  fetchCurrentPlaylistData = () => {
    this.props.socket.emit('getPlaylistData', '1', (data) => {
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
    this.props.socket.emit('doPlayTrack', {
      emitter: 'PlayList',
      track_id
    });
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
