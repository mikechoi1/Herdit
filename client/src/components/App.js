import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Header from './Header/Header';

const Landing = () => {
    return (
        <div style={{height: '1000px', background: '#121212', paddingTop: '40px'}}>
        </div>
    );
};
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path='/' component={Landing}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;