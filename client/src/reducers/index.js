import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import postsReducer from './postsReducer';

export default combineReducers( {
    auth: authReducer,
    posts: postsReducer,
    //"form" keyword is reserved for redux-form but can be changed
    form: reduxForm
});