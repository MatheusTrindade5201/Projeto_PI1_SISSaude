
    function Pag1(){
        return (
        <div>
           <Cabecalho />
           <div style={{display: 'inline-block'}}>
                <div>
                    <EndLocaldepermanencia />
                    <div>
                        <Telefonecontato />
                        <AnimaisDomicilio />
                    </div>
                </div>
                <CondMoradia />   
            </div>
        </div>
        )   
    }

    function Cabecalho(){
        return (
        <div id="cabecalho">
            <div className="form-title">
                <p>Cadastro Domiciliar</p>
            </div>
            <form id="contact_form" >
                <div id="Cadastro_domiciliar">
                    <label>CNS do PRofissional</label><br />
                    <input id="CNS" className="campo_preenchimento" type="text" placeholder="Digite o CNS"/>
                </div>
                <div>
                    <label>CBO</label><br />
                    <input id="CBO" className="campo_preenchimento" type="text" placeholder="Digite o CBO"/>
                </div>
                <div>
                    <label>CNES</label><br />
                    <input id="CNES" className="campo_preenchimento" type="text" placeholder="Digite o CNES"/>
                </div>
                <div>
                    <label>INE</label><br />
                    <input id="INE" className="campo_preenchimento" type="text" placeholder="Digite o INE"/>
                </div>
                <div>
                    <label>Data</label><br />
                    <input id="data_preenchimento" className="campo_preenchimento" type="date" placeholder="dd/mm/aaaa"/>
                    </div>  
            </form>
        </div>
        )   
    }

    function EndLocaldepermanencia(){
        return (
            <div id="End_Localdepermanencia">
            <p>Endereço/Local de Permanência</p><br />
                <div id="linha1" className="line">
                    <div>
                        <label>CEP</label><br />
                        <input id="CEP" className="campo_preenchimento" type="number" placeholder="00000-000" />
                    </div>
                    <div>
                        <label>Município</label><br />
                        <input id="Municipio" className="campo_preenchimento" type="text" placeholder="Guarulhos" />
                    </div>
                    <div>
                        <label>UF</label><br />
                        <input list="UFs" name="browser" id="browser" className="campo_preenchimento" placeholder="SP" />
                        <datalist id="UFs" />
                            <option value="SP" />
                            <option value="RJ" />
                            <option value="MG" />
                            <option value="PR" />
                            <option value="SC" />
                    </div>
                    <div>
                        <label>Tipo imóvel</label><br />
                        <input id="tipo_imovel" className="campo_preenchimento" type="text" placeholder="00" />
                    </div>
                </div><br />
                <div id="linha2" className="line">
                    <div>
                        <label>Bairro</label><br />
                        <input id="Bairro" className="campo_preenchimento" type="text" placeholder="" />
                    </div>
                    <div>
                        <label>Tipo de Logradouro</label><br />
                        <input id="Logradouro" className="campo_preenchimento" type="text" placeholder="" />
                    </div>
                    <div>
                        <label>Nome do Logradouro</label><br />
                        <input id="email" className="campo_preenchimento" type="text" placeholder="" />
                    </div>
                    <div>
                        <label>Microarea</label><br />
                        <input id="email" className="campo_preenchimento" type="text" placeholder="" />
                    </div>
                    <div>
                        <label>FA</label><br />
                        <input id="email" className="campo_preenchimento" type="text" placeholder="" />
                    </div>
                </div><br />
                <div id="linha3" className="line">
                    <div >
                        <label>Número</label><br />
                        <input id="email" className="campo_preenchimento" type="text" placeholder="" />
                    </div>
                    <div>
                        <input id="email" className="campo_preenchimento" type="Checkbox" placeholder=""/>
                        <label>Sem número</label><br />
                    </div>
                    <div>
                        <label>Ponto de Referência</label><br />
                        <input id="email" className="campo_preenchimento" type="text" placeholder="" />
                    </div>
            
                </div>
            
        </div>
        )   
    }

    function Telefonecontato(){
        return(
            <div id="Telefone para contato">
                <p>Telefone para contato</p><br /> 
                <div id="linha1" className="line">
                    <div>
                        <label>Residencial</label><br />
                        <input id="email" className="campo_preenchimento" type="text" placeholder="(00) 00000-0000" />
                    </div><br />
                    <div>
                        <label>Município</label><br />
                        <input id="email" className="campo_preenchimento" type="text" placeholder="(00) 00000-0000" />
                    </div>
                </div>
            </div>
        )
    }

    function AnimaisDomicilio(){
        return (
            <div id="Animais no domicílio">
            <p>Animais no domicílio</p>
            <input id="email" className="campo_preenchimento" type="checkbox" />
                <div id="linha1">
                    <div>
                    <label>Quais?</label>
                        <input id="Gato" className="campo_preenchimento" type="checkbox" placeholder="" />
                        <input id="Cachorro" className="campo_preenchimento" type="checkbox" placeholder="" />
                        <input id="Pássaro" className="campo_preenchimento" type="checkbox" placeholder="" />
                        <input id="Outros" className="campo_preenchimento" type="checkbox" placeholder="" />
                    </div>
                </div>  
                <div id="linha2">
                    <div>
                    <label>Quantos?</label><br />
                    <input id="email" className="campo_preenchimento" type="text"  />
                    </div>
                </div>
            </div>
        )
    }
    function CondMoradia(){
        return(
            <div>
            <div id="Condições de Moradia">
            <p>Condições de Moradia</p><br />
            <div id="linha1">
                <div >
                    <label>Situação de Moradia/posse da Terra</label><br />
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
                <label>Endereço/Local de Permanência</label><br />
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
            <div id="linha2">
                <div >
                    <label>Localização</label><br />
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
                <label>Água para consumo no domicílio</label><br />
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
            <div id="linha3">
                <div>
                    <label>Tipo de Domicílio</label><br />
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
                <label>Destino do Lixo</label><br />
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
            <div id="linha4">
            <div>
                <input name="browser" id="browser" className="campo_preenchimento"  placeholder="Nº"  />
                <label>Moradores</label><br />
            </div>
            <div>
                <input name="browser" id="browser" className="campo_preenchimento" placeholder="Nº" />
                <label>Cômodos</label><br />
            </div>
            </div>
            <div id="linha5">
                <div>
                    <label>Tipo de acesso ao domicílio</label><br />
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
                    <label>Forma de escoamento do banheiro ou sanitário</label><br />
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
            <div id="linha6">
                <div>
                    <label>Disponibilidade de Energia elétrica</label><br />
                    <input type="checkbox" id="browser" />
                </div>
                <div>
                    <label>Condição de posse e uso da Terra</label><br />
                    <p>(Somente área de produção Rural)</p><br />
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