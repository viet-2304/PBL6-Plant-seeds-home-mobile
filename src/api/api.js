
import axios from "axios";

const api = axios.create({
    baseURL: 'https://plant-seeds-home.herokuapp.com/api/',
    responseType: 'json',
    withCredentials: true,
});

export default api;