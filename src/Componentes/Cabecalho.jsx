import { NavLink, useLocation } from "react-router";
import "../styles/styleCabecalhoRodape.css";
import { useAuth } from "../Context/AuthContext";

function Cabecalho() {
  const { signOut } = useAuth();
  const location = useLocation();
  const isOnRoot = location.pathname === "/";

  return (
    <header className="cabecalho">
      {/* Logo e título */}
      <NavLink to="/" className="cabecalho-logo">
        <img
          src="/logotipo_sissaude_v01.png"
          alt="Logotipo SIS Saúde"
          className="logo-img"
        />
        <p className="logo-subtitle">Cadastro de dados do Sistema de Saúde</p>
      </NavLink>

      {/* Navegação / Ações */}
      <nav className="cabecalho-actions">
        {!isOnRoot && (
          <NavLink to={-1} className="voltar-btn">
            Voltar
          </NavLink>
        )}
        <button type="button" className="logout-btn" onClick={() => signOut()}>
          Logout
        </button>
      </nav>
    </header>
  );
}

export default Cabecalho;
