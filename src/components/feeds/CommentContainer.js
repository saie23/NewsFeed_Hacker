import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions';

import Comment from './Comment';

export class UnconnectedCommentContainer extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            displayComments: false,
            loading: false,
            commentIds: [],
            commentsLoadedIds: []
        }
        this.handleCommentClick = this.handleCommentLoadClick.bind(this);
        this.displayComment = this.displayComment.bind(this);
    }

    componentDidMount(){
    if(this.props.commentIds){
            let commentIds = this.props.commentIds.length > 20 ? this.props.commentIds.sort().reverse().splice(0, 20) : this.props.commentIds.sort().reverse();
            commentIds = commentIds.reverse();
            this.setState({
                commentIds: [
                    ...commentIds
                ]
            })
    }
    }

    handleCommentLoadClick(storyId, comments){
       this.setState({displayComments: true, loading: true});
       let availableComments = this.state.commentIds;
       let commentsTobeLoaded =availableComments.length>5?availableComments.splice(0, 5) : availableComments;
       this.props.fetchComments(commentsTobeLoaded, storyId, comments, () => {
           this.setState({
               loading: false,
               commentsLoadedIds:[
                   ...this.state.commentsLoadedIds,
                   ...commentsTobeLoaded
               ],
               commentIds: [
                   ...availableComments
               ],
           })
       });
    }
    displayComment(comments){
     
    return(
     this.state.loading?'...'
          :!comments?'...'
           :Object.keys(comments).map(key => {
            return(
              <Comment key={comments[key].id} comment={comments[key]}/>
            )
        })
    )
    }
    handleCloseClick(){
      this.setState({
          displayComments: false
      })
    }
    render(){
        const { storyId, comments } = this.props;
        const { commentIds } = this.state;
        return(<div data-test='component-comment-container'>
            { !commentIds.length > 0? <p className='no-comments'>No comments available for this story</p>
               :!this.state.displayComments? 
                 <a 
                   href={`#${storyId}`}
                   onClick={()=>this.handleCommentLoadClick(storyId, comments)}>
                   <h5>Click here to check out the comments</h5>
                 </a>
                  :<div>
                    <div className='comments_container'>
                      <h4>Top Comments</h4>
                     {
                      this.displayComment(comments)
                      }
                    </div>
                     <div>{commentIds?
                      <ul>
                          {commentIds.length>5?
                          <li><a href={`#${storyId}`} onClick={()=>this.handleCommentLoadClick(storyId, comments)}>Load more</a></li>
                          :''}
                          <li><a href={`#${storyId}`} onClick={()=>{this.handleCloseClick()}}>Close</a></li>
                      </ul>
                       :''}</div>
                    </div>
                }
               
        </div>)
    }
}

function mapStateToProps({ comments }, ownProps){
  return { comments: comments[ownProps.storyId]};
}
export default connect(mapStateToProps, { fetchComments })(UnconnectedCommentContainer);