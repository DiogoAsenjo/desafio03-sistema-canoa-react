import axios from "axios";

export const api = axios.create({
  baseURL: "http://load-balancer-test-1847978165.us-east-2.elb.amazonaws.com",
});
