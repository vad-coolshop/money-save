//Action creator
import Wallets from "../api/Wallets";

export const addNewWallet = wallet => {
    return {
        type: 'WALLET_ADD',
        payload: wallet
    };
};

export const deleteWallet = (walletId) => {
    return {
        type: 'WALLET_DELETE',
        payload: walletId
    };
};

export const editWallet = (wallet) => {
    return {
        type: 'WALLET_EDIT',
        payload: wallet
    };
};

export const deleteExpenses = (wallet) => {
    return {
        type: 'EXPENSES_DELETE',
        payload: wallet
    };
};

export const editExpenses = (wallet) => {
    return {
        type: 'EXPENSES_EDIT',
        payload: wallet
    };
};

export const getAllWallets = () => async dispatch => {
    // todo da cambiare l'argomento del get
    const response = await Wallets.get('/wallets');
    dispatch({type: 'WALLET_GET_ALL', payload: response.data});
};

export const getWallet = (targetId) => async dispatch => {
    // todo da cambiare l'argomento del get
    const response = await Wallets.get(`/wallets/${targetId}`);
    dispatch({type: 'WALLET_GET_ALL', payload: response.data});
};

export const getAllExpenses = () => async dispatch => {
    // todo da cambiare l'argomento del get
    const response = await Wallets.get('/expenses');
    dispatch({type: 'EXPENSES_GET_ALL', payload: response.data});
};

export const getRxpense = (targetId) => async dispatch => {
    // todo da cambiare l'argomento del get
    const response = await Wallets.get(`/expenses/${targetId}`);
    dispatch({type: 'EXPENSES_GET_ALL', payload: response.data});
};