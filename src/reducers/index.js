import { combineReducers } from 'redux';

// -----blog
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer
});

// // ---- Meteo
//
// import WeatherReducer from './weather_reducer'
//
// const rootReducer = combineReducers({
//     weather: WeatherReducer
// });

// ---- Libreria
// import BooksReducer from './books_reducer';
// import Activebook from './active_book_reducer';
//
// const rootReducer = combineReducers({
//     books: BooksReducer,
//     activeBook: Activebook
// });

export default rootReducer;
