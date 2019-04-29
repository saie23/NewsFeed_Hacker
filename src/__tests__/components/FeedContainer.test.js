import React from 'react';
import {shallow} from 'enzyme';

import { findByTestAttr, checkProps } from '../../testUtils';
import FeedContainer, { UnconnectedFeedContainer } from '../../components/feeds/FeedContainer';

/**
 * Factory function to create a ShallowWrapper for the FeedContainer Component
 * @function setup 
 * @param {object} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */

it('fetchTopTenStories is triggered when the component mounts', () => {
  const fetchTopTenStoriesMock = jest.fn();

  // Set up FeedContainer component with fetchToptenStories as prop
  const wrapper = shallow(<UnconnectedFeedContainer fetchTopTenStories={fetchTopTenStoriesMock}/>);

  // run lifecycle method
  wrapper.instance().componentDidMount();

  //check to see if mock ran 
  const fetchTopTenStoriesCallCount = fetchTopTenStoriesMock.mock.calls.length;
  expect(fetchTopTenStoriesCallCount).toBe(1);
});



