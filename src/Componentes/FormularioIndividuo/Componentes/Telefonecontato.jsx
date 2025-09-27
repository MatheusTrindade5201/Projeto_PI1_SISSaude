import { handleDataChange } from "../../../Helpers/handleDataChange";
import TextInput from "../../Inputs/TextInput";
import "../../../styles/styleFormularioIndividuo.css";

function Telefonecontato({ formData, setFormData }) {
  return (
    <div className="secao-form-container">
      <h3 className="titulos-secoes" style={{ width: "min-content" }}>
        Telefones
      </h3>
      <div className="form-container">
        <TextInput
          id="telefone_residencia"
          label="Residencial"
          value={formData.telefone_residencia}
          onChange={(e) =>
            handleDataChange(
              formData,
              setFormData,
              "telefone_residencia",
              e.target.value
            )
          }
          placeholder="(00) 00000-0000"
        />

        <TextInput
          id="telefone_contato"
          label="Contato"
          value={formData.telefone_contato}
          onChange={(e) =>
            handleDataChange(
              formData,
              setFormData,
              "telefone_contato",
              e.target.value
            )
          }
          placeholder="(00) 00000-0000"
        />
      </div>
    </div>
  );
}

export default Telefonecontato;
