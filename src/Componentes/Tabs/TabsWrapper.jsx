import { useState } from "react";
import Tab1 from "./Tab1";
import { useUpsertResidence } from "../../Hooks/useUpsertResidence";
import { useDeleteResidence } from "../../Hooks/useDeleteResidences";

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

function TabsWrapper({ residence }) {
  const residenceID = residence?.id;
  const [residenceFormData, setResidenceFormData] = useState(
    residence || defaultResidenceDataScheme
  );

  const { submitForm, isLoading } = useUpsertResidence(residenceID);

  const { deleteResidence, isLoadingDelete } = useDeleteResidence();

  return (
    <>
      <Tab1 formData={residenceFormData} setFormData={setResidenceFormData} />
      <button
        onClick={() => {
          submitForm(residenceFormData);
        }}
        disabled={isLoading || isLoadingDelete}
      >
        {!isLoading && <p>Enviar</p>}

        {isLoading && <p>Enviando...</p>}
      </button>
      <button
        onClick={() => {
          const confirmed = window.confirm(
            "Tem certeza que deseja deletar este domicílio?"
          );
          if (confirmed) {
            deleteResidence(residenceID);
          }
        }}
        disabled={isLoading || isLoadingDelete}
      >
        {!isLoading && <p>Deletar</p>}

        {isLoading && <p>Deletando...</p>}
      </button>
    </>
  );
}

export default TabsWrapper;
