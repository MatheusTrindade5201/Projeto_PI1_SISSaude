import { apiClient } from "../services/axios";

export const apiTokenInterceptor = (access_token) => {
  const TOKEN_STORAGE_KEY = import.meta.env.VITE_TOKEN_STORAGE_KEY;

  if (!access_token) access_token = localStorage.getItem(TOKEN_STORAGE_KEY);

  if (access_token) {
    apiClient.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${access_token}`;
  }
};
