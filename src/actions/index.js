//Action creator
import wallets from "../api/Wallets";
import {
    SIGN_IN,
    SIGN_OUT,
    WALLET_EDIT,
    WALLET_CREATE,
    WALLET_DELETE,
    WALLET_FETCH_ALL,
    WALLET_FETCH_SINGLE
} from "./types";

// Login Section
export const signIn = userId => {
    return {type: SIGN_IN, payload: userId};
};

export const signOut = userId => {
    return {type: SIGN_OUT, payload: userId};
};

// Wallet Section

//temporary
const walletsList = () => {
    return [
        {id: 0, name: 'Banca', type: 'Virtual', amount: 100},
        {id: 1, name: 'Contante', type: 'Cash', amount: 40},
        {id: 2, name: 'Carta', type: 'Virtual', amount: 30},
        {id: 3, name: 'Satispay', type: 'Virtual', amount: 150},
    ];
};

export const createWallet = formValues => async dispatch => {

    //temporary
    const response = {};
    response.data = {
        id: 'wallet' + Math.round(Math.random()*1000),
        name: formValues.name,
        type: formValues.type,
        amount: formValues.amount
    };
    // end temporary

    // const response = await wallets.post(`/wallets`, formValues);
    dispatch({type: WALLET_CREATE, payload: response.data});
};

export const deleteWallet = walletId =>  async dispatch => {
    await wallets.delete(`/wallets/${walletId}`);
    dispatch({type: WALLET_DELETE, payload: walletId});
};

export const editWallet = (walletId, formValues) =>  async dispatch => {
    const response = await wallets.put(`/wallets/${walletId}`, formValues);
    dispatch({type: WALLET_EDIT, payload: response.data});
};

export const getWallets = () => async dispatch => {

    // temporary
    const response = {};
    response.data = walletsList();
    // end temporary

    // const response = await wallets.get(`/wallets`);
    dispatch({type: WALLET_FETCH_ALL, payload: response.data});
};

export const getWallet = (walletId) => async dispatch => {
    const response = await wallets.get(`/wallets/${walletId}`);
    dispatch({type: WALLET_FETCH_SINGLE, payload: response.data});
};

// Expenses Section