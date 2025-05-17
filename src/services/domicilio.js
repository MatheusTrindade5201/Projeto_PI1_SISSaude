import { apiClient } from "./axios";

export const addDomicilio = (payload) => {
  return apiClient.post("residence", payload).then((response) => response.data);
};

export const updateDomicilio = (payload, domicilioId) => {
  return apiClient
    .patch(`residence/${domicilioId}`, payload)
    .then((response) => response.data);
};

export const deleteDomicilioById = (domicilioId) => {
  return apiClient
    .delete(`residence/${domicilioId}`)
    .then((response) => response.data);
};

export const getDomicilio = () => {
  return apiClient.get("residence").then((response) => response.data);
};

export const getDomicilioById = (residenceId) => {
  return apiClient
    .get(`residence/${residenceId}`)
    .then((response) => response.data);
};
