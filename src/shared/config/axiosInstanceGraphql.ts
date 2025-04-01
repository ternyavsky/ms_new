import axios from "axios";

export const instanceGraphQl = axios.create({
    baseURL: import.meta.env.VITE_API_URL + "/graphql",
    headers: {
        "Access-Control-Allow-Origin": import.meta.env.VITE_API_URL,
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
});
