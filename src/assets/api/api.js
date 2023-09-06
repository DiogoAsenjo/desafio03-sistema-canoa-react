import axios from "axios";

export const api = axios.create({
    baseURL: "https://desafio03-sistema-canoa.vercel.app/"
})