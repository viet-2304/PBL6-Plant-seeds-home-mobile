
import axios from "axios";

const api = axios.create({
    // baseURL: 'https://plant-seeds-home.herokuapp.com',
    // baseURL: 'http://192.168.1.107:8080/api/',
    baseURL : 'http://192.168.43.133:8080/api/',
    responseType: 'json',
    withCredentials: true,
});

export default api;