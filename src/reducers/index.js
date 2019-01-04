import {combineReducers} from 'redux';

// const repositoriesReducer = (state = [], action) => {
const repositoriesReducer = () => {
    // if (action.type === 'REPOSITORY_GET_ALL') return action.payload;
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
        {id: 0, name: 'repositories', label: 'Repositories', url: '/repositories'},
        {id: 1, name: 'expenses', label: 'Expenses', url: '/expenses'},
    ];
};

const addNewRepositoryReducer = (rep = null, action) => {
    if (action.type === 'REPOSITORY_ADD') return action.payload;
    return rep;
};

const deleteRepositoryReducer = (rep = null, action) => {
    if (action.type === 'REPOSITORY_DELETE') return action.payload;
    return rep;
};

const editRepositoryReducer = (rep = null, action) => {
    if (action.type === 'REPOSITORY_EDIT') return action.payload;
    return rep;
};

const repositoryTypesReducer = () => {
    return [
        {id: 0, name: '--None--'},
        {id: 1, name: 'Virtual'},
        {id: 2, name: 'Cash'},
    ]
};

export default combineReducers({
    repositories: repositoriesReducer,
    addNewRepository: addNewRepositoryReducer,
    editRepository: editRepositoryReducer,
    deleteRepository: deleteRepositoryReducer,
    availablePages: availablePagesReducer,
    repositoryTypes: repositoryTypesReducer
});