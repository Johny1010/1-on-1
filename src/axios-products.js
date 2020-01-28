import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://on-1-17393.firebaseio.com/'
});

export default instance;