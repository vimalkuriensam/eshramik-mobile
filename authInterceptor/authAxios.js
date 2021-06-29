import Axios from "axios";
import { BASE_URL } from "../static";

const apiService = () => {
  const api = Axios.create({
    baseURL: BASE_URL,
  });

  api.interceptors.request.use(async (config) => {
    try {
      const token = ""; //store.getState().user?.token;
      if (token) config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Content-Type"] = "application/json";
    } catch (e) {
      return Promise.reject(error);
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => new Promise((resolve, reject) => resolve(response)),
    (error) => {
      if (!error.response)
        return new Promise((resolve, reject) => reject(error));
      if (error.response.status === 401) {
        console.log("token expired");
      } else {
        return Promise.reject(error);
      }
    }
  );

  return api;
};

export default apiService;
