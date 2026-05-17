import { useState } from "react";
import { useNavigate } from "react-router";
import { registerDeveloper } from "../../../services/developerPortal";
import "../../../styles/stylePortal.css";

function PortalRegister() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [createdKey, setCreatedKey] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }
    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }
    setLoading(true);
    try {
      const data = await registerDeveloper(name, email, password);
      setCreatedKey(data.api_key);
    } catch (err) {
      const msg =
        err?.response?.data?.description ||
        err?.response?.data?.message ||
        "Erro ao criar conta. Tente novamente.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(createdKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (createdKey) {
    return (
      <div className="portal-page">
        <div className="portal-card">
          <h1 className="portal-title">Conta criada!</h1>
          <p className="portal-subtitle">
            Sua chave de API foi gerada. Guarde-a agora — ela não será exibida novamente.
          </p>
          <div className="portal-key-warning">
            ⚠ Esta é a única vez que sua chave será exibida
          </div>
          <div className="portal-key-box">
            <code>{createdKey}</code>
          </div>
          <button className="portal-btn portal-btn-secondary" onClick={handleCopy}>
            {copied ? "Copiado!" : "Copiar chave"}
          </button>
          <button
            className="portal-btn portal-btn-primary"
            style={{ marginTop: "1.5rem" }}
            onClick={() => navigate("/portal/login")}
          >
            Fazer login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="portal-page">
      <div className="portal-card">
        <button className="portal-back" onClick={() => navigate("/portal")}>
          ← Voltar
        </button>
        <h1 className="portal-title">Criar conta</h1>
        <form onSubmit={handleSubmit} className="portal-form">
          <div className="portal-field">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              required
              className="portal-input"
            />
          </div>
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
              placeholder="Mínimo 6 caracteres"
              required
              className="portal-input"
            />
          </div>
          <div className="portal-field">
            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Repita a senha"
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
            {loading ? "Criando..." : "Criar conta e obter chave"}
          </button>
        </form>
        <p className="portal-hint">
          Já tem conta?{" "}
          <button className="portal-link" onClick={() => navigate("/portal/login")}>
            Entrar
          </button>
        </p>
      </div>
    </div>
  );
}

export default PortalRegister;
