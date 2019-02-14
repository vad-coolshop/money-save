//Action creator
import wallets from "../api/Wallets";
import history from "../history";

import {
    SIGN_IN,
    SIGN_OUT,
    WALLET_CREATE,
    WALLET_DELETE,
    WALLET_EDIT,
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

/**
 *
 * @param {string} idNum
 * @param {int} target
 * @returns {*}
 * @private
 */
const _idGeneratorHelper = (idNum, target) => {
    console.log(idNum);
    if(idNum.length >= target)
        return idNum;
    _idGeneratorHelper(0 + idNum, target);
};

// Wallet Section
export const createWallet = formValues => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const walletId = `wallet${_idGeneratorHelper(Math.round(Math.random() * 1000) + '', 9)}`;
    const response = await wallets.post(`/wallets`, {
        ...formValues,
        createdBy: userId,
        id: walletId
    });

    dispatch({type: WALLET_CREATE, payload: response.data});
    history.push('/');
};

export const deleteWallet = walletId => async dispatch => {
    await wallets.delete(`/wallets/${walletId}`);
    dispatch({type: WALLET_DELETE, payload: walletId});
};

export const editWallet = (walletId, formValues) => async dispatch => {
    const response = await wallets.put(`/wallets/${walletId}`, formValues);
    dispatch({type: WALLET_EDIT, payload: response.data});
};

export const getWallets = () => async dispatch => {
    const response = await wallets.get(`/wallets`);
    dispatch({type: WALLET_FETCH_ALL, payload: response.data});
};

export const getWallet = (walletId) => async dispatch => {
    const response = await wallets.get(`/wallets/${walletId}`);
    dispatch({type: WALLET_FETCH_SINGLE, payload: response.data});
};

// Expenses Section