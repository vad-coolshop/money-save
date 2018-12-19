// State argument is not an application state, only the state this reducer is responsable for
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    //redux non permette di returnare undefined value
    return state;
}