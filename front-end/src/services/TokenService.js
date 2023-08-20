import AsyncStorage from "@react-native-async-storage/async-storage";
import { DeviceEventEmitter } from "react-native";

export const getRefreshToken = () =>
  AsyncStorage.getItem("PH_" + encode("refresh_token"));

export const setRefreshToken = (token) =>
  AsyncStorage.setItem("PH_" + encode("refresh_token"), token);

export const getAccessToken = () =>
  AsyncStorage.getItem("PH_" + encode("access_token"));

export const setAccessToken = (token) => {
  AsyncStorage.setItem("PH_" + encode("access_token"), token);
  DeviceEventEmitter.emit("user-change");
};

export const removeTokens = () =>
  AsyncStorage.multiRemove([
    "PH_" + encode("access_token"),
    "PH_" + encode("refresh_token"),
  ]);

const encode = (token) =>
  token
    .split("")
    .map((c) => c.charCodeAt(0))
    .map((n) => (n + 10).toString(16))
    .join("");
