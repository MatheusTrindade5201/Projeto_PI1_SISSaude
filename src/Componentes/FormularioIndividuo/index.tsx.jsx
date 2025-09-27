import { useState } from "react";
import { useUpsertResidence } from "../../Hooks/useUpsertResidence";
import { useDeleteResidence } from "../../Hooks/useDeleteResidences";
import EndLocaldepermanencia from "./Componentes/EndLocaldepermanencia";
import Telefonecontato from "./Componentes/Telefonecontato";
import AnimaisDomicilio from "./Componentes/AnimaisDomicilio";
import CondMoradia from "./Componentes/CondMoradia";
import "../../styles/styleFormularioIndividuo.css";
import { FiSave, FiTrash } from "react-icons/fi";

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
    <div className="tabs-wrapper">
      <div className="residencia-grid">
        <EndLocaldepermanencia
          formData={residenceFormData}
          setFormData={setResidenceFormData}
        />
        <Telefonecontato
          formData={residenceFormData}
          setFormData={setResidenceFormData}
        />
        <AnimaisDomicilio
          formData={residenceFormData}
          setFormData={setResidenceFormData}
        />
      </div>

      <CondMoradia
        formData={residenceFormData}
        setFormData={setResidenceFormData}
      />

      <div className="form-actions">
        <button
          onClick={() => submitForm(residenceFormData)}
          disabled={isLoading || isLoadingDelete}
        >
          {isLoading ? "Enviando..." : "Enviar"} <FiSave />
        </button>
        {residenceID && (
          <button
            onClick={() => {
              if (
                window.confirm("Tem certeza que deseja deletar este domicílio?")
              ) {
                deleteResidence(residenceID);
              }
            }}
            disabled={isLoading || isLoadingDelete}
            className="delete-btn"
          >
            {isLoading ? "Deletando..." : "Deletar"} <FiTrash />
          </button>
        )}
      </div>
    </div>
  );
}

export default TabsWrapper;
