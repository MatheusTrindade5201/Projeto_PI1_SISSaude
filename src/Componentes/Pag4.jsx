import Cabecalho from './Pag1.js';

function Pag4(){
    return(
        <div  className="background" style={{display:'flex'}}>
            <div>
                <CondSitu/>
                <OutrasCondSaude/>
            </div>
            <CidadaoRua/>
        </div>
    )
}

function CondSitu(){
    return (
        <div>
            <h3>Condições/Situações de saúde gerais</h3>
            <div className="bloco">
                <div id="linha1" style={{display:'flex'}}>
                    <div>
                        <input id="FA" className="campo_preenchimento" type="checkbox"/>
                            <label>Esta Fumante</label>
                    </div>
                    <div>
                        <input id="FA" className="campo_preenchimento" type="checkbox"/>
                            <label>Tem Diabetes</label>
                    </div>
                    <div>
                        <input id="FA" className="campo_preenchimento" type="checkbox"/>
                            <label>Esta com hanseníase</label>
                    </div>
                </div>
                <div id="linha2" style={{display:'flex'}}>
                    <div>
                        <input id="FA" className="campo_preenchimento" type="checkbox"/>
                            <label>Faz uso de álcool</label>
                    </div>
                    <div>
                        <input id="FA" className="campo_preenchimento" type="checkbox"/>
                            <label>Teve AVC/Derrame</label>
                    </div>
                    <div>
                        <input id="FA" className="campo_preenchimento" type="checkbox"/>
                            <label>Esta com tuberculose</label>
                    </div>
                </div>
                <div id="linha3"style={{display:'flex'}}>
                    <div>
                        <input id="FA" className="campo_preenchimento" type="checkbox"/>
                            <label>Faz uso de outras drogas</label>
                    </div>
                    <div>
                        <input id="FA" className="campo_preenchimento" type="checkbox"/>
                            <label>Teve Infarto</label>
                    </div>
                    <div>
                        <input id="FA" className="campo_preenchimento" type="checkbox"/>
                            <label>Tem ou teve câncer</label>
                    </div>
                </div>
                <div id="linha4"style={{display:'flex'}}>
                    <div>
                        <input id="FA" className="campo_preenchimento" type="checkbox"/>
                            <label>Tem hipertensão arterial</label>
                    </div>
                    <div>
                        <input id="FA" className="campo_preenchimento" type="checkbox"/>
                            <label>Esta acamado</label>
                    </div>
                    <div>
                        <input id="FA" className="campo_preenchimento" type="checkbox"/>
                            <label>Esta domicilado</label>
                    </div>
                </div>
                <div id="linha5" style={{display:'flex'}}>
                    <div>
                        <label>Teve alguma internação nos últimos 12 meses??</label><br />
                            <input id="CheckDef" className="campo_preenchimento" type="checkbox" />
                            <input id="CheckDef" className="campo_preenchimento" type="text" placeholder="Se sim, por qual causa."/>
                    </div>
                    <div>
                        <label>Usa plantas medicinais?</label><br />
                            <input id="CheckDef" className="campo_preenchimento" type="checkbox" />
                            <input id="PlantasMedicinais" list="browsers" className="campo_preenchimento" placeholder="Se sim, indique qual(is)"/>
                                    <datalist id="browsers">
                                        <option value="Insuficiência Cardíaca" />
                                        <option value="Infarto" />
                                        <option value="" />
                                    </datalist>
                    </div>  
                </div>
                <div id="linha6" style={{display:'flex'}}>
                    <div>
                        <label>Gestante</label><br />
                            <input id="CheckDef" className="campo_preenchimento" type="checkbox" />
                            <input id="Gestante" className="campo_preenchimento" type="text" placeholder="Maternidade de Referência."/>
                    </div>
                    <div>
                        <label>Doença Respiratório do pulnão?</label><br />
                            <input id="CheckDef" className="campo_preenchimento" type="checkbox" />
                            <input id="DoencaRespiratoria" list="browsers" className="campo_preenchimento" placeholder="Asma"/>
                                    <datalist id="browsers">
                                        <option value="Asma" />
                                        <option value="Bronquite" />
                                        <option value="" />
                                    </datalist>
                    </div>
                </div>
                <div id="linha7" style={{display:'flex'}}>
                    <div>
                    <label>Tem ou teve problemas de rins?</label><br />
                            <input id="CheckDef" className="campo_preenchimento" type="checkbox" />
                            <input id="DoencaRenal" list="browsers" className="campo_preenchimento" placeholder="Insuficiência Renal"/>
                                    <datalist id="browsers">
                                        <option value="Insuficiência Renal" />
                                        <option value="Infarto" />
                                        <option value="" />
                                    </datalist>
                    </div>
                    <div>
                        <label>Tem ou teve doenã cardíaca /do coração?</label><br />
                            <input id="CheckDef" className="campo_preenchimento" type="checkbox" />
                            <input id="DoencaCardiaca" list="browsers" className="campo_preenchimento" placeholder="Insuficiência Cardíaca"/>
                                    <datalist id="browsers">
                                        <option value="Insuficiência Cardíaca" />
                                        <option value="Infarto" />
                                        <option value="" />
                                    </datalist>
                    </div>
                </div>
            </div>
        </div>
    )
}

