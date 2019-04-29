import React, { Fragment } from 'react';


const createMarkup = (text) => {
    return {__html: text};
}
const Comment = ({ comment }) => {
  const { by, text, time } = comment;
  return(<Fragment>
      <div className="comment" data-test='component-comment'>
      <div>
        <span className="author" data-test='span-author'>{by}:</span>&nbsp;
        <span className="text" data-test='span-text' dangerouslySetInnerHTML={createMarkup(text)}/>
      </div>
      <div className="date" data-test='div-date'> {new Date(time*1000).toDateString()}</div>
      </div>
  </Fragment>)
}

export default Comment;