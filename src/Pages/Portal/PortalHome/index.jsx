import { useNavigate } from "react-router";
import "../../../styles/stylePortal.css";

function PortalHome() {
  const navigate = useNavigate();

  return (
    <div className="portal-page">
      <div className="portal-card">
        <div className="portal-logo">
          <img src="/logotipo_sissaude_v01.png" alt="SisSaúde" width="160" />
        </div>
        <h1 className="portal-title">Portal do Desenvolvedor</h1>
        <p className="portal-subtitle">
          Acesse dados de saúde pública anonimizados através da nossa API.
          Obtenha sua chave de acesso e explore a documentação interativa.
        </p>
        <div className="portal-button-group">
          <button
            className="portal-btn portal-btn-primary"
            onClick={() => navigate("/portal/registro")}
          >
            Criar conta
          </button>
          <button
            className="portal-btn portal-btn-secondary"
            onClick={() => navigate("/portal/login")}
          >
            Já tenho conta
          </button>
        </div>
        <div className="portal-links">
          <button
            className="portal-link"
            onClick={() => navigate("/portal/docs")}
          >
            Ver documentação da API
          </button>
        </div>
      </div>
    </div>
  );
}

export default PortalHome;
