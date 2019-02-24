import React from 'react';
import { Item, Wrap, Title, Icon, Info, Subinfo, Button, Flex} from './styles.js';

export default class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'fas fa-music',
      playing: false
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidUpdate() {
    if (!this.state.playing && this.props.playing === this.props.id) {
      this.setState({ playing: true });
    } else if (this.state.playing && this.props.playing !== this.props.id) {
      this.setState({ playing: false });
    }

    if (this.props.id === this.props.added && this.state.class !== 'fas fa-play') {
      this.handleMouseEnter();
      this.props.resetAdded();
    }
  }

  handleMouseEnter() {
    this.setState({ class: 'fas fa-play' });
  }

  handleMouseLeave() {
    this.setState({ class: 'fas fa-music' });
  }

  handlePlay() {
    if (this.state.playing) {
      this.props.updatePlay(-1);
    } else {
      this.props.updatePlay(this.props.id);
    }
  }

  handleAdd() {
    this.props.removeTrack(this.props.id);
  }

  render() {
    return (
      <Item onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <Icon
          className={this.state.playing ? 'fas fa-pause' : this.state.class}
          playing={this.state.playing} fas={this.state.class}
          onClick={this.handlePlay}
        >
        </Icon>
        <Wrap>
          <Title playing={this.state.playing}>{this.props.ele.title}</Title>
          <Flex>
            <Subinfo playing={this.state.playing}>{this.props.ele.artist}</Subinfo>
            <Info>&nbsp; {'\u00B7'} &nbsp;</Info>
            <Subinfo>{this.props.ele.album}</Subinfo>
          </Flex>
        </Wrap>
        <Button onClick={this.handleAdd}>ADD</Button>
      </Item>
    );
  }
}