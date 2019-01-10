import _ from 'lodash';
import {
    WALLET_EDIT,
    WALLET_CREATE,
    WALLET_DELETE,
    WALLET_FETCH_ALL,
    WALLET_FETCH_SINGLE
} from "../actions/types";

//temporary
const wallets = () => {
    return [
        {id: 0, name: 'Banca', type: 'Virtual', amount: 100},
        {id: 1, name: 'Contante', type: 'Cash', amount: 40},
        {id: 2, name: 'Carta', type: 'Virtual', amount: 30},
        {id: 3, name: 'Satispay', type: 'Virtual', amount: 150},
    ];
};

export default (state={}, action) => {
    switch (action.type) {
        case WALLET_FETCH_ALL:
            return {...wallets, ..._.mapKeys(action.payload, 'id')};
            // return {...state, ..._.mapKeys(action.payload, 'id')}; //future
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