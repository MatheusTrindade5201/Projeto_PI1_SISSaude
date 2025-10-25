import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { getCidadaos } from "../services/cidadao";
import { useAlert } from "../Context/AlertContext";
import "../styles/styleCidadaoList.css";

function CidadaosList() {
    const [cidadaos, setCidadaos] = useState([]);
    const [loading, setLoading] = useState(false);
    const { handleError } = useAlert();

    const fetchCidadaos = useCallback(async () => {
        setLoading(true);
        try {
            const data = await getCidadaos();
            setCidadaos(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Erro ao buscar cidadãos:", error);
            handleError(error, "Falha ao carregar a lista de cidadãos.");
            setCidadaos([]);
        } finally {
            setLoading(false);
        }
    }, [handleError]);

    useEffect(() => {
        fetchCidadaos();
    }, [fetchCidadaos]);

    const formatarData = (dataString) => {
        if (!dataString) return 'Não informada';
        try {
            return new Date(dataString + 'T00:00:00').toLocaleDateString('pt-BR');
        } catch (e) { return 'Data inválida'; }
    };

    return (
        <div className="cidadao-list-container">
            <h2 className="cidadao-title">Lista de Cidadãos</h2>
            {loading && <div className="loader">Carregando...</div>}

            {!loading && cidadaos.length === 0 && (
                <div className="loader">Nenhum cidadão encontrado.</div> // Usando loader como classe provisória
            )}
            {!loading && cidadaos.length > 0 && (
                <div className="cidadao-cards">
                    {cidadaos.map((cidadao) => (
                        <div className="cidadao-card" key={cidadao.id}>
                            <h3 className="cidadao-name">{cidadao.nome || cidadao.nome_completo || 'Nome não disponível'}</h3>
                            <p>
                                <strong>CPF:</strong> {cidadao.cpf || 'Não informado'}
                            </p>
                            <p>
                                <strong>Data de Nascimento:</strong> {formatarData(cidadao.data_nascimento)}
                            </p>
                            <p>
                                <strong>Celular:</strong> {cidadao.celular || 'Não informado'}
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

export default CidadaosList;