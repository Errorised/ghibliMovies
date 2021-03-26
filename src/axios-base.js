import axios from "axios"

const instance = axios.create({
    baseURL:"https://ghibliapi.herokuapp.com"
});

const noBaseUrl = axios.create({
    baseURL:""
});

export default instance;
export {noBaseUrl};