import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PlayList from '../PlayList.js';

import Info from '../components/Info';
import List from '../components/List';

Enzyme.configure({ adapter: new Adapter() });

describe('components should load properly', () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<PlayList />);
  });
  it('should have an Info', () => {
    expect(wrapped.find(Info).length).toEqual(1);
  });
  it('should have an List', () => {
    expect(wrapped.find(List).length).toEqual(1);
  });
});


