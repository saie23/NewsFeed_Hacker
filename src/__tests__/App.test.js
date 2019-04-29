import React from 'react';
import {shallow} from 'enzyme';

import { findByTestAttr } from '../testUtils';

import App from '../App';

/**
 * Factory function for setup
 * @function setup
 * @returns {ShallowWrapper}
 */

 const setup = ()=>{
    return shallow(<App />);
 }

 it('renders without errors', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
 })