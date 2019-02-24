import React from 'react';
import axios from 'axios';
import Tracks from './tracks.jsx';
import { Refresh, Container, Toggle, Header, Info, Arrow, Title, Flex } from './styles.js';

export default class Recommends extends React.Component {
  constructor() {
    super();
    this.state = {
      tracks: [],
      fade: false,
      class: 'fas fa-caret-down',
      playing: -1,
      added: -1
    };

    this.getRecommends = this.getRecommends.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.updatePlay = this.updatePlay.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.resetAdded = this.resetAdded.bind(this);
  }

  componentDidMount() {
    this.getRecommends();
  }

  getRecommends() {
    // axios.get('http://localhost:3003/recommends/10')
    //   .then(res => {
    //     this.setState({
    //       tracks: res.data,
    //       playing: -1
    //     });
    //   })
    //   .catch(err => { console.log(err); });
    this.props.socket.emit('getRecommendsData', (data) => {
      this.setState({
        tracks: data,
        playing: -1
      });
    });
  }

  handleToggle() {
    if (this.state.fade) {
      this.setState({
        fade: false,
        class: 'fas fa-caret-down'
      });
    } else {
      this.setState({
        fade: true,
        class: 'fas fa-caret-up'
      });
    }
  }

  updatePlay(id) {
    this.setState({
      playing: id
    });
    this.props.socket.emit('doPlayTrack', {
      emitter: 'Recommends',
      track_id: id
    });
  }

  removeTrack(id) {

    this.props.socket.emit('addToPlaylist', id);

    let arr = this.state.tracks;
    
    const getSong = () => {
      return axios.get('http://localhost:3003/recommends/1')
        .then(res => {
          for (let obj of arr) {
            if (obj.track_id === res.data[0].track_id) {
              return getSong();
            }
          }
          return res;
        });
    };

    getSong()
      .then(res => {
        
        let playing = this.state.playing;

        arr.splice(id, 1);
        arr = arr.concat(res.data);

        if (playing === id) {
          playing = -1;
        } else if (playing > id) {
          playing--;
        }

        this.setState({
          tracks: arr,
          playing,
          added: id
        });
      })
      .catch(err => { console.log(err); });
  }

  resetAdded() {
    this.setState({ added: -1 });
  }

  render() {
    return (
      <Container>
        <Header>
          <div>
            <Toggle>
              <Flex onClick={this.handleToggle}>
                <Title>Recommended Songs</Title>
                <Arrow className={this.state.class}></Arrow>
              </Flex>
            </Toggle>
            <Info>Songs that you might like.</Info>
          </div>
          <Refresh fade={this.state.fade} onClick={this.getRecommends}>REFRESH</Refresh>
        </Header>
        <Tracks
          fade={this.state.fade}
          tracks={this.state.tracks}
          playing={this.state.playing}
          added={this.state.added}
          resetAdded={this.resetAdded}
          updatePlay={this.updatePlay}
          removeTrack={this.removeTrack}
        />
      </Container>
    );
  }
}