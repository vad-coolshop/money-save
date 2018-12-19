import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = { ...state };
            // newState[post.id] = post;
            // return newState;

            // equivalente a
            return { ...state, [action.payload.data.id]: action.payload.data };
            // utilizzare questo metodo fa si che fetchando lo stesso record esso si riaggiorni all'interno dell'array
            // anziche aggiungere ogni volta lo stesso record
        case DELETE_POST:
            return _.omit(state, action.payload); // serve a cancellare la key (id)
        case FETCH_POSTS:
             return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}