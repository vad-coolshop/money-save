const repositoriesReducer = () => {
    return [
        {id: 0, name: 'banca', type: 'virtual', amount: 100},
        {id: 1, name: 'contante', type: 'cash', amount: 40},
        {id: 2, name: 'carta', type: 'virtual', amount: 30},
        {id: 3, name: 'satispay', type: 'virtual', amount: 150},
    ]
};

const addNewRepository = (rep, action) => {
    if (action.type === 'REPOSITORY_ADD') {
        return action.payload
    }

    return rep;
};