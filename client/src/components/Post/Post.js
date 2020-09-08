import React, { Component } from 'react';

import './Post.css';

class Post extends Component {
    
    render() {
        return (
            <div className='post-elements'>
                <div className='vertical-align padding-2-h'>
                    <svg className='rating-icon upvote'>
                        <use href='img/sprite.svg#icon-triangle-up'/>
                    </svg>
                    17k
                    <svg className='rating-icon downvote'>
                        <use href='img/sprite.svg#icon-triangle-down'/>
                    </svg>
                </div>
                <div className='post-content'>
                    <div className='post-title'>Title</div>
                    <div className='post-info horizontal-align'>
                        <div className='pr-05 subpage'>ComputerScience</div>
                        <div className='pr-05 user'>user</div>
                        <div>23 minutes ago</div>
                    </div>
                    <div className='post-comment'>53 Comments</div>
                </div>
            </div>
        );
    }
}

export default Post;