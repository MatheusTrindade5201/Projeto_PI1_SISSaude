import { createContext, useContext, useLayoutEffect, useState } from "react";
import { useAlert } from "./AlertContext";
import { login } from "../services/login";
import { apiClient, setSignOutHandler } from "../services/axios";
import { apiTokenInterceptor } from "../Helpers/apiTokenInterceptor";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({ access_token: undefined });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const TOKEN_STORAGE_KEY = import.meta.env.VITE_TOKEN_STORAGE_KEY;

  const { handleError } = useAlert();

  const signIn = async ({ username, password }) => {
    setIsLoading(true);
    try {
      const response = await login(username, password);
      const { access_token } = response;

      {
        access_token && localStorage.setItem(TOKEN_STORAGE_KEY, access_token);
      }

      setData({ access_token });
      setIsAuthenticated(true);
      apiTokenInterceptor(access_token);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  function signOut() {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    setData({ access_token: undefined });
    setIsAuthenticated(false);
    window.location.href = "/";
  }

  const handleAuthentication = () => {
    const access_token = localStorage.getItem(TOKEN_STORAGE_KEY);

    if (access_token) {
      apiClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${access_token}`;
      setData({
        access_token,
      });
      setIsAuthenticated(true);
    }
  };

  useLayoutEffect(() => {
    handleAuthentication();
    setSignOutHandler(signOut);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: data.access_token,
        signOut,
        isAuthenticated,
        isLoading,
        handleAuthentication,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
