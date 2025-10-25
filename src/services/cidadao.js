import { isDevMode } from "../Utils/env";
import { apiClient } from "./axios";

export const addCidadao = (payload) => {
  if (isDevMode()) {
    console.log("Mock addCidadao:", payload);
    const mockId = Date.now();
    return Promise.resolve({ ...payload, id: mockId });
  }

  // Se não estiver em modo dev, faz a chamada REAL para a API
  return apiClient.post("individual/", payload).then((res) => res.data);
};


export const updateCidadao = (payload, cidadaoId) => {
  if (isDevMode()) {
    console.log("Mock updateCidadao:", cidadaoId, payload);
    return Promise.resolve({ ...payload, id: cidadaoId });
  }

  return apiClient.patch(`individual/${cidadaoId}`, payload).then((res) => res.data);
};

export const getCidadaos = () => {
  // Mantém a lógica de mock se isDevMode() for true
  if (isDevMode()) {
    return Promise.resolve([
      { id: 101, nome: "Carlos Pereira Mock", cpf: "000.111.222-33", data_nascimento: "1985-07-11", celular: "85988885555" },
      { id: 102, nome: "Maria Luísa Mock", cpf: "111.222.333-44", data_nascimento: "2012-03-18", celular: "11987654321" },
      { id: 103, nome: "João Alberto Mock", cpf: "222.333.444-55", data_nascimento: "1990-01-25", celular: "21999998888" },
    ]);
  }

  // Se não estiver em modo dev, busca os dados REAIS da API
  return apiClient.get("individual/").then((res) => res.data);
};

export const getCidadaoById = (cidadaoId) => {
  if (isDevMode()) {
    return Promise.resolve({
      id: cidadaoId,
      nome: "Carlos Pereira Mock (ID)",
      cpf: "000.111.222-33",
      data_nascimento: "1985-07-11",
      celular: "85988885555",

    });
  }

  // Se não estiver em modo dev, busca o dado REAL da API
  return apiClient.get(`individual/${cidadaoId}`).then((res) => res.data); // A API está em /individual/{id} conforme routers/individual.py
};


export const deleteCidadaoById = (cidadaoId) => {
  if (isDevMode()) {
    console.log("Mock deleteCidadaoById:", cidadaoId);
    return Promise.resolve({ message: "Cidadão deletado (mock)" });
  }

  // Se não estiver em modo dev, envia o comando REAL para a API

  return apiClient.delete(`individual/${cidadaoId}`).then((res) => res.data);
};