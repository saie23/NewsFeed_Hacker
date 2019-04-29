import React, { Fragment } from 'react';
import isEmpty from 'lodash.isempty';
import Feed from './Feed';

const displayStories = (stories) => {
  return Object.keys(stories).map(id => {
      return(<Feed key={id} story={stories[id]}/>)
  })
}
const FeedView = (props) => {
    const { stories } = props;
    return(
    <Fragment>
        <div className="container">
          {isEmpty(stories)?'Loading...':displayStories(stories)} 
        </div> 
    </Fragment>)
}
export default FeedView;