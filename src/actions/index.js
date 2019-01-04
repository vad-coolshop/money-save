//Action creator
import Repositories from "../api/Repositories";

export const addNewRepository = rep => {
    return {
        type: 'REPOSITORY_ADD',
        payload: rep
    };
};


export const deleteRepository = (repId) => {
    return {
        type: 'REPOSITORY_DELETE',
        payload: repId
    };
};


export const editRepository = (rep) => {
    return {
        type: 'REPOSITORY_EDIT',
        payload: rep
    };
};

export const deleteExpenses = (rep) => {
    return {
        type: 'EXPENSES_DELETE',
        payload: rep
    };
};

export const editExpenses = (rep) => {
    return {
        type: 'EXPENSES_EDIT',
        payload: rep
    };
};

export const getAllRepositories = () => async dispatch => {
    // todo da cambiare l'argomento del get
    const response = await Repositories.get('/repositories');
    dispatch({type: 'REPOSITORY_GET_ALL', payload: response.data});
};

export const getRepository = (targetId) => async dispatch => {
    // todo da cambiare l'argomento del get
    const response = await Repositories.get(`/repositories/${targetId}`);
    dispatch({type: 'REPOSITORY_GET_ALL', payload: response.data});
};

export const getAllExpenses = () => async dispatch => {
    // todo da cambiare l'argomento del get
    const response = await Repositories.get('/expenses');
    dispatch({type: 'EXPENSES_GET_ALL', payload: response.data});
};

export const getRxpense = (targetId) => async dispatch => {
    // todo da cambiare l'argomento del get
    const response = await Repositories.get(`/expenses/${targetId}`);
    dispatch({type: 'EXPENSES_GET_ALL', payload: response.data});
};