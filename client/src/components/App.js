import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import './App.css';
import Header from './Header/Header';
import Homepage from './Pages/Homepage';

const addPost = () => {
    return(
        <div style={{height: '1000px', background: '#121212', padding: '70px 20px 0 20px', color: 'white'}}>Add Post</div>
    );
}

class App extends Component {
    //stadard lifecycle method for calling ajax calls instead of willMount because willMount might be called mult times
    componentDidMount() {
        //call fetchUser in App because multiple components will eventually need the know if a user is logged in
        this.props.fetchUser();
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path='/' component={Homepage}/>
                        <Route path='/posts/add' component={addPost} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);