import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import TextInput from "../../../Inputs/TextInput";
import Checkbox from "../../../Inputs/Checkbox";
import {
  associateCidadaoDomicilio,
  getCidadaos,
  updateCidadaoDomicilio,
} from "../../../../services/cidadao";
import { useAlert } from "../../../../Context/AlertContext";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

export default function FamiliaModal({
  isEditing,
  initialData,
  onClose,
  residence,
  fetchResidence,
}) {
  const [formData, setFormData] = useState({
    domicilio_id: residence.id,
    individuo_id: "",
    individuo_nome: "",
    data_residencia: "",
    mudou: false,
    renda_familia_salario_minimos: "",
    n_membros_familia: "",
    responsavel: false,
  });

  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);

  const { handleSuccess, handleAlert, handleError } = useAlert();

  // Preenche dados ao editar
  useEffect(() => {
    if (initialData)
      setFormData({
        ...initialData,
        domicilio_id: residence.id,
        individuo_nome: initialData.nome,
      });
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCheckboxToggle = (field) => {
    setFormData((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  // 🔍 Busca indivíduos (com mock no modo dev)
  const handleSearchIndividuo = async (value) => {
    setFormData((prev) => ({ ...prev, individuo_nome: value }));

    if (value.trim().length < 3) {
      setSearchResults([]);
      return;
    }

    setSearching(true);
    try {
      const results = await getCidadaos(value);
      setSearchResults(results);
    } catch (err) {
      handleAlert(`Erro ao buscar indivíduos: ${err}`, "error");
      setSearchResults([]);
    } finally {
      setSearching(false);
    }
  };

  const handleSelectIndividuo = (individuo) => {
    setFormData((prev) => ({
      ...prev,
      individuo_id: individuo.id,
      individuo_nome: individuo.nome,
    }));
    setSearchResults([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      individuo_id,
      data_residencia,
      renda_familia_salario_minimos,
      n_membros_familia,
    } = formData;

    if (
      !individuo_id ||
      !data_residencia ||
      !renda_familia_salario_minimos ||
      !n_membros_familia
    ) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    try {
      setLoading(true);

      if (isEditing) {
        await updateCidadaoDomicilio(
          formData.individuo_id,
          residence.id,
          formData
        );
      } else {
        await associateCidadaoDomicilio(formData);
      }
      handleSuccess("Familia da residência atualizada com sucesso!");

      fetchResidence(residence.id);
      onClose();
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overlay">
      <form onSubmit={handleSubmit} className="modal-content">
        <div className="modal-header">
          <h3>{isEditing ? "Editar Membro Família" : "Novo Membro Família"}</h3>
          <button type="button" className="close-btn" onClick={onClose}>
            <FiX size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* Campo de busca de indivíduo */}
          <div style={{ position: "relative" }}>
            <TextInput
              id="individuo_nome"
              label="Indivíduo"
              value={formData.individuo_nome}
              placeholder="Buscar pelo nome ou CPF"
              onChange={(e) => handleSearchIndividuo(e.target.value)}
              name="individuo_nome"
            />
            {searching && (
              <div className="autocomplete-loading">Buscando...</div>
            )}
            {searchResults.length > 0 && (
              <ul className="autocomplete-list">
                {searchResults.map((ind) => (
                  <li
                    key={ind.id}
                    onClick={() => handleSelectIndividuo(ind)}
                    className="autocomplete-item"
                  >
                    <strong>{ind.nome}</strong>
                    <span style={{ marginLeft: "8px", fontSize: "0.85em" }}>
                      {ind.cpf || "Sem CPF"}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Checkbox
            id="responsavel"
            label="Responsável?"
            checked={formData.responsavel}
            onChange={() => handleCheckboxToggle("responsavel")}
          />

          <div className="row">
            <TextInput
              id="data_residencia"
              label="Data de Residência"
              type="date"
              name="data_residencia"
              value={formData.data_residencia}
              onChange={handleChange}
            />
            <Checkbox
              id="mudou"
              label="Mudou-se?"
              checked={formData.mudou}
              onChange={() => handleCheckboxToggle("mudou")}
            />
          </div>

          <TextInput
            id="renda_familia_salario_minimos"
            label="Renda Familiar (SM)"
            name="renda_familia_salario_minimos"
            value={formData.renda_familia_salario_minimos}
            placeholder="Ex: 2.5"
            onChange={handleChange}
            type="number"
            step="0.1"
          />

          <TextInput
            id="n_membros_familia"
            label="Nº Membros Família"
            name="n_membros_familia"
            value={formData.n_membros_familia}
            placeholder="Ex: 4"
            onChange={handleChange}
            type="number"
          />
        </div>

        <div className="modal-footer">
          <button type="button" className="btn-cancelar" onClick={onClose}>
            Cancelar
          </button>
          <button
            type="submit"
            className="btn-salvar-familia"
            disabled={loading}
          >
            {loading ? "Salvando..." : isEditing ? "Atualizar" : "Salvar"}
          </button>
        </div>
      </form>
    </div>
  );
}
