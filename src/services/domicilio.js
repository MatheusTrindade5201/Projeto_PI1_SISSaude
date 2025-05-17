import { apiClient } from "./axios";

export const addDomicilio = (payload) => {
  return apiClient.post("residence", payload).then((response) => response.data);
};

export const getDomicilioById = (residenceId) => {
  return apiClient
    .get(`residence/${residenceId}`)
    .then((response) => response.data);
};
