import { FiPlus, FiTrash2 } from "react-icons/fi";
import { handleDataChange } from "../../../Helpers/handleDataChange";
import "../../../styles/styleAnimaisDomicilio.css";
import "../../../styles/styleFormularioIndividuo.css";
import TextInput from "../../Inputs/TextInput";

function AnimaisDomicilio({ formData, setFormData }) {
  const handleRemove = (indexToRemove) => {
    const updatedAnimais = formData.animais.filter(
      (_, index) => index !== indexToRemove
    );
    setFormData({ ...formData, animais: updatedAnimais });
  };

  return (
    <div className="secao-form-container">
      <div className="header-secao">
        <h3 className="titulos-secoes">Animais</h3>
        <button
          type="button"
          onClick={() =>
            setFormData({
              ...formData,
              animais: [...formData.animais, { animal: "", quantidade: 0 }],
            })
          }
          className="btn-adicionar"
          aria-label="Adicionar animal"
        >
          <FiPlus />
        </button>
      </div>

      <div className="form-container">
        <div className="animais-list-container">
          {formData.animais.map((animal, index) => (
            <div className="linha-animal" key={index}>
              <TextInput
                id={`animal-${index}`}
                label="Animal"
                value={animal.animal}
                onChange={(e) =>
                  handleDataChange(
                    formData,
                    setFormData,
                    "animais",
                    e.target.value,
                    index,
                    "animal"
                  )
                }
                className="animal-input"
              />
              <TextInput
                id={`animal-quantidade-${index}`}
                label="Qtd"
                value={animal.quantidade}
                onChange={(e) =>
                  handleDataChange(
                    formData,
                    setFormData,
                    "animais",
                    e.target.value,
                    index,
                    "quantidade"
                  )
                }
              />
              <button
                type="button"
                className="btn-remover"
                onClick={() => handleRemove(index)}
                aria-label={`Remover animal ${index + 1}`}
              >
                <FiTrash2 />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnimaisDomicilio;
