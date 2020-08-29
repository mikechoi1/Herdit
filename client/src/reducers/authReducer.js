import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_USER:
            //action.payload returns "" when not logged in, so return false in that case
            return action.payload || false;
        default: 
            return state;
    }
}