import {combineReducers} from 'redux';

// const walletsReducer = (state = [], action) => {
const walletsReducer = () => {
    // if (action.type === 'WALLET_GET_ALL') return action.payload;
    return [
        {id: 0, name: 'Banca', type: 'Virtual', amount: 100},
        {id: 1, name: 'Contante', type: 'Cash', amount: 40},
        {id: 2, name: 'Carta', type: 'Virtual', amount: 30},
        {id: 3, name: 'Satispay', type: 'Virtual', amount: 150},
    ];

    // return state;
};

const availablePagesReducer = () => {
    return [
        {id: 0, name: 'wallets', label: 'Wallets', url: '/wallets'},
        {id: 1, name: 'expenses', label: 'Expenses', url: '/expenses'},
    ];
};

const addNewWalletReducer = (wallet = null, action) => {
    if (action.type === 'WALLET_ADD') return action.payload;
    return wallet;
};

const deleteWalletReducer = (wallet = null, action) => {
    if (action.type === 'WALLET_DELETE') return action.payload;
    return wallet;
};

const editWalletReducer = (wallet = null, action) => {
    if (action.type === 'WALLET_EDIT') return action.payload;
    return wallet;
};

const walletTypesReducer = () => {
    return [
        {id: 0, name: '--None--'},
        {id: 1, name: 'Virtual'},
        {id: 2, name: 'Cash'},
        {id: 3, name: 'Debt'},
    ]
};

export default combineReducers({
    wallets: walletsReducer,
    addNewWallet: addNewWalletReducer,
    editWallet: editWalletReducer,
    deleteWallet: deleteWalletReducer,
    availablePages: availablePagesReducer,
    walletTypes: walletTypesReducer
});