function OutrasCondSaude(){
    return (
        <div>
            <h3>Outras Condições de Saúde</h3>
            <div className="bloco" style={{display:'flex'}}>
                <div id="linha1" >
                    <label>1 - Qual?</label><br />
                    <input id="Condicao1" className="campo_preenchimento" type="text" placeholder="Condição 1"/>
                </div>
                <div>
                    <label>2 - Qual?</label><br />
                        <input id="Condicao2 "className="campo_preenchimento" type="text" placeholder="Condição 2"/>
                </div>  
                <div>
                    <label>3 - Qual?</label><br />
                        <input id="Condicao3" className="campo_preenchimento" type="text" placeholder="Condição 3"/>
                </div>                  
            </div>
        </div>
    )
}

function CidadaoRua(){
    return (
        <div>
            <h3>Cidadão em Situação de Rua</h3>
            <div className="bloco">
                <div id="linha1" style={{display:'flex'}}>
                    <div>
                        <label>Esta em situação de rua?(Tempo?)</label><br />
                            <input id="CheckDef" className="campo_preenchimento" type="checkbox" />
                            <input id="TempoDeRua" list="browsers" className="campo_preenchimento" placeholder="Insuficiência Cardíaca"/>
                            <datalist id="browsers">
                                        <option value="<6 meses" />
                                        <option value=">6 meses e <1 ano" />
                                        <option value=" > 1 ano e < 2 anos" />
                                    </datalist>
                    </div>
                    <div>
                        <label>É acompanhdo por outra instituição?</label><br />
                            <input id="CheckDef" className="campo_preenchimento" type="checkbox" />
                            <input id="DoencaCardiaca" list="browsers" className="campo_preenchimento" placeholder="<6 meses>"/>

                    </div>
                </div>
                <div id="linha2" style={{display:'flex'}}>
                    <div>
                            <label>Esta em situação de rua?(Tempo?)</label><br />
                            <input id="CheckDef" className="campo_preenchimento" type="checkbox" />
                            <input id="TempoDeRua" list="browsers" className="campo_preenchimento" placeholder="Insuficiência Cardíaca"/>
                            <datalist id="browsers">
                                        <option value="<6 meses" />
                                        <option value=">6 meses e <1 ano" />
                                        <option value=" > 1 ano e < 2 anos" />
                                    </datalist>
                    </div>
                </div>
                <div id="linha3" style={{display:'flex'}}>
                    <div>
                        <input id="FA" className="campo_preenchimento" type="checkbox"/>
                            <label>Receb Algum Benefício</label>
                    </div>
                    <div>
                        <input id="FA" className="campo_preenchimento" type="checkbox"/>
                            <label>Possui Referência Familiar</label>
                    </div>
                </div>
                <div>
                    <div id="linha4" style={{display:'flex'}}>
                        <div>
                            <input id="FA" className="campo_preenchimento" type="checkbox"/>
                                <label>Restaurante Popular</label>
                        </div>
                        <div>
                            <input id="FA" className="campo_preenchimento" type="checkbox"/>
                                <label>Doação Grupo Religioso</label>
                        </div>
                        <div>
                            <input id="FA" className="campo_preenchimento" type="checkbox"/>
                                <label>Doação Restaurante</label>
                        </div>
                        <div>
                            <input id="FA" className="checkbox" type="checkbox"/>
                                <label>Doação de Popular</label>
                        </div>
                        <div>
                            <input id="FA" className="campo_preenchimento" type="checkbox"/>
                                <label> Outras</label>
                        </div>
                    </div>
                    <div id="linha5" style={{display:'flex'}}>
                        <div>
                        <label>Visita algum familiar com frequência?</label><br />
                            <input id="CheckDef" className="campo_preenchimento" type="checkbox" />
                            <input id="Familiar" className="campo_preenchimento" type="text" placeholder="Indique o grau de parentesco"/>
                        </div>
                        <div>
                        <p>Tem acesso à higiene pessoal?</p>
                         <input id="FA" className="campo_preenchimento" type="checkbox"/>   
                                <label>Banho</label>
                        </div>
                        <div>
                            <input id="FA" className="campo_preenchimento" type="checkbox"/>
                                <label>Acesso ao Sanitário</label>
                        </div>
                        <div>
                            <input id="FA" className="campo_preenchimento" type="checkbox"/>
                                <label>Higiene Bucal</label>
                        </div>
                        <div>
                                <input id="FA" className="campo_preenchimento" type="checkbox"/>
                                <label>Outras</label>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Pag4
