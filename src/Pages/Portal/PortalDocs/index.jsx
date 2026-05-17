import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { useNavigate } from "react-router";
import "../../../styles/stylePortal.css";

const API_BASE = (import.meta.env.VITE_BASE_URL || "http://localhost:8000/").replace(/\/?$/, "/");

function PortalDocs() {
  const navigate = useNavigate();
  const storedKey = localStorage.getItem("cc_api_key");

  const requestInterceptor = (req) => {
    const key = localStorage.getItem("cc_api_key");
    if (key) {
      req.headers["X-API-Key"] = key;
    }
    return req;
  };

  return (
    <div className="portal-docs-page">
      <div className="portal-docs-topbar">
        <button className="portal-back" onClick={() => navigate("/portal")}>
          ← Portal
        </button>
        <h2 className="portal-docs-title">Documentação da API Pública</h2>
        {storedKey && (
          <span className="portal-docs-key-hint">
            Usando chave: <code>{storedKey.substring(0, 14)}...</code>
          </span>
        )}
      </div>
      <SwaggerUI
        url={`${API_BASE}public/openapi.json`}
        requestInterceptor={requestInterceptor}
        persistAuthorization={true}
      />
    </div>
  );
}

export default PortalDocs;
