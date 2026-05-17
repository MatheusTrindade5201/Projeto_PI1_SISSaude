import { useState } from "react";
import { useNavigate } from "react-router";
import { loginDeveloper } from "../../../services/developerPortal";
import { usePortal } from "../../../Context/PortalContext";
import "../../../styles/stylePortal.css";

function PortalLogin() {
  const navigate = useNavigate();
  const { signIn } = usePortal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const data = await loginDeveloper(email, password);
      signIn(data.session_token, data.email);
      navigate("/portal/chaves");
    } catch {
      setError("E-mail ou senha inválidos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="portal-page">
      <div className="portal-card">
        <button className="portal-back" onClick={() => navigate("/portal")}>
          ← Voltar
        </button>
        <h1 className="portal-title">Acessar portal</h1>
        <form onSubmit={handleSubmit} className="portal-form">
          <div className="portal-field">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              className="portal-input"
            />
          </div>
          <div className="portal-field">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha"
              required
              className="portal-input"
            />
          </div>
          {error && <p className="portal-error">{error}</p>}
          <button
            type="submit"
            className="portal-btn portal-btn-primary"
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
        <p className="portal-hint">
          Não tem conta?{" "}
          <button className="portal-link" onClick={() => navigate("/portal/registro")}>
            Criar conta
          </button>
        </p>
      </div>
    </div>
  );
}

export default PortalLogin;
