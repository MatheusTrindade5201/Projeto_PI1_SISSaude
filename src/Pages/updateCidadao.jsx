import { useEffect } from "react";
import FormularioCidadaoWrapper from "../Componentes/FormularioCidadao/index.jsx";
import { useGetCidadaos } from "../Hooks/useGetCidadaos";
import { useParams } from "react-router-dom";

function UpdateCidadao() {
    const { id } = useParams();
    const { fetchCidadaoById, loading, cidadao } = useGetCidadaos();

    useEffect(() => {
        fetchCidadaoById(id);
    }, [id]);

    return (
        <>
            {loading ? (
                <div className="loader">Carregando...</div>
            ) : !cidadao ? (
                <div className="loader">Nenhum cidadão encontrado.</div>
            ) : (
                <div>
                    <FormularioCidadaoWrapper cidadao={cidadao} />
                </div>
            )}
        </>
    );
}

export default UpdateCidadao;