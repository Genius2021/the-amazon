import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://the-amazon.herokuapp.com/"
});