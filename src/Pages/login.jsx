import { useState } from "react";
import "../styles/styleLogin.css";
import { useAlert } from "../Context/AlertContext.jsx";
import { useAuth } from "../Context/AuthContext.jsx";
import AlertModal from "../Componentes/AlertModal.jsx";

function Login() {
  const { showAlertModal, message, type, handleAlert } = useAlert();
  const { signIn, isLoading } = useAuth();

  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await signIn({ username: matricula, password: senha });

    if (response !== undefined) {
      handleAlert(response, "error");
    }
  };

  return (
    <div className="page">
      <form
        className="form"
        onSubmit={handleSubmit}
        aria-label="Formulário de login"
      >
        <div className="container">
          <div align="left">
            <p>
              <img
                src="/logotipo_sissaude_v01.png"
                alt="Logotipo Sissaude"
                width="180"
              />
            </p>
            <p id="paragraphLogin">Cadastro de dados de Sistema de Saúde</p>
          </div>

          <div className="input-container">
            <label htmlFor="matricula" className="visually-hidden">
              Matrícula
            </label>
            <input
              id="matricula"
              className="login-input"
              type="text"
              placeholder="Matrícula"
              name="matricula"
              required
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
            />

            <label htmlFor="senha" className="visually-hidden">
              Senha
            </label>
            <input
              id="senha"
              className="login-input"
              type="password"
              placeholder="Senha"
              name="senha"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div align="right">
            <button
              disabled={isLoading}
              className="buttonLogin"
              type="submit"
              aria-busy={isLoading}
              aria-label="Fazer login"
            >
              {isLoading ? "Entrando..." : "Login"}
            </button>
          </div>
        </div>
      </form>

      {showAlertModal && <AlertModal message={message} type={type} />}
    </div>
  );
}

export default Login;
