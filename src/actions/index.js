import axios from 'axios';
import { FETCH_STORIES, FETCH_COMMENTS } from './types';

export const fetchTopTenStories = () => async dispatch => {
    let response = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
   response =response.data.sort().reverse().slice(0, 10);
   response = response.map(async item => {
       return await axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json`);
   })
     
      let finalResponse;
      Promise.all(response).then(res=>{
      finalResponse = res.reduce((accumulator, currentValue) => {
        if (!accumulator[currentValue.data.id]) {
          accumulator[currentValue.data.id] = currentValue.data;
        } 
        return accumulator;
      }, {})
      return dispatch({type: FETCH_STORIES, payload:finalResponse})
    });
}

export const fetchComments = (commentsIds, storyId, comments, callback) => async dispatch => {
  let response = commentsIds.map(async commentId => {
    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`)
  });
  
  let finalResponse;
  Promise.all(response).then(resp => {
    finalResponse = resp.reduce((accumulator, currentValue) => {
    if(!accumulator[currentValue.data.id]){
      accumulator[currentValue.data.id] = currentValue.data;
    }
    return accumulator;
    }, {})
    return dispatch({type: FETCH_COMMENTS, payload:{[storyId]:{...comments, ...finalResponse}}})
  });
  callback();
}