//Action creator
export const addRepository = rep => {
    return {
        type: 'REPOSITORY_ADD',
        payload: rep
    };
};