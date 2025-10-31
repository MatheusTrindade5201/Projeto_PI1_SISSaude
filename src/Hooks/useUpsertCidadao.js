import { useState } from "react";
import { useAlert } from "../Context/AlertContext";
import { addCidadao, updateCidadao } from "../services/cidadao";
import { useNavigate } from "react-router";

export const useUpsertCidadao = (cidadaoID) => {
  const [isLoading, setIsLoading] = useState(false);
  const { handleSuccess, handleAlert, handleError } = useAlert();
  const navigate = useNavigate();

  const submitForm = async (cidadaoFormData) => {
    try {
      setIsLoading(true);
      let response;

      const payload = {};
      const camposObrigatoriosApi = [
        "cns",
        "cpf",
        "domicilio",
        "nome",
        "data_nascimento",
        "sexo",
        "raca_cor",
        "etnia",
        "nacionalidade",
        "pais",
        "municipio_nascimento",
        "uf_nascimento",
        "celular",
        "email",
      ];
      const camposDiretos = [
        "cns",
        "cpf",
        "domicilio",
        "nome",
        "nome_social",
        "data_nascimento",
        "sexo",
        "raca_cor",
        "etnia",
        "nome_mae",
        "nome_pai",
        "nacionalidade",
        "pais",
        "data_naturalizacao",
        "naturalizacao_portaria",
        "municipio_nascimento",
        "uf_nascimento",
        "entrada_brasil_data",
        "celular",
        "email",
        "relacao_responsavel",
        "ocupacao",
        "frequenta_escola_creche",
        "escolaridade",
        "situacao_mercado_trabalho",
        "frequenta_cuidador",
        "participa_grupo_comunitario",
        "plano_saude",
        "membro_povo_comunidade_tradicional",
        "orientacao_sexual",
        "identidade_genero",
        "motivo_saida",
        "data_saida",
        "numero_declaracao_obito",
        "gestante",
        "maternidade_referencia",
        "fumante",
        "uso_alcool",
        "uso_drogas",
        "hipertensao",
        "diabetes",
        "avc_derrame",
        "infarto",
        "doenca_cardiaca",
        "hanseniase",
        "doenca_respiratoria",
        "tuberculose",
        "cancer",
        "internacao_recente",
        "internacao_motivo",
        "diagnostico_problema_mental",
        "acamado",
        "domiciliado",
        "praticas_ingestivas_complementares",
      ];
      camposDiretos.forEach((key) => {
        const value = cidadaoFormData[key];
        if (value === false || (value !== null && value !== undefined)) {
          if (
            typeof value === "string" &&
            value.trim() === "" &&
            !camposObrigatoriosApi.includes(key)
          ) {
            payload[key] = null;
          } else if (
            typeof value !== "string" ||
            value.trim() !== "" ||
            camposObrigatoriosApi.includes(key)
          ) {
            if (key === "domicilio") {
              payload[key] = String(value);
            } else {
              payload[key] = value;
            }
          }
        } else if (!camposObrigatoriosApi.includes(key)) {
          payload[key] = null;
        }
      });
      if (payload.sexo === "Masculino") {
        payload.sexo = "M";
      } else if (payload.sexo === "Feminino") {
        payload.sexo = "F";
      } else if (payload.sexo === "Ignorado") {
        payload.sexo = "I";
      } else if (payload.sexo && payload.sexo.length > 1) {
        console.warn(
          "Valor inesperado para sexo, usando primeira letra:",
          payload.sexo
        );
        payload.sexo = payload.sexo.substring(0, 1).toUpperCase();
      }
      payload.deficiencias = [];
      if (
        cidadaoFormData._tem_deficiencia &&
        cidadaoFormData._tipo_deficiencia &&
        cidadaoFormData._tipo_deficiencia !== "Não"
      ) {
        payload.deficiencias = cidadaoFormData._tipo_deficiencia
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s);
      }
      payload.doencas_cardiacas = [];
      if (
        cidadaoFormData.doenca_cardiaca &&
        cidadaoFormData._doenca_cardiaca_tipo &&
        cidadaoFormData._doenca_cardiaca_tipo !== "Não tem"
      ) {
        payload.doencas_cardiacas = cidadaoFormData._doenca_cardiaca_tipo
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s);
      }
      payload.doencas_renais = [];
      if (
        cidadaoFormData._problemas_renais_tipo &&
        cidadaoFormData._problemas_renais_tipo !== "Não tem"
      ) {
        payload.doencas_renais = cidadaoFormData._problemas_renais_tipo
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s);
      }
      payload.doencas_respiratorias = [];
      if (
        cidadaoFormData.doenca_respiratoria &&
        cidadaoFormData._doenca_respiratoria_tipo &&
        cidadaoFormData._doenca_respiratoria_tipo !== "Não tem"
      ) {
        payload.doencas_respiratorias =
          cidadaoFormData._doenca_respiratoria_tipo
            .split(",")
            .map((s) => s.trim())
            .filter((s) => s);
      }
      payload.condicoes = [];
      if (cidadaoFormData._outras_condicoes_1?.trim())
        payload.condicoes.push(cidadaoFormData._outras_condicoes_1.trim());
      if (cidadaoFormData._outras_condicoes_2?.trim())
        payload.condicoes.push(cidadaoFormData._outras_condicoes_2.trim());
      if (cidadaoFormData._outras_condicoes_3?.trim())
        payload.condicoes.push(cidadaoFormData._outras_condicoes_3.trim());
      payload.cuidadores = [];
      if (cidadaoFormData.cuidadores) {
        payload.cuidadores = cidadaoFormData.cuidadores
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s);
      } else if (cidadaoFormData.frequenta_cuidador) {
        payload.cuidadores.push("Informado que frequenta cuidador");
      }
      if (cidadaoFormData._em_situacao_de_rua) {
        payload.condicao_rua = {};
        if (cidadaoFormData._tempo_situacao_rua)
          payload.condicao_rua.tempo = cidadaoFormData._tempo_situacao_rua;
        else payload.condicao_rua.tempo = null;
        payload.condicao_rua.recebe_beneficio =
          !!cidadaoFormData._recebe_beneficio;
        payload.condicao_rua.referencia_familiar =
          !!cidadaoFormData._possui_referencia_familiar;
        let refeicoesValorApi = null;
        if (cidadaoFormData._refeicoes_ao_dia === "Uma") refeicoesValorApi = 1;
        else if (cidadaoFormData._refeicoes_ao_dia === "Duas")
          refeicoesValorApi = 2;
        else if (cidadaoFormData._refeicoes_ao_dia === "Três")
          refeicoesValorApi = 3;
        else if (cidadaoFormData._refeicoes_ao_dia === "Mais de três")
          refeicoesValorApi = 4;
        payload.condicao_rua.refeicoes_dia = refeicoesValorApi;
        payload.condicao_rua.visita_familiar =
          !!cidadaoFormData._visita_familiar;
        if (cidadaoFormData._grau_parentesco_visita)
          payload.condicao_rua.graus_parentesco_familiar =
            cidadaoFormData._grau_parentesco_visita;
        else payload.condicao_rua.graus_parentesco_familiar = null;
        if (
          cidadaoFormData._acompanhado_por_instituicao &&
          cidadaoFormData._nome_instituicao
        ) {
          payload.condicao_rua.instituicao_apoio =
            cidadaoFormData._nome_instituicao;
        } else {
          payload.condicao_rua.instituicao_apoio = null;
        }
        payload.condicao_rua.origem_alimentacao = [];
        if (cidadaoFormData._origem_alimentacao_restaurante_popular)
          payload.condicao_rua.origem_alimentacao.push("Restaurante Popular");
        if (cidadaoFormData._origem_alimentacao_doacao_grupo_religioso)
          payload.condicao_rua.origem_alimentacao.push(
            "Doação Grupo Religioso"
          );
        if (cidadaoFormData._origem_alimentacao_doacao_restaurante)
          payload.condicao_rua.origem_alimentacao.push("Doação Restaurante");
        if (cidadaoFormData._origem_alimentacao_doacao_popular)
          payload.condicao_rua.origem_alimentacao.push("Doação Popular");
        if (cidadaoFormData._origem_alimentacao_outros)
          payload.condicao_rua.origem_alimentacao.push("Outras");
        payload.condicao_rua.acesso_higiene = [];
        if (cidadaoFormData._acesso_higiene_banho)
          payload.condicao_rua.acesso_higiene.push("Banho");
        if (cidadaoFormData._acesso_higiene_sanitario)
          payload.condicao_rua.acesso_higiene.push("Acesso ao sanitário");
        if (cidadaoFormData._acesso_higiene_bucal)
          payload.condicao_rua.acesso_higiene.push("Higiene Bucal");
        if (cidadaoFormData._acesso_higiene_outros)
          payload.condicao_rua.acesso_higiene.push("Outras");
        if (payload.condicao_rua.origem_alimentacao.length === 0)
          payload.condicao_rua.origem_alimentacao = null;
        if (payload.condicao_rua.acesso_higiene.length === 0)
          payload.condicao_rua.acesso_higiene = null;
        const condicaoKeys = Object.keys(payload.condicao_rua).filter(
          (k) =>
            payload.condicao_rua[k] !== null &&
            payload.condicao_rua[k] !== undefined &&
            (!Array.isArray(payload.condicao_rua[k]) ||
              payload.condicao_rua[k].length > 0)
        );
        if (condicaoKeys.length === 0) {
          payload.condicao_rua = null;
        }
      } else {
        payload.condicao_rua = null;
      }
      if (payload.cuidadores?.length === 0) payload.cuidadores = null;
      if (payload.condicoes?.length === 0) payload.condicoes = null;
      if (payload.deficiencias?.length === 0) payload.deficiencias = null;
      if (payload.doencas_cardiacas?.length === 0)
        payload.doencas_cardiacas = null;
      if (payload.doencas_renais?.length === 0) payload.doencas_renais = null;
      if (payload.doencas_respiratorias?.length === 0)
        payload.doencas_respiratorias = null;

      console.log(
        "Payload final a ser enviado:",
        JSON.stringify(payload, null, 2)
      );

      const camposFaltando = camposObrigatoriosApi.filter(
        (key) =>
          !(key in payload) ||
          payload[key] === null ||
          payload[key] === undefined ||
          String(payload[key]).trim() === ""
      );
      if (camposFaltando.length > 0) {
        const camposUnicosFaltando = [...new Set(camposFaltando)];
        const mensagemErro = `Erro: Campos obrigatórios (*) não preenchidos ou inválidos: ${camposUnicosFaltando.join(
          ", "
        )}. (Verifique se o ID do Domicílio foi informado)`;
        handleAlert(mensagemErro, "error");
        setIsLoading(false);
        return;
      }

      if (cidadaoID) {
        response = await updateCidadao(cidadaoID, payload);
      } else {
        response = await addCidadao(payload);
      }

      const successMessage = cidadaoID
        ? "Cidadão atualizado com sucesso!"
        : "Cidadão cadastrado com sucesso!";

      handleSuccess(successMessage, true);

      if (!cidadaoID && response?.id) {
        console.log("Navegando para edição:", response.id);
        setTimeout(() => navigate(`/cidadaos/editar/${response.id}`), 500);
      } else if (!cidadaoID) {
        console.log(
          "Navegando para lista (sem ID de retorno) e forçando recarga."
        );
        navigate(`/cidadaos/listar`);
        setTimeout(() => window.location.reload(), 600);
      } else {
        console.log("Edição concluída.");
      }
    } catch (error) {
      console.error(
        "Erro no submitForm:",
        error.response?.data || error.message
      );
      if (error?.response?.status === 400 || error?.response?.status === 422) {
        const apiErrorMessage =
          error.response?.data?.message?.pt_br ||
          error.response?.data?.message ||
          "Dados inválidos ou faltando.";
        let detailMessage = "";
        if (error.response?.data?.detail) {
          if (typeof error.response.data.detail === "string") {
            detailMessage = error.response.data.detail;
          } else if (Array.isArray(error.response.data.detail)) {
            detailMessage = error.response.data.detail
              .map(
                (err) =>
                  `${err.loc.length > 1 ? err.loc[1] : err.loc[0]}: ${err.msg}`
              )
              .join("; ");
          } else if (typeof error.response.data.detail === "object") {
            detailMessage = Object.entries(error.response.data.detail)
              .map(
                ([field, msg]) =>
                  `${field}: ${Array.isArray(msg) ? msg.join(", ") : msg}`
              )
              .join("; ");
          }
        }
        handleAlert(
          `Erro de validação: ${apiErrorMessage}${
            detailMessage ? " Detalhes: " + detailMessage : ""
          }`,
          "error"
        );
      } else {
        handleError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    submitForm,
    submitIndividuoForm: submitForm,
  };
};
