import React, { useEffect } from "react";
import "../styles/styleCidadaoList.css";
import { useGetCidadaos } from "../Hooks/useGetCidadaos";
import { NavLink } from "react-router-dom";

const CidadaoList = () => {
    const { cidadaos, loading, fetchCidadaos } = useGetCidadaos();

    useEffect(() => {
        fetchCidadaos();
    }, []);

    return (
        <div className="cidadao-list-container">
            <h2 className="cidadao-title">Lista de Cidadãos</h2>

            {loading ? (
                <div className="loader">Carregando...</div>
            ) : cidadaos.length === 0 ? (
                <div className="loader">Nenhum cidadão encontrado.</div>
            ) : (
                <div className="cidadao-cards">
                    {cidadaos.map((cidadao) => (
                        <div className="cidadao-card" key={cidadao.id}>
                            <h3 className="cidadao-name">{cidadao.nome_completo}</h3>
                            <p>
                                <strong>CPF:</strong> {cidadao.cpf}
                            </p>
                            <p>
                                <strong>Data de Nascimento:</strong> {cidadao.data_nascimento}
                            </p>
                            <p>
                                <strong>Celular:</strong> {cidadao.celular}
                            </p>
                            <NavLink
                                className="details-button"
                                to={`/cidadaos/editar/${cidadao.id}`}
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

export default CidadaoList;