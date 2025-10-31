import { useState } from "react";
import { deleteCidadaoById } from "../services/cidadao";
import { useAlert } from "../Context/AlertContext";
import { useNavigate } from "react-router-dom";

export const useDeleteCidadao = () => {
  const [isLoadingDelete, setIsLoading] = useState(false);
  const { handleError, handleSuccess } = useAlert();
  const navigate = useNavigate();

  const deleteCidadao = async (cidadaoId) => {
    try {
      setIsLoading(true);

      await deleteCidadaoById(cidadaoId);

      handleSuccess("Cidadão apagado com sucesso");

      // Redireciona para a lista de cidadãos após apagar
      navigate("/cidadaos/listar"); 
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteCidadao, isLoadingDelete };
};