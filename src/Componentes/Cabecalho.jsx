import "../styles/styleCabecalhoRodape.css";

function Cabecalho() {
  return (
    <div id="cabecalho" className="cabecalho">
      <div id="sissaude" className="sissaudeLogotipo" align="left">
        <img
          src="./src/assets/logotipo_sissaude_v01.png"
          alt="Logotipo Sissaude"
          width="180"
        />
        <p id="paragraphCabecalho">Cadastro de dados de Sistema de Saúde</p>
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
