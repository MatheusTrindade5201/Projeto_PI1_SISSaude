import { useEffect, useState } from "react";
import "../styles/styleResidenceList.css";
import { useGetResidences } from "../Hooks/useGetResidences";
import { NavLink } from "react-router";
import SearchBar from "../Componentes/Inputs/SearchBar";

const ResidenceList = () => {
  const { residences, loading, fetchResidences } = useGetResidences();
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchResidences(query);
  }, [query]);

  return (
    <div className="residence-list-container">
      <h2 className="residence-title">Lista de Domicílios</h2>

      <SearchBar
        placeholder="Buscar por endereço, bairro ou município..."
        onSearch={setQuery}
      />

      {loading ? (
        <p role="status" aria-live="polite" className="loader">
          Carregando...
        </p>
      ) : residences.length === 0 ? (
        <p className="loader">Nenhum domicílio encontrado.</p>
      ) : (
        <ul className="residence-cards">
          {residences.map((res) => (
            <li className="residence-card" key={res.id}>
              <h3 className="residence-address">
                {res.tipo_logradouro} {res.nome_logradouro}, {res.numero}
              </h3>
              <p>
                <strong>Bairro:</strong> {res.bairro}
              </p>
              <p>
                <strong>Município:</strong> {res.municipio} - {res.uf}
              </p>
              <p>
                <strong>CEP:</strong> {res.cep}
              </p>
              <p>
                <strong>Moradores:</strong> {res.n_moradores}
              </p>
              <p>
                <strong>Telefone:</strong> {res.telefone_residencia}
              </p>
              <NavLink
                className="details-button"
                to={`/domicilios/editar/${res.id}`}
                aria-label={`Ver detalhes de ${res.tipo_logradouro} ${res.nome_logradouro}, ${res.numero}`}
              >
                Ver detalhes
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResidenceList;
