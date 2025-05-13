import '../styles/stylePags.css';

    function Pag1(){
        return (
        <div className="background">
           {/*<Cabecalho />*/}
           <div style={{display:'flex'}}>
                <div style={{width:'50%'}}>
                    <EndLocaldepermanencia />
                    <div>
                        <div>
                            <Telefonecontato />
                        </div>
                        <div>
                            <AnimaisDomicilio />
                        </div>
                    </div>
                </div>
                <div style={{width:'50%'}}>
                    <CondMoradia />
                </div>
            </div>
        </div>
        )   
    }

    const UFs = ["SP","RJ","MG"];
    
    function Cabecalho(){
        return (
        <div id="cabecalho" className="cabecalho">
            <div className="form-title">
                <p>Cadastro Domiciliar</p>
            </div>
            <form className="linha">
                <div id="Cadastro_domiciliar">
                    <label>CNS do Profissional</label>
                    <input id="CNS" className="campo_preenchimento" type="text" placeholder="Digite o CNS"/>
                </div>
                <div>
                    <label>CBO</label>
                    <input id="CBO" className="campo_preenchimento" type="text" placeholder="Digite o CBO"/>
                </div>
                <div>
                    <label>CNES</label>
                    <input id="CNES" className="campo_preenchimento" type="text" placeholder="Digite o CNES"/>
                </div>
                <div>
                    <label>INE</label>
                    <input id="INE" className="campo_preenchimento" type="text" placeholder="Digite o INE"/>
                </div>
                <div>
                    <label>Data</label>
                    <input id="data_preenchimento" className="campo_preenchimento" type="date" placeholder="dd/mm/aaaa"/>
                    </div>  
            </form>
        </div>
        )   
    }


    function EndLocaldepermanencia(){
        function Options(props) {
            return <option>{ props.brand }</option>;
          }
        function SetUF() {
            return (
              <>
                  {UFs.map  ((item) => <Options brand={item} />)}
              </>
            );
          }
        
        
        return (
            <div id="End_Localdepermanencia">
            <p className='titulosSecoes'>Endereço/Local de Permanência</p><br />
            <div className="bloco">
                <div id="linha1" className="linha">
                    <div>
                        <label>CEP</label>
                        <input id="CEP" className="campo_preenchimento" type="number" placeholder="00000-000" />
                    </div>
                    <div>
                        <label>Município</label>
                        <input id="Municipio" className="campo_preenchimento" type="text" placeholder="Guarulhos" />
                    </div>
                    <div>
                        <label>UF</label>
                        <input list="UFs" name="browser" id="browser" className="campo_preenchimento" placeholder="SP" />
                        <datalist id="UFs">
                            <SetUF/>
                        </datalist>
                    </div>
                    <div>
                        <label>Tipo imóvel</label>
                        <input id="tipo_imovel" className="campo_preenchimento" type="text" placeholder="00" />
                    </div>
                </div><br />
                <div id="linha2" className="linha">
                    <div>
                        <label>Bairro</label>
                        <input id="Bairro" className="campo_preenchimento" type="text" placeholder="" />
                    </div>
                    <div>
                        <label>Tipo de Logradouro</label>
                        <input id="Logradouro" className="campo_preenchimento" type="text" placeholder="" />
                    </div>
                    <div>
                        <label>Nome do Logradouro</label>
                        <input id="email" className="campo_preenchimento" type="text" placeholder="" />
                    </div>
                    <div>
                        <label>Microarea</label>
                        <input id="email" className="campo_preenchimento" type="text" placeholder="" />
                    </div>
                    <div>
                        <label>FA</label>
                        <input id="email" className="campo_preenchimento" type="text" placeholder="" />
                    </div>
                </div><br />
                <div id="linha3" className="linha">
                    <div >
                        <label>Número</label>
                        <input id="email" className="campo_preenchimento" type="text" placeholder="" />
                    </div>
                    <div>
                        <input id="email" className="campo_preenchimento" type="Checkbox" placeholder=""/>
                        <label>Sem número</label>
                    </div>
                    <div>
                        <label>Ponto de Referência</label>
                        <input id="email" className="campo_preenchimento" type="text" placeholder="" />
                    </div>
            
                </div>
            </div>
        </div>
        )   
    }

    function Telefonecontato(){
        return(
            <div id="Telefone para contato">
                <h3 className='titulosSecoes'>Telefone para contato</h3   ><br /> 
                <div id="linha1" className="linha_bloco">
                    <div>
                        <label>Residencial</label>
                        <input id="email" className="campo_preenchimento" type="text" placeholder="(00) 00000-0000" />
                    </div><br />
                    <div>
                        <label>Município</label>
                        <input id="email" className="campo_preenchimento" type="text" placeholder="(00) 00000-0000" />
                    </div>
                </div>
            </div>
        )
    }

    function AnimaisDomicilio(){
        return (
            <div id="Animais no domicílio" >
            <div style={{display:'flex'}}>
                <p className='titulosSecoes'>Animais no domicílio</p>
                <input id="email" className="campo_preenchimento" type="checkbox" />
            </div>
                <div id="linha1" className="linha_bloco" style={{display:'flex'}}>
                    <div>
                    <label>Quais?</label>
                        <label>Gato</label>
                        <input id="Gato" className="campo_preenchimento" type="checkbox" placeholder="" />
                        <label>Cachorro</label>
                        <input id="Cachorro" className="campo_preenchimento" type="checkbox" placeholder="" />
                        <label>Pássaro</label>
                        <input id="Pássaro" className="campo_preenchimento" type="checkbox" placeholder="" />
                        <label>Outros</label>
                        <input id="Outros" className="campo_preenchimento" type="checkbox" placeholder="" />
                    </div>
                    <div style={{display:'flex'}}>
                    <label>Quantos?</label>
                    <input id="email" className="campo_preenchimento" type="text"  />
                    </div>
                </div>
            </div>
        )
    }
    function CondMoradia(){
        return(
            <div>
            <div id="Condições de Moradia" className="bloco">
            <p className='titulosSecoes'>Condições de Moradia</p>
            <div id="linha1" className="linha">
                <div >
                    <label>Situação de Moradia/posse da Terra</label>
                    <input list="browsers" name="browser" id="browser" className="campo_preenchimento" />
                    <datalist id="browsers">
                        <option value="1" />
                        <option value="2" />
                        <option value="3" />
                        <option value="4" />
                        <option value="5" />
                    </datalist>
                </div>
            <div>
                <label>Endereço/Local de Permanência</label>
                <input list="browsers" name="browser" id="browser" className="campo_preenchimento"  />
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
                <div >
                    <label>Localização</label>
                    <input list="browsers" name="browser" id="browser" className="campo_preenchimento" />
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
                <input list="browsers" name="browser" id="browser" className="campo_preenchimento" />
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
                    <input list="browsers" name="browser" id="browser" />
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
                <input list="browsers" name="browser" id="browser" className="campo_preenchimento" placeholder="Queimado/Enterrado" />
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
            <div>
                <input name="browser" id="browser" className="campo_preenchimento"  placeholder="Nº"  />
                <label>Moradores</label>
            </div>
            <div>
                <input name="browser" id="browser" className="campo_preenchimento" placeholder="Nº" />
                <label>Cômodos</label>
            </div>
            </div>
            <div id="linha5" className="linha">
                <div>
                    <label>Tipo de acesso ao domicílio</label>
                    <input list="browsers" name="browser" id="browser" />
                    <datalist id="browsers">
                        <option value="1" />
                        <option value="2" />
                        <option value="3" />
                        <option value="4" />
                        <option value="5" />
                    </datalist>
                </div>
                <div>
                    <label>Forma de escoamento do banheiro ou sanitário</label>
                    <input list="browsers" name="browser" id="browser" />
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
                <div>
                    <label>Disponibilidade de Energia elétrica</label>
                    <input type="checkbox" id="browser" />
                </div>
                <div>
                    <label>Condição de posse e uso da Terra</label>
                    <p>(Somente área de produção Rural)</p>
                    <input list="browsers" name="browser" id="browser" />
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
        )
    }
    export default Pag1