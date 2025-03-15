import axios from "axios";

export const fetchInstance = axios.create();
fetchInstance.defaults.baseURL = "САЙТ С API";
