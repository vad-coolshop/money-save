import {combineReducers} from 'redux';

const repositoriesReducer = () => {
    return [
        {id: 0, name: 'Banca', type: 'Virtual', amount: 100},
        {id: 1, name: 'Contante', type: 'Cash', amount: 40},
        {id: 2, name: 'Carta', type: 'Virtual', amount: 30},
        {id: 3, name: 'Satispay', type: 'Virtual', amount: 150},
    ]
};

const repositoryTypesReducer = () => {

    return [
        {id: 0, name: '--None--'},
        {id: 1, name: 'Virtual'},
        {id: 2, name: 'Cash'},
    ]
};

const addNewRepositoryReducer = (rep=null, action) => {
    if (action.type === 'REPOSITORY_ADD') {
        return action.payload
    }

    return rep;
};

const deleteRepositoryReducer = (rep=null, action) => {
    if (action.type === 'REPOSITORY_DELETE') {
        return action.payload
    }

    return rep;
};

const editRepositoryReducer = (rep=null, action) => {
    if (action.type === 'REPOSITORY_EDIT') {
        return action.payload
    }

    return rep;
};

export default combineReducers({
    allRepositories: repositoriesReducer,
    addNewRepository: addNewRepositoryReducer,
    editRepository: editRepositoryReducer,
    deleteRepository: deleteRepositoryReducer,
    repositoryTypes: repositoryTypesReducer
});