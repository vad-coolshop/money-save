// ----Libreria
// export function selectBook(book) {
//     // Select book is an action Creator and needs to return an action, an object with tyype property
//     return {
//         type: 'BOOK_SELECTED',
//         payload: book
//     };
// }

// ----- blog
import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
export const CREATE_POSTS = 'create_posts';

const API_KEY = '?key=VADIED92';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

export function fetchPosts() {
    const request = axios.get(ROOT_URL + '/posts' + API_KEY);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPosts(values, callback) {
    const request = axios.post(ROOT_URL + '/posts' + API_KEY, values)
        .then(() => callback());

    return {
        type: CREATE_POSTS,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(ROOT_URL + '/posts/' + id + API_KEY);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id, callback) {
    const request = axios.delete(ROOT_URL + '/posts/' + id + API_KEY)
        .then(()=> callback());

    return {
        type: DELETE_POST,
        payload: id
    };
}

// // ----- meteo
// import axios from 'axios';
//
// const API_KEY = 'be221ea62d9f618e6f0bf7ed958c4a3a';
// const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?APPID=' + API_KEY;
//
// export const FETCH_WEATHER = 'FETCH_WEATHER';
//
// export function fetchWeather(city) {
//     const url = ROOT_URL + '&q=' + city + ',it';
//     const request = axios.get(url);
//
//     return {
//         type: FETCH_WEATHER,
//         payload: request
//     };
// }