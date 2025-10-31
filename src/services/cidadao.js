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

  return apiClient
    .patch(`individual/${cidadaoId}/`, payload)
    .then((res) => res.data);
};

export const getCidadaos = (query) => {
  if (isDevMode()) {
    const mockData = [
      {
        id: 101,
        nome: "Carlos Pereira Mock",
        cpf: "000.111.222-33",
        data_nascimento: "1985-07-11",
        celular: "85988885555",
      },
      {
        id: 102,
        nome: "Maria Luísa Mock",
        cpf: "111.222.333-44",
        data_nascimento: "2012-03-18",
        celular: "11987654321",
      },
      {
        id: 103,
        nome: "João Alberto Mock",
        cpf: "222.333.444-55",
        data_nascimento: "1990-01-25",
        celular: "21999998888",
      },
    ];

    if (query && query.trim()) {
      const normalizedQuery = query.trim().toLowerCase();

      const filtered = mockData.filter((c) => {
        const nome = (c.nome || "").toLowerCase();
        const cpf = (c.cpf || "").replace(/\D/g, ""); // remove pontos e traços
        const queryNumeric = normalizedQuery.replace(/\D/g, "");

        return (
          nome.includes(normalizedQuery) || (cpf && cpf.includes(queryNumeric))
        );
      });

      return Promise.resolve(filtered);
    }

    return Promise.resolve(mockData);
  }

  let path = "individual/";
  if (query) {
    path += `?search=${encodeURIComponent(query)}`;
  }

  return apiClient.get(path).then((res) => res.data);
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
  return apiClient.get(`individual/${cidadaoId}/`).then((res) => res.data); // A API está em /individual/{id} conforme routers/individual.py
};

export const deleteCidadaoById = (cidadaoId) => {
  if (isDevMode()) {
    console.log("Mock deleteCidadaoById:", cidadaoId);
    return Promise.resolve({ message: "Cidadão deletado (mock)" });
  }

  return apiClient.delete(`individual/${cidadaoId}/`).then((res) => res.data);
};

export const associateCidadaoDomicilio = (payload) => {
  if (isDevMode()) {
    console.log("Mock associateCidadaoDomicilio:", payload);
    return Promise.resolve({
      ...payload,
      id: Date.now(),
      message: "Associação criada (mock)",
    });
  }

  return apiClient
    .post("individual/domicilio/associate/", payload)
    .then((res) => res.data);
};

export const updateCidadaoDomicilio = (cidadaoId, domicilioId, payload) => {
  if (isDevMode()) {
    console.log("Mock updateCidadaoDomicilio:", {
      cidadaoId,
      domicilioId,
      payload,
    });
    return Promise.resolve({
      id: domicilioId,
      cidadao_id: cidadaoId,
      ...payload,
      message: "Associação atualizada (mock)",
    });
  }

  return apiClient
    .patch(`individual/${cidadaoId}/domicilio/${domicilioId}/`, payload)
    .then((res) => res.data);
};

export const deleteCidadaoDomicilio = (cidadaoId, domicilioId) => {
  if (isDevMode()) {
    console.log("Mock deleteCidadaoDomicilio:", { cidadaoId, domicilioId });
    return Promise.resolve({
      message: "Associação removida (mock)",
    });
  }

  return apiClient
    .delete(`individual/${cidadaoId}/domicilio/${domicilioId}/`)
    .then((res) => res.data);
};
