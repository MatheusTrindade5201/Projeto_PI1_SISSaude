import { isDevMode } from "../Utils/env";

export const addCidadao = (payload) => {
  if (isDevMode()) {
    console.log("Mock: Adicionando Cidadão:", payload);
    alert("Dados do cidadão enviados (MOCK)! Veja o console para detalhes.");
    return Promise.resolve({ id: new Date().getTime(), ...payload });
  }
};

export const updateCidadao = (payload, cidadaoId) => {
  if (isDevMode()) {
    console.log(`Mock: Atualizando Cidadão ID ${cidadaoId}:`, payload);
    return Promise.resolve({ id: cidadaoId, ...payload });
  }
};