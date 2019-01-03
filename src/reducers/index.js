import {combineReducers} from 'redux';

const repositoriesReducer = () => {
    return [
        {id: 0, name: 'banca', type: 'virtual', amount: 100},
        {id: 1, name: 'contante', type: 'cash', amount: 40},
        {id: 2, name: 'carta', type: 'virtual', amount: 30},
        {id: 3, name: 'satispay', type: 'virtual', amount: 150},
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
    deleteRepository: deleteRepositoryReducer
});