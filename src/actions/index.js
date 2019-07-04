//Action creator
import wallets from "../api/Wallets";
import fluxes from "../api/Fluxes";
import history from "../history";

import {
    SIGN_IN,
    SIGN_OUT,
    WALLET_CREATE,
    WALLET_DELETE,
    WALLET_EDIT,
    WALLET_FETCH_ALL,
    WALLET_FETCH_SINGLE,
    EXPENSES_CREATE
} from "./types";

const idGeneratorHelper = (target, idNum = '') => {
    if (!idNum)
        idNum = `${Math.round(Math.random() * 1e9)}`;
    
    if (idNum.length >= target)
        return idNum;
    
    idGeneratorHelper(target, `0${idNum}`);
};

const idGenerator = (target = 9, type = 'wallet') => `${type}-${idGeneratorHelper(target)}`;

// Login Section
export const signIn = userId => {
    return {type: SIGN_IN, payload: userId};
};

export const signOut = userId => {
    return {type: SIGN_OUT, payload: userId};
};

// Wallet Section
export const createWallet = formValues => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await wallets.post(`/wallets`,
        {
            ...formValues,
            createdBy: userId,
            id: idGenerator(9, 'wallet')
        });
    
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
    history.push('/');
};

export const createFlux = (walletId, formValues) => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await fluxes.post(`/fluxes`,
        {
            ...formValues,
            createdBy: userId,
            id: idGenerator(9, 'flux'),
            walletId: walletId
        });
    
    dispatch({type: WALLET_CREATE, payload: response.data});
    history.push('/');
};

// Expenses Section