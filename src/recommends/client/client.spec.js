import React from 'react';
// import axios from 'axios';
import { mount, shallow, render } from 'enzyme';
import 'babel-polyfill';

import Recommends from './components/recommends';
// import Tracks from './components/tracks';
// import Track from './components/track';

describe('recommends', () => {
  it('should render', () => {
    const component = mount(<Recommends />);

    expect(component).toMatchSnapshot();
  });
});

// describe('tracks', () => {
//   it('should render', () => {
//     const component = shallow(<Tracks />);

//     expect(component).toMatchSnapshot();
//   });
// });

// describe('track', () => {
//   it('should render', () => {
//     const component = shallow(<Track />);

//     expect(component).toMatchSnapshot();
//   });
// });