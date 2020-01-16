import axios from 'axios';

const instance = axios.create({
    baseURL: 'https:TU_BĘDZIE_BACKEND'
});

export default instance;