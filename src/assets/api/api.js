import axios from "axios";

export const api = axios.create({
  baseURL: "http://3.17.190.146:3333/",
});
