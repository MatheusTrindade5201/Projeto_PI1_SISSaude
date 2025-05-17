import { apiClient } from "./axios";

export const login = (username, password) => {
  return apiClient
    .post("login", { username, password })
    .then((response) => response.data);
};
