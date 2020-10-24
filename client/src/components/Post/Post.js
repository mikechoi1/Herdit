import React, { Component } from 'react';

import './Post.css';

class Post extends Component {
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
            </div>
        );
    }
}
export default Post;