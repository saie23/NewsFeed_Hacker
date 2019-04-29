import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import reducer from '../src/reducers';


/**
 * Create a testing store with imported reducers, middleware, and initial state
 * globals: reducer
 * @param {object} initialState - Initial State for Store
 * @function storeFactory
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => {
  return createStore(reducer, initialState);
}
/**
 * Takes a ShallowWrapper and finds the node(s) to be tested
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Wrapper to be tested
 * @param {*} value - value for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test='${value}']`);
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes,
    conformingProps,
    'props',
    component.name);
  expect(propError).toBeUndefined;
}