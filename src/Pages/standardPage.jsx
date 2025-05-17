import Cabecalho from "../Componentes/Cabecalho";
import AlertModal from "../Componentes/AlertModal";
import { useAlert } from "../Context/AlertContext";
import { Outlet } from "react-router";

const StandardPage = () => {
  const { showAlertModal, message, type } = useAlert();

  return (
    <>
      <Cabecalho />

      <Outlet />

      {showAlertModal && <AlertModal message={message} type={type} />}
    </>
  );
};

export default StandardPage;
