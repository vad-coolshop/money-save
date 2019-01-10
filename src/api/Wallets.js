import axios from "axios";
import firebase from "firebase";

const db = firebase.database;

export default axios.create({
    baseURL: '/',
    headers: {
        Authorization: 'Client-ID asd'
    }
});