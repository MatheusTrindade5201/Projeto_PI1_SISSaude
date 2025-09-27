import React, { useEffect } from "react";
import "../styles/styleResidenceList.css";
import { useGetResidences } from "../Hooks/useGetResidences";
import { NavLink } from "react-router";

const ResidenceList = () => {
  const { residences, loading, fetchResidences } = useGetResidences();

  useEffect(() => {
    fetchResidences();
  }, []);

  return (
    <div className="residence-list-container">
      <h2 className="residence-title">Lista de Domicílios</h2>

      {loading ? (
        <div className="loader">Carregando...</div>
      ) : residences.length === 0 ? (
        <div className="loader">Nenhum domicílio encontrado.</div>
      ) : (
        <div className="residence-cards">
          {residences.map((res) => (
            <div className="residence-card" key={res.id}>
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
              >
                Ver detalhes
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResidenceList;
