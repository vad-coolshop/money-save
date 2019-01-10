import _ from 'lodash';
import {
    WALLET_EDIT,
    WALLET_CREATE,
    WALLET_DELETE,
    WALLET_FETCH_ALL,
    WALLET_FETCH_SINGLE
} from "../actions/types";

export default (state={}, action) => {
    switch (action.type) {
        case WALLET_FETCH_ALL:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case WALLET_FETCH_SINGLE:
            return {...state, [action.payload.id]: action.payload};
        case WALLET_CREATE:
            return {...state, [action.payload.id]: action.payload};
        case WALLET_EDIT:
            return {...state, [action.payload.id]: action.payload};
        case WALLET_DELETE:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};