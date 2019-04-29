import React from 'react';
import {shallow} from 'enzyme';

import { findByTestAttr } from '../../testUtils';
import Header from '../../components/Header';

/**
 * Factory function to create a ShallowWrapper for the Header Component
 * @function setup 
 * @returns {ShallowWrapper}
 */
const setup = () => {
   return shallow(<Header />);
}

it('renders without errors', () => {
  const wrapper = setup();
  const headerComponent = findByTestAttr(wrapper, 'component-header');
  expect(headerComponent.length).toBe(1);
})

it('upon rendering has a non-empty text in child node', () => {
  const wrapper = setup();
  const headerTextNode = findByTestAttr(wrapper, 'header-text');
  expect(headerTextNode.text()).not.toBeNull();
})