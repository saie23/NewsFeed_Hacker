import { FETCH_STORIES } from '../actions/types';
const INITIAL_STATE = {};

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
      case FETCH_STORIES:
        return {...state, ...action.payload};
      default:
        return state;
    }
}