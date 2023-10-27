import axios from "axios";

export const api = axios.create({
  baseURL: "https://load-balancer-test-1847978165.us-east-2.elb.amazonaws.com",
});
