import Axios from "axios";
import { CommonActions } from "@react-navigation/native";
import { BASE_URL } from "../static";

let store;

export const injectStore = (_store) => {
  store = _store;
};

const apiService = () => {
  const api = Axios.create({
    baseURL: BASE_URL,
  });

  api.interceptors.request.use(async (config) => {
    try {
      const token = store.getState().auth?.accessToken;
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
      return new Promise((resolve, reject) => {
        if (!error.response)
          return reject(error);
        if (error.response.status === 401) {
          console.log("token expired");
          store.dispatch({ type: "SET_LOGOUT" });
          CommonActions.navigate("Auth");
          // resolve(true);
        } else if (error.response.status === 403) {
          store.dispatch({ type: "SET_LOGOUT" });
          CommonActions.navigate("Auth");
          // resolve(true);
        }
        return reject(error);
      });
    }
  );

  return api;
};

export default apiService;
