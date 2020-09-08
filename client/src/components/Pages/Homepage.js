import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from '../Post/Post';

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
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        );
    }
}
function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps)(Homepage);