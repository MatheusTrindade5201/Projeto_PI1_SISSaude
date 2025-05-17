import { createContext, useContext, useState } from "react";
import {
  clearCurrentTimeOut,
  nullifyTimeOut,
  setCurrentTimeout,
} from "../Helpers/handleTimeout";

const AlertContext = createContext({});

const AlertProvider = ({ children }) => {
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [showCrossPages, setShowCrossPages] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const handleAlert = (message, type, showCrossPages = false) => {
    setShowAlertModal(true);
    setMessage(message);

    clearCurrentTimeOut();

    const timeoutId = setTimeout(() => {
      setShowAlertModal(false);
      nullifyTimeOut();
    }, 5000);

    setCurrentTimeout(timeoutId);
    setType(type);
    setShowCrossPages(showCrossPages);
  };

  const handleError = (error, showCrossPages = false) => {
    let errorMessage;

    const message = error.response?.data?.message;

    if (message && typeof message === "object" && "pt_br" in message) {
      errorMessage = message.pt_br;
    } else if (typeof message === "string") {
      errorMessage = message;
    } else {
      errorMessage = "Erro inesperado! Por favor, tente novamente.";
    }

    handleAlert(errorMessage, "error", showCrossPages);
  };

  const handleSuccess = (successMessage, showCrossPages = false) => {
    handleAlert(successMessage, "success", showCrossPages);
  };

  return (
    <AlertContext.Provider
      value={{
        showAlertModal,
        message,
        type,
        handleAlert,
        handleError,
        handleSuccess,
        setShowAlertModal,
        showCrossPages,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

function useAlert() {
  return useContext(AlertContext);
}

export { AlertProvider, useAlert };
