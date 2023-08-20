import ax from "axios";
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
} from "./TokenService.js";
import { DeviceEventEmitter } from "react-native";

const REACT_APP_BASE_URL = "https://planet-hop-backend.onrender.com/planetHop";

const axios = ax.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(
  async (config) => {
    try {
      const accessToken = await getAccessToken();

      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
    } catch (_) {}

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const config = err.config;
    if (err.response) {
      if (err.response.status === 401 && !config._retry) {
        config._retry = true;

        try {
          const res = await axios.post("/refreshtoken", {
            refresh_token: await getRefreshToken(),
          });

          const { access_token } = res.data.data;
          setAccessToken(access_token);
          return axios(config);
        } catch (_err) {
          DeviceEventEmitter.emit("token-expired");
          return Promise.reject(_err);
        }
      }
    }
    return Promise.reject(err);
  }
);


export default axios;