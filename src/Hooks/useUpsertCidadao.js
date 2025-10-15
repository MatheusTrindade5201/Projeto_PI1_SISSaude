import { useState } from "react";
import { useAlert } from "../Context/AlertContext";
import { addCidadao, updateCidadao } from "../services/cidadao";
import { useNavigate } from "react-router";

export const useUpsertCidadao = (cidadaoID) => {
  const [isLoading, setIsLoading] = useState(false);
  const { handleSuccess, handleAlert, handleError } = useAlert();
  const navigate = useNavigate();

  const submitForm = async (cidadaoFormData) => {
    try {
      setIsLoading(true);

      let response;
      if (cidadaoID) {
        response = await updateCidadao(cidadaoFormData, cidadaoID);
      } else {
        response = await addCidadao(cidadaoFormData);
      }

      const successMessage = cidadaoID
        ? "Cidadão atualizado com sucesso!"
        : "Cidadão cadastrado com sucesso!";

      handleSuccess(successMessage);
      // Navega para a home após o sucesso
      navigate("/");

    } catch (error) {
      if (error?.response?.status === 422) {
        handleAlert("O formulário não foi preenchido corretamente.");
        return;
      }
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    submitForm,
  };
};