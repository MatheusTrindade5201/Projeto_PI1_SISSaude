import { useEffect, useState } from "react";
import "../styles/styleAlert.css";
import { useAlert } from "../Context/AlertContext";

const AlertModal = ({ type, message }) => {
  console.log(message);

  const dividedMessage = message ? message.split("/n") : [];

  const [showDiv, setShowDiv] = useState(false);
  const modalClass = type === "error" ? "modal-error" : "modal-success";

  const { setShowAlertModal, showCrossPages } = useAlert();

  useEffect(() => {
    setTimeout(() => {
      setShowDiv(true);
    }, 50);
  }, []);

  useEffect(() => {
    if (showDiv) {
      return () => {
        setShowAlertModal(false);
      };
    }
  }, [showDiv]);

  useEffect(() => {
    if (showDiv && !showCrossPages) {
      setShowAlertModal(false);
    }
  }, []);

  return (
    <div className={`alert-container ${showDiv ? "visible" : ""}`}>
      <span className={`alert-box ${modalClass}`}>
        <div className="alert-header">
          <h3 className="alert-title">
            {type === "error" ? "Erro" : "Sucesso"}
          </h3>
          <div className="alert-close" onClick={() => setShowAlertModal(false)}>
            X
          </div>
        </div>
        <div className="alert-message">
          {dividedMessage.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </span>
    </div>
  );
};

export default AlertModal;
