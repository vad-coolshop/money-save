//Action creator
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
