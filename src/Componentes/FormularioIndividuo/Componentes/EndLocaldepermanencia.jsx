import { handleDataChange } from "../../../Helpers/handleDataChange";
import { UFs } from "../../../Utils/constants";
import SelectInput from "../../Inputs/SelectInput";
import TextInput from "../../Inputs/TextInput";
import "../../../styles/styleEndLocaldepermanencia.css";
import "../../../styles/styleFormularioIndividuo.css";

function EndLocaldepermanencia({ formData, setFormData }) {
  return (
    <div className="secao-form-container">
      <p className="titulos-secoes">Endereço/Local de Permanência</p>
      <div className="form-container">
        <div className="end-local-row">
          <div className="end-local-group">
            <TextInput
              label="CEP"
              value={formData.cep}
              onChange={(e) =>
                handleDataChange(formData, setFormData, "cep", e.target.value)
              }
              id="CEP"
              placeholder="00000-000"
              className="end-local-input"
            />
          </div>
          <div className="end-local-group">
            <TextInput
              label={"Município"}
              value={formData.municipio}
              onChange={(e) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "municipio",
                  e.target.value
                )
              }
              id="Municipio"
              placeholder="Guarulhos"
              className="end-local-input"
            />
          </div>
          <div className="end-local-group">
            <SelectInput
              label={"UF"}
              value={formData.uf}
              onChange={(e) =>
                handleDataChange(formData, setFormData, "uf", e.target.value)
              }
              items={UFs}
              className="end-local-select"
            />
          </div>
          <div className="end-local-group">
            <TextInput
              label={"Tipo de Imóvel"}
              value={formData.tipo_imovel}
              onChange={(e) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "tipo_imovel",
                  e.target.value
                )
              }
              id="tipo_imovel"
              placeholder="00"
              className="end-local-input"
            />
          </div>
          <div className="end-local-group">
            <TextInput
              label={"Bairro"}
              value={formData.bairro}
              onChange={(e) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "bairro",
                  e.target.value
                )
              }
              id="Bairro"
              className="end-local-input"
            />
          </div>
          <div className="end-local-group">
            <TextInput
              label={"Tipo de Logradouro"}
              value={formData.tipo_logradouro}
              onChange={(e) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "tipo_logradouro",
                  e.target.value
                )
              }
              id="Logradouro"
              className="end-local-input"
            />
          </div>
          <div className="end-local-group">
            <TextInput
              label={" Nome de Logradouro"}
              value={formData.nome_logradouro}
              onChange={(e) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "nome_logradouro",
                  e.target.value
                )
              }
              id="nome_logradouro"
              className="end-local-input"
            />
          </div>
          <div className="end-local-group">
            <TextInput
              label={"Microárea"}
              value={formData.microarea}
              onChange={(e) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "microarea",
                  e.target.value
                )
              }
              id="microarea"
              className="end-local-input"
            />
          </div>
        </div>
        <div className="end-local-row">
          <div className="end-local-group">
            <TextInput
              label={"Número"}
              value={formData.numero}
              onChange={(e) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "numero",
                  e.target.value
                )
              }
              id="numero"
              className="end-local-input"
            />
          </div>
          <div className="end-local-group">
            <TextInput
              label={"Ponto de Referência"}
              value={formData.pto_referencia}
              onChange={(e) =>
                handleDataChange(
                  formData,
                  setFormData,
                  "pto_referencia",
                  e.target.value
                )
              }
              id="pto_ref"
              className="end-local-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default EndLocaldepermanencia;
