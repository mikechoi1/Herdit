import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PostList from '../Post/PostList';

class Homepage extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return <h1 style={{textAlign: 'center'}}>Welcome to Herdit</h1>;
            default:
                return <h1>Hi, {this.props.auth.displayname}</h1>
        }
    }

    render() {
        return (
            <div style={{height: '1000px', background: '#121212', padding: '60px 20px 0 20px', color: 'white'}}>
                {this.renderContent()}
                <div style={{marginBottom: '25px'}}><Link to='/posts/add' className='link' style={{border: '1px solid white', borderRadius: '5px', padding: '7px'}}>Add Post</Link></div>
                <PostList />
            </div>
        );
    }
}
function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps)(Homepage);