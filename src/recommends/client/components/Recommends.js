import React from 'react';
import axios from 'axios';
import socketIO from 'socket.io-client';
import Tracks from './tracks.js';
import { Refresh, Container, Toggle, Header, Info, Arrow, Title, Flex } from './styles.js';

class Recommends extends React.Component {
  constructor() {
    super();
    this.socket = null;
    this.state = {
      tracks: [],
      fade: false,
      class: "fas fa-caret-down"
    }
  }

  componentDidMount() {
    this.socket = socketIO.connect('http://54.218.79.7:3000')
    this.getRecommends();
  }

  getRecommends() {
    // axios.get('http://localhost:3003/recommends')
    //   .then(res => {
    //     this.setState({ tracks: res.data });
    //   })
    //   .catch(err => { console.log(err); });
    this.socket.emit('getRecommendsData', (data) => {
      this.setState({ tracks: data })
    })
  }

  handleToggle() {
    if (this.state.fade) {
      this.setState({
        fade: false,
        class: "fas fa-caret-down"
      });
    } else {
      this.setState({
        fade: true,
        class: "fas fa-caret-up"
      });
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <div>
            <Toggle>
              <Flex onClick={this.handleToggle.bind(this)}>
                <Title>Recommended Songs</Title>
                <Arrow className={this.state.class}></Arrow>
              </Flex>
            </Toggle>
            <Info>Much lorem. Such ipsum.</Info>
          </div>
          <Refresh fade={this.state.fade} onClick={this.getRecommends.bind(this)}>REFRESH</Refresh>
        </Header>
        <Tracks fade={this.state.fade} tracks={this.state.tracks}/>
      </Container>
    );
  }
}

window.Recommends = Recommends
export default Recommends