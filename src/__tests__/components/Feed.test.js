import React from 'react';
import {shallow} from 'enzyme';

import { findByTestAttr } from '../../testUtils';
import Feed from '../../components/feeds/Feed';

/**
 * Factory function to create a ShallowWrapper for the Feed Component
 * @function setup 
 * @returns {ShallowWrapper}
 */
const setup = (props) => {
    return shallow(<Feed {...props}/>);
 }

it('renders without errors', () => {
   const story = {
    id: 1,
    by: 'John Doe',
    kids: [], 
    score: 0, 
    time:0, 
    title: 'Hello World', 
    url: 'localhost'
   }
   const wrapper = setup({story});
   const feed = findByTestAttr(wrapper, 'component-feed');

   // feed renders correctly
   expect(feed.length).toBe(1);

   // feed contains three children header, main, and footer
   expect(feed.children().length).toBe(3);

   // feed displays a title of Hello World
   expect(feed.childAt(0).childAt(0).html()).toContain('Hello World');

   // feed displays a title of Hello World
   expect(feed.childAt(0).childAt(1).html()).toContain('John Doe');


});


