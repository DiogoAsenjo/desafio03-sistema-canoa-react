import axios from "axios";

export const api = axios.create({
  baseURL: "http://18.191.147.209:3333/",
});
