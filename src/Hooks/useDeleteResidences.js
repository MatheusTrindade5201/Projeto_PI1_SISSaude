import { useState } from "react";
import { deleteDomicilioById } from "../services/domicilio";
import { useAlert } from "../Context/AlertContext";
import { useNavigate } from "react-router";

export const useDeleteResidence = () => {
  const [isLoadingDelete, setIseLoading] = useState(false);

  const { handleError, handleSuccess } = useAlert();

  const navigate = useNavigate();

  const deleteResidence = async (residenceId) => {
    try {
      setIseLoading(true);

      await deleteDomicilioById(residenceId);

      handleSuccess("Domicilio deletado com sucesso");

      navigate("/listar");
    } catch (error) {
      handleError;
      error;
    } finally {
      setIseLoading;
      false;
    }
  };
  return { deleteResidence, isLoadingDelete };
};
