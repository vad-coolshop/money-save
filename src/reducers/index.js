import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import walletReducer from './walletReducer';
import authReducer from './authReducer';

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    wallets: walletReducer
});