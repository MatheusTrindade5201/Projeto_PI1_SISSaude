import React, { useState, useEffect, useCallback } from "react";
import { getCidadaos } from "../services/cidadao";
import { useAlert } from "../Context/AlertContext";
import "../styles/styleCidadaoList.css";
import SearchBar from "../Componentes/Inputs/SearchBar"; // Igual ao ResidenceList
import { NavLink } from "react-router";

function CidadaosList() {
  const [cidadaos, setCidadaos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const { handleError } = useAlert();

  const fetchCidadaos = useCallback(
    async (search = "") => {
      setLoading(true);
      try {
        const data = await getCidadaos(search);
        setCidadaos(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Erro ao buscar cidadãos:", error);
        handleError(error, "Falha ao carregar a lista de cidadãos.");
        setCidadaos([]);
      } finally {
        setLoading(false);
      }
    },
    [handleError]
  );

  useEffect(() => {
    fetchCidadaos(query);
  }, []);

  const formatarData = (dataString) => {
    if (!dataString) return "Não informada";
    try {
      return new Date(dataString + "T00:00:00").toLocaleDateString("pt-BR");
      // eslint-disable-next-line no-unused-vars
    } catch (_e) {
      return "Data inválida";
    }
  };

  return (
    <div className="cidadao-list-container">
      <h2 className="cidadao-title">Lista de Cidadãos</h2>

      <SearchBar
        placeholder="Buscar por nome ou CPF..."
        onSearch={fetchCidadaos}
      />

      {loading ? (
        <p role="status" aria-live="polite" className="loader">
          Carregando...
        </p>
      ) : cidadaos.length === 0 ? (
        <p className="loader">Nenhum cidadão encontrado.</p>
      ) : (
        <ul className="cidadao-cards">
          {cidadaos.map((cidadao) => (
            <li className="cidadao-card" key={cidadao.id}>
              <h3 className="cidadao-name">
                {cidadao.nome || cidadao.nome_completo || "Nome não disponível"}
              </h3>
              <p>
                <strong>CPF:</strong> {cidadao.cpf || "Não informado"}
              </p>
              <p>
                <strong>Data de Nascimento:</strong>{" "}
                {formatarData(cidadao.data_nascimento)}
              </p>
              <p>
                <strong>Celular:</strong> {cidadao.celular || "Não informado"}
              </p>
              <NavLink
                className="details-button"
                to={`/cidadaos/editar/${cidadao.id}`}
                aria-label={`Ver detalhes de ${cidadao.nome || "cidadão"}`}
              >
                Ver detalhes
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CidadaosList;
