import { isDevMode } from "../Utils/env";
import { apiClient } from "./axios";

export const addDomicilio = (payload) => {
  if (isDevMode()) {
    console.log("Mock addDomicilio:", payload);
    return Promise.resolve({
      id: 10,
      cep: "77823000",
      municipio: "Araguaína",
      uf: "TO",
      bairro: "Setor Central",
      tipo_logradouro: "Rua",
      nome_logradouro: "Dom Pedro II",
      numero: "789",
      complemento: "Casa 2",
      pto_referencia: "Atrás da escola",
      microarea: "07",
      tipo_imovel: "CA",
      telefone_residencia: "6333445566",
      telefone_contato: "63999998888",
      situacao_moradia: "Própria",
      localizacao: "Rural",
      tipo_domicilio: "Casa",
      material_predominante: "Taipa",
      condicao_posse_producao_rural: "Posse",
      n_moradores: 6,
      n_comodos: 7,
      tipo_acesso: "Estrada de terra",
      energia_eletrica: false,
      abastecimento_agua: "Cacimba",
      escoamento_banheiro: "Céu aberto",
      agua_consumo: "Cacimba",
      destino_lixo: "Queima",
      registered_by: 5,
      last_updated_by: 5,
      status: 1,
      created_at: "2025-05-17T20:00:00.000Z",
      updated_at: "2025-05-17T21:00:00.000Z",
      deleted_at: null,
      animais: [
        {
          id: 20,
          domicilio_id: 10,
          animal: "Porco",
          quantidade: 3,
        },
      ],
    });
  }

  return apiClient.post("residence", payload).then((res) => res.data);
};

export const updateDomicilio = (payload, domicilioId) => {
  if (isDevMode()) {
    console.log("Mock updateDomicilio:", payload);
    return Promise.resolve({
      id: 10,
      cep: "77823000",
      municipio: "Araguaína",
      uf: "TO",
      bairro: "Setor Central",
      tipo_logradouro: "Rua",
      nome_logradouro: "Dom Pedro II",
      numero: "789",
      complemento: "Casa 2",
      pto_referencia: "Atrás da escola",
      microarea: "07",
      tipo_imovel: "CA",
      telefone_residencia: "6333445566",
      telefone_contato: "63999998888",
      situacao_moradia: "Própria",
      localizacao: "Rural",
      tipo_domicilio: "Casa",
      material_predominante: "Taipa",
      condicao_posse_producao_rural: "Posse",
      n_moradores: 6,
      n_comodos: 7,
      tipo_acesso: "Estrada de terra",
      energia_eletrica: false,
      abastecimento_agua: "Cacimba",
      escoamento_banheiro: "Céu aberto",
      agua_consumo: "Cacimba",
      destino_lixo: "Queima",
      registered_by: 5,
      last_updated_by: 5,
      status: 1,
      created_at: "2025-05-17T20:00:00.000Z",
      updated_at: "2025-05-17T21:00:00.000Z",
      deleted_at: null,
      animais: [
        {
          id: 20,
          domicilio_id: 10,
          animal: "Porco",
          quantidade: 3,
        },
      ],
    });
  }

  return apiClient
    .patch(`residence/${domicilioId}`, payload)
    .then((res) => res.data);
};

export const deleteDomicilioById = (domicilioId) => {
  if (isDevMode()) {
    console.log("Mock deleteDomicilioById:", domicilioId);
    return Promise.resolve({ success: true });
  }

  return apiClient.delete(`residence/${domicilioId}`).then((res) => res.data);
};

