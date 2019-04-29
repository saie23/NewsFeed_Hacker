import React, {Fragment} from 'react';

import CommentContainer from './CommentContainer';

const renderStory = ({ id, by, kids, score, time, title, url }) => {
  return (
        <div className='card' id={id} data-test='component-feed'>
          <header>
            <a href={url} target="blank"><h1>{title}</h1></a>
            <p>By: {by}</p>
          </header>
          <main>
            <section>
              <CommentContainer commentIds = {kids} storyId={id}/>
            </section>
          </main>
          <footer>
            <span>
              Score: {score}
            </span>
            <span>
              Date: {new Date(time*1000).toDateString()}
            </span>
          </footer>
          </div>)
}
const Feed = (props) => {
    const { story } = props;
    return(
    <Fragment>
      {renderStory(story)}
    </Fragment>)
}

export default Feed;