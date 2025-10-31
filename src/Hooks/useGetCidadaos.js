import { useState } from "react";
import { getCidadaos, getCidadaoById } from "../services/cidadao";
import { useAlert } from "../Context/AlertContext";

export const useGetCidadaos = () => {
    const [cidadaos, setCidadaos] = useState([]);
    const [cidadao, setCidadao] = useState();
    const [loading, setLoading] = useState(false);

    const { handleError } = useAlert();

    const fetchCidadaos = async () => {
        try {
            setLoading(true);
            const response = await getCidadaos();
            setCidadaos(response);
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    const fetchCidadaoById = async (cidadaoId) => {
        try {
            setLoading(true);
            const response = await getCidadaoById(cidadaoId);
            setCidadao(response);
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    return {
        cidadaos,
        cidadao,
        loading,
        fetchCidadaos,
        fetchCidadaoById,
    };
};