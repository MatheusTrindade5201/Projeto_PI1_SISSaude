import { isDevMode } from "../Utils/env";
import { apiClient } from "./axios";

export const addCidadao = (payload) => {
  // ...
};

export const updateCidadao = (payload, cidadaoId) => {
  // ...
};

export const getCidadaos = () => {
  if (isDevMode()) {
    return Promise.resolve([
      {
        id: 101,
        nome_completo: "Carlos Pereira",
        cpf: "000.111.222-33",
        data_nascimento: "1985-07-11",
        celular: "85988885555",
      },
      {
        id: 102,
        nome_completo: "Maria Luísa da Silva",
        cpf: "111.222.333-44",
        data_nascimento: "2012-03-18",
        celular: "11987654321",
      },
      {
        id: 103,
        nome_completo: "João Alberto",
        cpf: "222.333.444-55",
        data_nascimento: "1990-01-25",
        celular: "21999998888",
      },
    ]);
  }

  return apiClient.get("individual").then((res) => res.data);
};

export const getCidadaoById = (cidadaoId) => {
  if (isDevMode()) {
    return Promise.resolve({
      id: 101,
      nome_completo: "Carlos Pereira",
      cpf: "000.111.222-33",
      data_nascimento: "1985-07-11",
      celular: "85988885555",
    });
  }

  return apiClient.get(`individual/${cidadaoId}`).then((res) => res.data);
};

export const deleteCidadaoById = (cidadaoId) => {
  if (isDevMode()) {
    console.log("Mock deleteCidadaoById:", cidadaoId);
    return Promise.resolve({ success: true });
  }

  return apiClient.delete(`individual/${cidadaoId}`).then((res) => res.data);
};