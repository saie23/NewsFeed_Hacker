import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../testUtils';
import CommentContainer, {UnconnectedCommentContainer} from '../../components/feeds/CommentContainer';

/**
 * Factory function to create a ShallowWrapper for the FeedContainer Component
 * @function setup 
 * @param {object} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
    return shallow(<UnconnectedCommentContainer />);
 }

it('renders without errors', () => {
  const wrapper = setup();
  const CommentContainer = findByTestAttr(wrapper, 'component-comment-container');
  expect(CommentContainer.length).toBe(1);
});