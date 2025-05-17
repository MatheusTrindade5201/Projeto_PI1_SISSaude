import { useState } from "react";
import { useAlert } from "../Context/AlertContext";
import { addDomicilio, updateDomicilio } from "../services/domicilio";
import { useNavigate } from "react-router";

export const useUpsertResidence = (residenceID) => {
  const [isLoading, setIsLoading] = useState(false);
  const { handleSuccess, handleAlert, handleError } = useAlert();

  const navigate = useNavigate();

  const submitForm = async (residenceFormData) => {
    try {
      setIsLoading(true);

      let residenceResponse;

      if (residenceID) {
        residenceResponse = await updateDomicilio(
          residenceFormData,
          residenceID
        );
      } else {
        residenceResponse = await addDomicilio(residenceFormData);
      }

      const successMessage = residenceID
        ? "Domicilio atualizado com sucesso!"
        : "Domicilio cadastrado com sucesso!";

      handleSuccess(successMessage);

      if (residenceResponse) navigate(`/editar/${residenceResponse.id}`);
    } catch (error) {
      const status = error?.response?.status;

      if (status === 422) {
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
