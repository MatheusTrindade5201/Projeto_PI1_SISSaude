import "../../styles/stylePags.css";

function Tab1() {
  return (
    <div className="background">
      <div style={{ display: "flex" }}>
        <div style={{ width: "55%" }}>
          <EndLocaldepermanencia />
          <div>
            <div className="boxesPag1">
              <Telefonecontato />
              <Familias />
            </div>
            <div>
              <AnimaisDomicilio />
            </div>
          </div>
        </div>
        <div style={{ width: "45%" }}>
          <CondMoradia />
        </div>
      </div>
    </div>
  );
}

const UFs = [
  "SP",
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SE",
  "TO",
];

function EndLocaldepermanencia() {
  function Options(props) {
    return <option>{props.brand}</option>;
  }
  function SetUF() {
    return (
      <>
        {UFs.map((item) => (
          <Options brand={item} />
        ))}
      </>
    );
  }

  return (
    <div id="End_Localdepermanencia">
      <p className="titulosSecoes">Endereço/Local de Permanência</p>
      <br />
      <div className="bloco">
        <div id="linha1" className="linha">
          <div>
            <label>CEP</label>
            <input
              id="CEP"
              className="campo_preenchimento CEP"
              type="number"
              placeholder="00000-000"
            />
          </div>
          <div>
            <label>Município</label>
            <input
              id="Municipio"
              className="campo_preenchimento Municipio"
              type="text"
              placeholder="Guarulhos"
            />
          </div>
          <div>
            <label>UF</label>
            <input
              list="UFs"
              name="browser"
              id="browser"
              className="campo_preenchimento UFs"
              placeholder="SP"
            />
            <datalist id="UFs">
              <SetUF />
            </datalist>
          </div>
          <div>
            <label>Tipo imóvel</label>
            <input
              id="tipo_imovel"
              className="campo_preenchimento Tipo_imovel"
              type="text"
              placeholder="00"
            />
          </div>
        </div>
        <br />
        <div id="linha2" className="linha">
          <div>
            <label>Bairro</label>
            <input
              id="Bairro"
              className="campo_preenchimento Bairro"
              type="text"
              placeholder=""
            />
          </div>
          <div>
            <label>Tipo de Logradouro</label>
            <input
              id="Logradouro"
              className="campo_preenchimento Tipo_logradouro"
              type="text"
              placeholder=""
            />
          </div>
          <div>
            <label>Nome do Logradouro</label>
            <input
              id="email"
              className="campo_preenchimento Nome_logradouro"
              type="text"
              placeholder=""
            />
          </div>
          <div>
            <label>Microárea</label>
            <input
              id="email"
              className="campo_preenchimento Microarea"
              type="text"
              placeholder=""
            />
          </div>
          <div>
            <label>FA</label>
            <input
              type="checkbox"
              id="email"
              className="campo_preenchimento FA"
              placeholder=""
            />
          </div>
        </div>
        <br />
        <div id="linha3" className="linha">
          <div>
            <label>Número</label>
            <input
              id="email"
              className="campo_preenchimento Numero"
              type="text"
              placeholder=""
            />
          </div>
          <div>
            <label>S/Nº</label>
            <input
              id="email"
              className="campo_preenchimento SNum"
              type="Checkbox"
              placeholder=""
            />
          </div>
          <div>
            <label className="pto_ref">Ponto de Referência</label>
            <input
              id="email"
              className="campo_preenchimento PtoRef"
              type="text"
              placeholder=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Telefonecontato() {
  return (
    <div id="Telefone para contato">
      <h3 className="titulosSecoes">Telefone para contato</h3>
      <br />
      <div id="linha1" className="linha_bloco">
        <div>
          <label>Residencial</label>
          <input
            id="email"
            className="campo_preenchimento Residencial"
            type="text"
            placeholder="(00) 00000-0000"
          />
        </div>
        <div>
          <label className="contato">Contato</label>
          <input
            id="email"
            className="campo_preenchimento"
            type="text"
            placeholder="(00) 00000-0000"
          />
        </div>
      </div>
    </div>
  );
}

function AnimaisDomicilio() {
  return (
    <div id="Animais no domicílio">
      <div>
        <p className="titulosSecoes">
          Animais no domicílio
          <input id="email" type="checkbox" />
        </p>
      </div>
      <div id="linha1" className="linha_bloco Animais">
        <label>Quais?</label>
        <label>Gato</label>
        <input
          id="Gato"
          /*className="campo_preenchimento"*/ type="checkbox"
          placeholder=""
        />
        <label>Cachorro</label>
        <input
          id="Cachorro"
          /*className="campo_preenchimento"*/ type="checkbox"
          placeholder=""
        />
        <label>Pássaro</label>
        <input
          id="Pássaro"
          /*className="campo_preenchimento"*/ type="checkbox"
          placeholder=""
        />
        <label>Outros</label>
        <input
          id="Outros"
          /*className="campo_preenchimento"*/ type="checkbox"
          placeholder=""
        />
        <label>Quantos?</label>
        <input
          id="email"
          className="campo_preenchimento Quantos_animais"
          type="text"
        />
      </div>
    </div>
  );
}

function Familias() {
  return (
    <div id="Familias">
      <h3 className="titulosSecoes">Famílias</h3>
      <br />
      <div id="linha1" className="linha_bloco_familias">
        <div className="box">
          <label>Nº Prontuário familiar</label>
          <input
            id="email"
            className="campo_preenchimento Prontuario_familiar"
            type="text"
            placeholder=""
          />

          <label>Data Nasc.</label>
          <p className="fonte_pequena">(do responsável)</p>
          <input
            id="email"
            className="campo_preenchimento"
            type="text"
            placeholder=""
          />
        </div>
        <div>
          <label>CNS do Responsável</label>
          <input
            id="email"
            className="campo_preenchimento CNS_responsavel"
            type="text"
            placeholder=""
          />

          <label>Membros</label>
          <p className="fonte_pequena">(da Família)</p>
          <input
            id="email"
            className="campo_preenchimento"
            type="text"
            placeholder=""
          />
        </div>
        <div>
          <label>Renda Familiar(sm)</label>
          <input
            id="email"
            className="campo_preenchimento Renda_familiar"
            type="text"
            placeholder=""
          />

          <label>Reside desde</label>
          <input
            id="email"
            className="campo_preenchimento"
            type="text"
            placeholder="mm/aaaa"
          />
        </div>
      </div>
    </div>
  );
}

function CondMoradia() {
  return (
    <div>
      <div id="Condições de Moradia" className="bloco">
        <p className="titulosSecoes">Condições de Moradia</p>
        <div id="linha1" className="linha">
          <div>
            <label>Situação de Moradia/Posse da Terra</label>
            <input
              list="browsers"
              name="browser"
              id="browser"
              className="campo_preenchimento Moradia"
            />
            <datalist id="browsers">
              <option value="Próprio" />
              <option value="Financiado" />
              <option value="Alugado" />
              <option value="Arrendado" />
              <option value="Cedido" />
              <option value="Ocupado" />
              <option value="Situação de rua" />
              <option value="Outra" />
            </datalist>
          </div>
          <div>
            <label>Endereço/Local de Permanência</label>
            <input
              list="browsers"
              name="browser"
              id="browser"
              className="campo_preenchimento Moradia"
            />
            <datalist id="browsers">
              <option value="1" />
              <option value="2" />
              <option value="3" />
              <option value="4" />
              <option value="5" />
            </datalist>
          </div>
        </div>
        <div id="linha2" className="linha">
          <div>
            <label>Localização</label>
            <input
              list="browsers"
              name="browser"
              id="browser"
              className="campo_preenchimento Moradia"
            />
            <datalist id="browsers">
              <option value="1" />
              <option value="2" />
              <option value="3" />
              <option value="4" />
              <option value="5" />
            </datalist>
          </div>
          <div>
            <label>Água para consumo no domicílio</label>
            <input
              list="browsers"
              name="browser"
              id="browser"
              className="campo_preenchimento Moradia"
            />
            <datalist id="browsers" className="campo_preenchimento">
              <option value="1" />
              <option value="2" />
              <option value="3" />
              <option value="4" />
              <option value="5" />
            </datalist>
          </div>
        </div>
        <div id="linha3" className="linha">
          <div>
            <label>Tipo de Domicílio</label>
            <input
              list="browsers"
              name="browser"
              id="browser"
              className="campo_preenchimento Moradia"
            />
            <datalist id="browsers">
              <option value="1" />
              <option value="2" />
              <option value="3" />
              <option value="4" />
              <option value="5" />
            </datalist>
          </div>
          <div>
            <label>Destino do Lixo</label>
            <input
              list="browsers"
              name="browser"
              id="browser"
              className="campo_preenchimento Moradia"
              placeholder="Queimado/Enterrado"
            />
            <datalist id="browsers">
              <option value="Queimado/Enterrado" />
              <option value="2" />
              <option value="3" />
              <option value="4" />
              <option value="5" />
            </datalist>
          </div>
        </div>
        <div id="linha4" className="linha">
          <div className="moradores_comodos">
            <input
              name="browser"
              id="browser"
              className="campo_preenchimento Num_moradores"
              placeholder="Nº"
            />
            <label>Moradores</label>
          </div>
          <div className="moradores_comodos">
            <input
              name="browser"
              id="browser"
              className="campo_preenchimento"
              placeholder="Nº"
            />
            <label>Cômodos</label>
          </div>
          <div>
            <label>Forma de escoamento</label>
            <p className="fonte_pequena">(do banheiro ou sanitário)</p>
            <input
              list="browsers"
              name="browser"
              id="browser"
              className="campo_preenchimento"
            />
            <datalist id="browsers">
              <option value="1" />
              <option value="2" />
              <option value="3" />
              <option value="4" />
              <option value="5" />
            </datalist>
          </div>
        </div>
        <div id="linha5" className="linha">
          <div>
            <label className="acesso_domicilio">
              Tipo de acesso ao domicílio
            </label>
            <input
              list="browsers"
              name="browser"
              id="browser"
              className="campo_preenchimento Acesso_domicilio"
            />
            <datalist id="browsers">
              <option value="1" />
              <option value="2" />
              <option value="3" />
              <option value="4" />
              <option value="5" />
            </datalist>
          </div>
          <div>
            <label>Condição de posse e uso da Terra</label>
            <p className="fonte_pequena">(Somente área de produção Rural)</p>
            <input
              list="browsers"
              name="browser"
              id="browser"
              className="campo_preenchimento Acesso_domicilio"
            />
            <datalist id="browsers">
              <option value="1" />
              <option value="2" />
              <option value="3" />
              <option value="4" />
              <option value="5" />
            </datalist>
          </div>
        </div>
        <div id="linha6" className="linha">
          <div className="moradores_comodos Energia">
            <input
              type="checkbox"
              id="browser"
              className="campo_preenchimento FA"
            />
            <label className="energia_eletrica">
              Disponibilidade de Energia elétrica
            </label>
          </div>
          <div>
            <label>Material predominante</label>
            <p className="fonte_pequena">
              (na construção das paredes externas do domicílio)
            </p>
            <input
              list="browsers"
              name="browser"
              id="browser"
              className="campo_preenchimento Acesso_domicilio"
            />
            <datalist id="browsers">
              <option value="1" />
              <option value="2" />
              <option value="3" />
              <option value="4" />
              <option value="5" />
            </datalist>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tab1;
