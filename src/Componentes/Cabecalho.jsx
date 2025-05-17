import { NavLink } from "react-router";
import "../styles/styleCabecalhoRodape.css";
import { useAuth } from "../Context/AuthContext";

function Cabecalho() {
  const { signOut } = useAuth();

  return (
    <div id="cabecalho" className="cabecalho">
      <div
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
          padding: "0 0 10px 0",
        }}
      >
        <NavLink to="/">
          <div id="sissaude" className="sissaudeLogotipo" align="left">
            <img
              src="./src/assets/logotipo_sissaude_v01.png"
              alt="Logotipo Sissaude"
              width="180"
            />
            <p id="paragraphCabecalho">Cadastro de dados de Sistema de Saúde</p>
          </div>
        </NavLink>
        <button type="submit" onClick={() => signOut()}>
          logout
        </button>
      </div>
      <div className="form-title" align="left">
        <p className="cadastroDomiciliar">Cadastro Domiciliar</p>
      </div>
    </div>
  );
}

function Rodape({ setNumber }) {
  <div style={{ display: "inline-block" }}>
    <button
      type="submit"
      className="botoesmenu"
      onClick={() => setNumber(1)}
    ></button>
    <button
      type="submit"
      className="botoesmenu"
      onClick={() => setNumber(2)}
    ></button>
    <button
      type="submit"
      className="botoesmenu"
      onClick={() => setNumber(3)}
    ></button>
    <button
      type="submit"
      className="botoesmenu"
      onClick={() => setNumber(4)}
    ></button>
  </div>;
}

export default Cabecalho;
