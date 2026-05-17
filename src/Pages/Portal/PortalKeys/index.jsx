import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getMyKeys, revokeKey } from "../../../services/developerPortal";
import { usePortal } from "../../../Context/PortalContext";
import "../../../styles/stylePortal.css";

function PortalKeys() {
  const navigate = useNavigate();
  const { isAuthenticated, developerEmail, signOut } = usePortal();
  const [keys, setKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [revoking, setRevoking] = useState(null);
  const [confirmRevoke, setConfirmRevoke] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/portal/login");
      return;
    }
    fetchKeys();
  }, [isAuthenticated]);

  const fetchKeys = async () => {
    setLoading(true);
    try {
      const data = await getMyKeys();
      setKeys(data);
    } catch (err) {
      if (err?.response?.status === 401) {
        signOut();
        navigate("/portal/login");
      } else {
        setError("Erro ao carregar chaves.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRevoke = async (keyId) => {
    setRevoking(keyId);
    try {
      await revokeKey(keyId);
      setKeys((prev) =>
        prev.map((k) => (k.id === keyId ? { ...k, status: "revoked" } : k))
      );
    } catch {
      setError("Erro ao revogar chave.");
    } finally {
      setRevoking(null);
      setConfirmRevoke(null);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="portal-page portal-page-wide">
      <div className="portal-card portal-card-wide">
        <div className="portal-header">
          <div>
            <h1 className="portal-title">Minhas chaves</h1>
            <p className="portal-subtitle-small">{developerEmail}</p>
          </div>
          <div className="portal-header-actions">
            <button
              className="portal-btn portal-btn-secondary portal-btn-sm"
              onClick={() => navigate("/portal/docs")}
            >
              Documentação
            </button>
            <button
              className="portal-btn portal-btn-ghost portal-btn-sm"
              onClick={() => { signOut(); navigate("/portal"); }}
            >
              Sair
            </button>
          </div>
        </div>

        {error && <p className="portal-error">{error}</p>}

        {loading ? (
          <p className="portal-hint">Carregando...</p>
        ) : keys.length === 0 ? (
          <p className="portal-hint">Nenhuma chave encontrada.</p>
        ) : (
          <div className="portal-table-wrapper">
            <table className="portal-table">
              <thead>
                <tr>
                  <th>Prefixo</th>
                  <th>Status</th>
                  <th>Último uso</th>
                  <th>Criada em</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                {keys.map((k) => (
                  <tr key={k.id}>
                    <td>
                      <code className="portal-prefix">{k.prefix}...</code>
                    </td>
                    <td>
                      <span className={`portal-badge portal-badge-${k.status}`}>
                        {k.status === "active" ? "Ativa" : "Revogada"}
                      </span>
                    </td>
                    <td>{formatDate(k.last_used_at)}</td>
                    <td>{formatDate(k.created_at)}</td>
                    <td>
                      {k.status === "active" && (
                        confirmRevoke === k.id ? (
                          <div className="portal-confirm">
                            <span>Confirmar?</span>
                            <button
                              className="portal-btn portal-btn-danger portal-btn-xs"
                              onClick={() => handleRevoke(k.id)}
                              disabled={revoking === k.id}
                            >
                              {revoking === k.id ? "..." : "Sim"}
                            </button>
                            <button
                              className="portal-btn portal-btn-ghost portal-btn-xs"
                              onClick={() => setConfirmRevoke(null)}
                            >
                              Não
                            </button>
                          </div>
                        ) : (
                          <button
                            className="portal-btn portal-btn-danger portal-btn-xs"
                            onClick={() => setConfirmRevoke(k.id)}
                          >
                            Revogar
                          </button>
                        )
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="portal-footer-hint">
          <p>
            Sua chave começa com o prefixo exibido acima. Inclua-a nas requisições:
            <code className="portal-inline-code"> X-API-Key: cc_xxxxxxxx_...</code>
          </p>
        </div>
      </div>

    </div>
  );
}

export default PortalKeys;
