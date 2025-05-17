import { isDevMode } from "../Utils/env";
import { apiClient } from "./axios";

export const login = (username, password) => {
  if (isDevMode()) {
    console.log("Mock login:", username, password);
    return Promise.resolve({
      token: "mock-token",
      user: { id: "mock-user", username },
    });
  }

  return apiClient
    .post("login", { username, password })
    .then((res) => res.data);
};