export const getDomicilio = () => {
  if (isDevMode()) {
    return Promise.resolve([
      {
        id: 1,
        cep: "04567000",
        municipio: "Campinas",
        uf: "SP",
        bairro: "Jardim das Flores",
        tipo_logradouro: "Avenida",
        nome_logradouro: "Brasil",
        numero: "1000",
        complemento: "Casa",
        pto_referencia: "Próximo ao parque",
        microarea: "03",
        tipo_imovel: "CA",
        telefone_residencia: "1932456789",
        telefone_contato: "19987654321",
        situacao_moradia: "Própria",
        localizacao: "Urbana",
        tipo_domicilio: "Apartamento",
        material_predominante: "Madeira",
        condicao_posse_producao_rural: null,
        n_moradores: 3,
        n_comodos: 4,
        tipo_acesso: "Rua de terra",
        energia_eletrica: true,
        abastecimento_agua: "Poço",
        escoamento_banheiro: "Fossa",
        agua_consumo: "Poço",
        destino_lixo: "Queima",
        registered_by: 2,
        last_updated_by: null,
        status: 1,
        created_at: "2025-04-15T10:20:00.000Z",
        deleted_at: null,
        updated_at: null,
      },
      {
        id: 3,
        cep: "11035010",
        municipio: "Santos",
        uf: "SP",
        bairro: "Ponta da Praia",
        tipo_logradouro: "Rua",
        nome_logradouro: "Afonso Pena",
        numero: "305",
        complemento: "Fundos",
        pto_referencia: "Em frente à padaria",
        microarea: "05",
        tipo_imovel: "AP",
        telefone_residencia: "1322233344",
        telefone_contato: "13988887777",
        situacao_moradia: "Alugada",
        localizacao: "Urbana",
        tipo_domicilio: "Casa",
        material_predominante: "Alvenaria",
        condicao_posse_producao_rural: null,
        n_moradores: 2,
        n_comodos: 3,
        tipo_acesso: "Rua asfaltada",
        energia_eletrica: true,
        abastecimento_agua: "Rede pública",
        escoamento_banheiro: "Rede pública",
        agua_consumo: "Rede pública",
        destino_lixo: "Coleta pública",
        registered_by: 1,
        last_updated_by: 1,
        status: 1,
        created_at: "2025-04-12T09:00:00.000Z",
        deleted_at: null,
        updated_at: "2025-04-13T08:00:00.000Z",
      },
      {
        id: 2,
        cep: "11035010",
        municipio: "Santos",
        uf: "SP",
        bairro: "Ponta da Praia",
        tipo_logradouro: "Rua",
        nome_logradouro: "Afonso Pena",
        numero: "305",
        complemento: "Fundos",
        pto_referencia: "Em frente à padaria",
        microarea: "05",
        tipo_imovel: "AP",
        telefone_residencia: "1322233344",
        telefone_contato: "13988887777",
        situacao_moradia: "Alugada",
        localizacao: "Urbana",
        tipo_domicilio: "Casa",
        material_predominante: "Alvenaria",
        condicao_posse_producao_rural: null,
        n_moradores: 2,
        n_comodos: 3,
        tipo_acesso: "Rua asfaltada",
        energia_eletrica: true,
        abastecimento_agua: "Rede pública",
        escoamento_banheiro: "Rede pública",
        agua_consumo: "Rede pública",
        destino_lixo: "Coleta pública",
        registered_by: 1,
        last_updated_by: 1,
        status: 1,
        created_at: "2025-04-12T09:00:00.000Z",
        deleted_at: null,
        updated_at: "2025-04-13T08:00:00.000Z",
      },
    ]);
  }

  return apiClient.get("residence").then((res) => res.data);
};

export const getDomicilioById = (residenceId) => {
  if (isDevMode()) {
    return Promise.resolve({
      id: 3,
      cep: "60750000",
      municipio: "Fortaleza",
      uf: "CE",
      bairro: "Parangaba",
      tipo_logradouro: "Travessa",
      nome_logradouro: "Santa Clara",
      numero: "456",
      complemento: "Bloco B, ap 12",
      pto_referencia: "Ao lado do supermercado",
      microarea: "08",
      tipo_imovel: "AP",
      telefone_residencia: "8531234567",
      telefone_contato: "85999999999",
      situacao_moradia: "Cedida",
      localizacao: "Urbana",
      tipo_domicilio: "Apartamento",
      material_predominante: "Alvenaria",
      condicao_posse_producao_rural: null,
      n_moradores: 5,
      n_comodos: 6,
      tipo_acesso: "Rua asfaltada",
      energia_eletrica: true,
      abastecimento_agua: "Rede pública",
      escoamento_banheiro: "Rede pública",
      agua_consumo: "Rede pública",
      destino_lixo: "Coleta pública",
      registered_by: 6,
      last_updated_by: null,
      status: 1,
      created_at: "2025-04-10T08:30:00.000Z",
      deleted_at: null,
      updated_at: null,
      animais: [
        {
          id: 10,
          domicilio_id: 3,
          animal: "Papagaio",
          quantidade: 1,
        },
        {
          id: 11,
          domicilio_id: 3,
          animal: "Tartaruga",
          quantidade: 2,
        },
      ],
      individuos: [
        {
          individuo_id: 101,
          nome: "Carlos Pereira",
          nome_social: null,
          data_nascimento: "1985-07-11",
          cpf: "00011122233",
          cns: "123456789101112",
          celular: "85988885555",
          data_residencia: "2022-10-01",
          mudou: false,
          renda_familia_salario_minimos: 3,
          n_membros_familia: 5,
          responsavel: true,
        },
        {
          individuo_id: 102,
          nome: "Maria Luísa",
          nome_social: null,
          data_nascimento: "2012-03-18",
          cpf: null,
          cns: null,
          celular: null,
          data_residencia: "2022-10-01",
          mudou: false,
          renda_familia_salario_minimos: 0,
          n_membros_familia: 5,
          responsavel: false,
        },
      ],
    });
  }

  return apiClient.get(`residence/${residenceId}`).then((res) => res.data);
};
