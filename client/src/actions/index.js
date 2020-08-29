import axios from 'axios';
import { FETCH_USER } from './types';

//if redux-thunk sees we return a function instead of an object, the functions gets called with 'dispatch' argument
export const fetchUser = () => async dispatch => {
        //dev: uses proxy to use backend server instead of client server
        //prod: no client server so just uses backend server
        const res = await axios.get('/api/current_user');
        dispatch({ type: FETCH_USER, payload: res.data });
    }