import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTopTenStories } from '../../actions';
import FeedView from './FeedView';

export class UnconnectedFeedContainer extends PureComponent{
    componentDidMount(){
        this.props.fetchTopTenStories();
    }
    render(){
        const { stories } = this.props;
        return(
            <Fragment>
               <FeedView stories={stories} />
            </Fragment>
        )
    }
}

function mapStateToProps({stories}){
    return {stories};
}

UnconnectedFeedContainer.propType = {
    stories: PropTypes.array.isRequired
}
export default connect(mapStateToProps,{ fetchTopTenStories })(UnconnectedFeedContainer);