import { useState } from "react";
import "../Componentes/Tabs/Tab1.jsx";
import "../styles/styleLogin.css";
import { useAlert } from "../Context/AlertContext.jsx";
import { useAuth } from "../Context/AuthContext.jsx";
import AlertModal from "../Componentes/AlertModal.jsx";

function Login() {
  const { showAlertModal, message, type } = useAlert();
  const [Matricula, setMatricula] = useState("");
  const handleMatriculaChange = (event) => {
    setMatricula(event.target.value);
  };
  const [senha, setSenhaValue] = useState("");
  const handleSenhaChange = (event) => {
    setSenhaValue(event.target.value);
  };

  const { signIn, isLoading } = useAuth();

  const { handleAlert } = useAlert();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await signIn({ username: Matricula, password: senha });

    if (response !== undefined) {
      handleAlert(response, "error");
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div class="container">
          <div align="left">
            <p>
              <img
                src="./src/assets/logotipo_sissaude_v01.png"
                alt="Logotipo Sissaude"
                width="180"
              />
            </p>
            <p id="paragraphLogin">Cadastro de dados de Sistema de Saúde</p>
          </div>
          <div>
            {" "}
            <input
              class="login"
              type="text"
              placeholder="Matrícula"
              name="matricula"
              required
              value={Matricula}
              onChange={handleMatriculaChange}
            />
          </div>
          <div>
            {" "}
            <input
              class="login"
              type="password"
              placeholder="Senha"
              name="senha"
              required
              value={senha}
              onChange={handleSenhaChange}
            />
          </div>
          <div align="right">
            <button disabled={isLoading} className="buttonLogin" type="submit">
              Login{" "}
              <p style={{ display: !isLoading ? "none" : "unset" }}>...</p>
            </button>
          </div>
          <div align="right">
            <a href="https://stackoverflow.com/questions/47875730/how-can-i-fix-jsx-a11y-anchor-is-valid-when-using-the-link-component-in-react">
              Esqueci minha senha
            </a>
          </div>
        </div>
      </form>
      {showAlertModal && <AlertModal message={message} type={type} />}
    </>
  );
}

export default Login;
