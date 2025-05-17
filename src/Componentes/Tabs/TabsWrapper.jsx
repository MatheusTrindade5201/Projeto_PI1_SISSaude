import { useState } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";

const defaultIndividualDataScheme = {
  cns: "",
  cpf: "",
  domicilio: "",
  nome: "",
  nome_social: "",
  data_nascimento: null,
  sexo: "",
  raca_cor: "",
  etnia: "",
  nome_mae: "",
  nome_pai: "",
  nacionalidade: "",
  pais: "",
  data_naturalizacao: null,
  naturalizacao_portaria: "",
  municipio_nascimento: "",
  uf_nascimento: "",
  entrada_brasil_data: null,
  celular: "",
  email: "",
  relacao_responsavel: "",
  ocupacao: "",
  frequenta_escola_creche: false,
  escolaridade: "",
  situacao_mercado_trabalho: "",
  frequenta_cuidador: false,
  participa_grupo_comunitario: false,
  plano_saude: false,
  membro_povo_comunidade_tradicional: false,
  orientacao_sexual: "",
  identidade_genero: "",
  motivo_saida: "",
  data_saida: null,
  numero_declaracao_obito: "",
  gestante: "",
  maternidade_referencia: "",
  fumante: false,
  uso_alcool: false,
  uso_drogas: false,
  hipertensao: false,
  diabetes: false,
  avc_derrame: false,
  infarto: false,
  doenca_cardiaca: false,
  problemas_renais: false,
  hanseniase: false,
  doenca_respiratoria: false,
  tuberculose: false,
  cancer: false,
  internacao_recente: false,
  internacao_motivo: "",
  diagnostico_problema_mental: false,
  acamado: false,
  domiciliado: false,
  praticas_ingestivas_complementares: false,
  cuidadores: [],
  concicoes: [],
  deficiencias: [],
  doencas_cardiacas: [],
  doencas_respiratorias: [],
  doencas_renais: [],
  condicao_rua: {
    tempo: "",
    recebe_beneficio: false,
    referencia_familiar: false,
    refeicoes_dia: 0,
    visita_familiar: false,
    graus_parentesco_familiar: "",
    instituicao_apoio: "",
    origem_alimentacao: [],
    acesso_higiene: [],
  },
};

const defaultResidenceDataScheme = {
  cep: "",
  municipio: "",
  uf: "",
  bairro: "",
  tipo_logradouro: "",
  nome_logradouro: "",
  numero: "",
  complemento: "",
  pto_referencia: "",
  microarea: "",
  tipo_imovel: "",
  telefone_residencia: "",
  telefone_contato: "",
  situacao_moradia: "",
  localizacao: "",
  tipo_domicilio: "",
  material_predominante: "",
  condicao_posse_producao_rural: "",
  n_moradores: 0,
  n_comodos: 0,
  tipo_acesso: "",
  energia_eletrica: false,
  abastecimento_agua: "",
  escoamento_banheiro: "",
  agua_consumo: "",
  destino_lixo: "",
  animais: [],
};

function TabsWrapper({ currentTabIndex }) {
  const [residenceFormData, setResidenceFormData] = useState(
    defaultResidenceDataScheme
  );
  const [individualFormData, setIndividualFormData] = useState(
    defaultIndividualDataScheme
  );

  const tabs = [
    <Tab1 formData={residenceFormData} setFormData={setResidenceFormData} />,
    <Tab2 formData={residenceFormData} setFormData={setResidenceFormData} />,
    <Tab3 formData={individualFormData} setFormData={setIndividualFormData} />,
    <Tab4 formData={individualFormData} setFormData={setIndividualFormData} />,
  ];

  return (
    <>
      {tabs[currentTabIndex]}
      <button
        onClick={() =>
          console.log({
            residence: residenceFormData,
            individual: individualFormData,
          })
        }
      >
        Logar objeto
      </button>
    </>
  );
}

export default TabsWrapper;
