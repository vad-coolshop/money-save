import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import walletReducer from './walletReducer';
import authReducer from './authReducer';

const availablePagesReducer = () => {
    return [
        {id: 0, name: 'wallets', label: 'Wallets', url: '/wallets'},
        {id: 1, name: 'expenses', label: 'Expenses', url: '/expenses'},
    ];
};

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    wallets: walletReducer,
    availablePages: availablePagesReducer,
});