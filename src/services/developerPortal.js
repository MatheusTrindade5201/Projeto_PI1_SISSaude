import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const portalClient = axios.create({ baseURL: BASE_URL });

portalClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("cc_portal_session");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const registerDeveloper = (name, email, password) =>
  portalClient.post("developer/register", { name, email, password }).then((r) => r.data);

export const loginDeveloper = (email, password) =>
  portalClient.post("developer/auth/login", { email, password }).then((r) => r.data);

export const getMyKeys = () =>
  portalClient.get("developer/keys").then((r) => r.data);

export const revokeKey = (keyId) =>
  portalClient.delete(`developer/keys/${keyId}`).then((r) => r.data);
