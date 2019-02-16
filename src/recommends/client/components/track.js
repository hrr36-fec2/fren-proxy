import React from 'react';
import { Item, Wrap, Title, Icon, Info, Button } from './styles.js';

export default class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'fas fa-music'
    };
  }

  handlePlay() {
    console.log('PLAY');
  }

  handleAdd() {
    console.log('ADD');
  }

  render() {
    return (
      <Item onMouseEnter={() => {this.setState({ class: 'fas fa-play' })}} onMouseLeave={() => {this.setState({ class: 'fas fa-music' })}}>
        <Icon className={this.state.class} onClick={this.handlePlay.bind(this)}></Icon>
        <Wrap>
          <Title>{this.props.ele.title}</Title>
          <Info>{this.props.ele.artist + ' \u00B7 ' + this.props.ele.album}</Info>
        </Wrap>
        <Button onClick={this.handleAdd.bind(this)}>ADD</Button>
      </Item>
    );
  }
}