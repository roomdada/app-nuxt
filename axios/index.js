import axios from "axios";
import store from "../store/index.js";
const baseURL = "https://api.resi.ci/api";

const axiosHttpClient = axios.create({
  baseURL: baseURL,
});

axiosHttpClient.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${store.state.user.token}`;
  return config;
});

export default axiosHttpClient;
