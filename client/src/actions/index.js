import axios from 'axios';
import { FETCH_USER, FETCH_POSTS } from './types';

//if redux-thunk sees we return a function instead of an object, the functions gets called with 'dispatch' argument

/*init fetchUser code:
export const fetchUser = () => {
    //when redux-thunk sees we return a function, it automatically calls the function with dispatch paramter
    return function(dispatch) {
        axios.get('/api/current_user')
            .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
    }
}
*/

//improved fetchUser code:
export const fetchUser = () => async dispatch => {
    //dev: uses proxy to use backend server instead of client server
    //prod: no client server so just uses backend server
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
}

export const fetchPosts = () => async dispatch => {
    const res = await axios.get('/api/posts');
    dispatch({ type: FETCH_POSTS, payload: res.data });
}

/*values = {
    postTitle: '------',
    postBody: '------'
}*/
export const createPost = (values, history) => async dispatch => {
    console.log('actions/index.js:createPost: ', values);
    const res = await axios.post('/api/posts', values);
    history.push('/');
    dispatch({ type: FETCH_POSTS, payload: res.data });
}

export const deletePost = (values) => async dispatch => {
    console.log('actions/index.js:deletePost: ', values);
    const res = await axios.delete(`/api/post/${values.postId}/${values.userId}`);
    dispatch({ type: FETCH_POSTS, payload: res.data});
}