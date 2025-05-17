import "../../styles/stylePag2.css";

function Tab2() {
  return (
    <div className="background">
      <div className="linha1">
        <div id="termo de recusa" className="termoRecusa">
          <h3 className="titulosSecoes">
            Termo de recusa do cadastro domiciliar de atenção básica
          </h3>
          <div className="bloco termo_Recusa">
            <p>
              Eu,
              <input
                id="NomeCidadao"
                className="campo_preenchimento"
                type="text"
                placeholder="Nome do Cidadão"
              />
              portador(a) do RG nº
              <input
                id="NomeCidadao"
                className="campo_preenchimento"
                type="text"
                placeholder="Número do RG"
              />
              , gozando de plena consciência dos meus atos, recuso este
              cadastro, mesmo que isso facilite o acompanhamento da minha saúde
              e de meus familiares. Estou ciente de que esta recusa não
              implicará no não atendimento da unidade de Saúde.
            </p>
          </div>
        </div>
        <div className="assinatura">
          <div>
            <div class="signature-container">
              <h3 className="titulosSecoes">Assinatura</h3>
              <canvas id="signature-pad"></canvas>
            </div>
          </div>
        </div>
      </div>

      <div className="linha2">
        <div>
          <h3 className="titulosSecoes">Instituição de Permanência</h3>
          <div style={{ display: "flex" }} className="bloco IP">
            <div className="nomeIP">
              <div>
                <label>Nome da Instituição de Permanência</label>
                <input
                  id="InstPerma"
                  className="campo_preenchimento"
                  type="text"
                  placeholder="Digite o nome da IP"
                />
              </div>
              <div>
                <label>CNS do Responsável</label>
                <input
                  id="CNSResponsavel"
                  className="campo_preenchimento"
                  type="text"
                  placeholder="Digite o CNS do Responsável"
                />
              </div>
            </div>
            <div>
              <div>
                <label>CNES</label>
                <input
                  id="CNES"
                  className="campo_preenchimento"
                  type="text"
                  placeholder="Digite o Cargo"
                />
              </div>
              <div>
                <label>CNES</label>
                <input
                  id="CNES"
                  className="campo_preenchimento"
                  type="text"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="linha1">
        <div className="termoRecusa">
          <h3 className="titulosSecoes">
            Termo de recusa do cadastro domiciliar de atenção básica
          </h3>
          <div style={{ display: "flex" }} className="bloco Recusa">
            <div>
              <p>
                Eu,
                <input
                  id="NomeCidadao"
                  className="campo_preenchimento"
                  type="text"
                  placeholder="Nome do Cidadão"
                />
                portador(a) do RG nº
                <input
                  id="NomeCidadao"
                  className="campo_preenchimento"
                  type="text"
                  placeholder="Número do RG"
                />
                , responsável técnico pela Instituição, recuso este cadastro
                mesmo que esta recusa dificulte o acompanhamento da saúde das
                pessoas abrigadas/residentes nesta Instituição. Estou ciente de
                que esta recusa não implicará no não atendimento da unidade de
                Saúde.
              </p>
            </div>
            <div className="assinatura">
              <h3 className="titulosSecoes">Assinatura</h3>
              <canvas id="board"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tab2;
