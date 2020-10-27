import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import Post from './Post';


class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    renderPosts() {
        return <div>
            {this.props.posts.reverse().map((post, i) => (
            <Post key={i}
                title = {post.title}
                subpage = {post.subpage}
                user = {post.username}
                rating = {post.rating}
                last_edited = {new Date(post.last_edited).toLocaleString()}
            />
            ))}
        </div>;
    }

    render() {
        return (
            <div>
                {this.renderPosts()}
            </div>
        );
    }
}

function mapStateToProps({ posts }) {
    return { posts };
}
export default connect(mapStateToProps, { fetchPosts } )(PostList);