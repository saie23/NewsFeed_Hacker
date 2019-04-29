import React from 'react';
import {shallow} from 'enzyme';

import { findByTestAttr } from '../../testUtils';
import Comment from '../../components/feeds/Comment';

/**
 * Factory function to create a ShallowWrapper for the Feed Component
 * @function setup 
 * @returns {ShallowWrapper}
 */
const setup = (props) => {
    return shallow(<Comment {...props}/>);
 }

it('renders without errors', () => {
   const comment = {
       by: 'John Doe',
       text: 'Hello World',
       time: 1
   }
   const wrapper = setup({comment});
   const commentComponent = findByTestAttr(wrapper, 'component-comment');

   // renders correctly
   expect(commentComponent.length).toBe(1)

   // renders the by correctly
   const authorSpan = findByTestAttr(wrapper, 'span-author');
   expect(authorSpan.text()).toMatch('John Doe');

   // renders the text correctly
   const textSpan = findByTestAttr(wrapper, 'span-text');
   expect(textSpan.html()).toContain('Hello World');

   // renders the date correctly
   const dateDiv = findByTestAttr(wrapper, 'div-date');
   expect(dateDiv.text()).toMatch(new Date(1).toDateString());
});

