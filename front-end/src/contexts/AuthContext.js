import jwtDecode from "jwt-decode";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  removeTokens,
} from "../services/TokenService";
const REACT_APP_BASE_URL = "https://planet-hop-backend.onrender.com/planetHop";

const AuthContext = createContext({
  userData: null,
  role: null,
  handleUser: async () => {},
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    DeviceEventEmitter.addListener("user-change", handleUser);
    DeviceEventEmitter.addListener("token-expired", logout);
    DeviceEventEmitter.addListener("user-updated", initApp);
    initApp();
  }, []);

  const initApp = async () => {
    try {
      const token = await getRefreshToken();
      if (token) {
        try {
          const res = await axios.post("/access-token", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          const { access_token } = res.headers.access_token;
          await setAccessToken(access_token);
        } catch (err) {
          DeviceEventEmitter.emit("token-expired");
        }
      } else setIsLoading(false);
    } catch (_) {}
  };

  const handleUser = async () => {
    try {
      const token = await getAccessToken();
      if (token) {
        const user = jwtDecode(token);
        setUserData(user);
      } else {
        setUserData(null);
      }
    } catch (_) {
      setUserData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
      }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
