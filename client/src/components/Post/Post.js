import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Post.css';

class Post extends Component {
    renderDelete() {
        if(this.props.auth && this.props.auth.id === this.props.userId)
            return(
                /* -----------INLINE STYLING FOR TESTING, REFACTOR LATER----------- */
                <div style={{alignSelf: 'center', marginLeft: 'auto', marginRight: '1rem', float: 'right'}}>
                    <svg className='nav-icon trash-icon'>
                        <use href='/img/sprite.svg#icon-trash'/>
                    </svg>
                </div>
            );
    }
    render() {
        const { title, subpage, user, rating, last_edited } = this.props;
        return (
            <div className='post-elements'>
                <div className='vertical-align padding-2-h'>
                    <svg className='rating-icon upvote'>
                        <use href='img/sprite.svg#icon-triangle-up'/>
                    </svg>
                    {rating}
                    <svg className='rating-icon downvote'>
                        <use href='img/sprite.svg#icon-triangle-down'/>
                    </svg>
                </div>
                <div className='post-content'>
                    <div className='post-title'>{title}</div>
                    <div className='post-info horizontal-align'>
                        <div className='pr-05 subpage'>{subpage}</div>
                        <div className='pr-05 user'>{user}</div>
                        <div>{last_edited}</div>
                    </div>
                    <div className='post-comment'>0 Comments</div>
                </div>
                {this.renderDelete()}
            </div>
        );
    }
}
function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps)(Post);