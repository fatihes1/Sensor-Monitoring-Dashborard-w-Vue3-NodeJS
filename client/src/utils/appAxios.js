import axios from "axios";
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
export const appAxios = axios.create({
    baseURL : "http://localhost:8080"
});