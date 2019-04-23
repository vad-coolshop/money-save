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

// Wallet Section
export const createWallet = formValues => async (dispatch, getState) => {

    const idGeneratorHelper = (idNum, target) => {
        if (idNum.length >= target) {
            return idNum;
        }
        idGeneratorHelper(`0${idNum}`, target);
    };

    const {userId} = getState().auth;
    const walletNum = idGeneratorHelper(`${Math.round(Math.random() * 1e9)}`, 9);
    const walletId = `wallet-${walletNum}`;
    const response = await wallets.post(`/wallets`, {...formValues, createdBy: userId, id: walletId});

    dispatch({type: WALLET_CREATE, payload: response.data});
    history.push('/');
};

export const getWallets = () => async dispatch => {
    const response = await wallets.get(`/wallets`);
    dispatch({type: WALLET_FETCH_ALL, payload: response.data});
};

export const getWallet = (walletId) => async dispatch => {
    const response = await wallets.get(`/wallets/${walletId}`);
    dispatch({type: WALLET_FETCH_SINGLE, payload: response.data});
};

export const editWallet = (walletId, formValues) => async dispatch => {
    const response = await wallets.patch(`/wallets/${walletId}`, formValues);
    dispatch({type: WALLET_EDIT, payload: response.data});
    history.push('/');
};

export const deleteWallet = walletId => async dispatch => {
    await wallets.delete(`/wallets/${walletId}`);
    dispatch({type: WALLET_DELETE, payload: walletId});
};

// Expenses Section