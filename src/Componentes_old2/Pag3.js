import Cabecalho from './Pag1.js';

function Pag3(){
    return (
    <div style={{display:'flex'}}  className="background">
        <div style={{width:'50%'}}>
        <IdentificacaoUsuario />
        <SaidaCadastro />
        </div>
        <InfoSocioDemo />
    </div>
    
    )   
    
}

function IdentificacaoUsuario(){
    return (
    <div>
        <h3>Identificação de Usuário/Cidadão</h3>
        <div className="bloco">
            <div id="Linha1" style={{display:'flex'}}>
                <div>
                    <label>CNS do Cidadão</label><br />
                    <input id="CNESCidadao" className="campo_preenchimento" type="text" placeholder="Digite o CNES"/>
                </div>
                <div>
                    
                    <input id="ResponsavelFamiliar" className="campo_preenchimento" type="checkbox" placeholder="Digite o CNES"/><br />
                    <label>Responsável Familiar</label>
                </div>
                <div>
                    <label>CNS do Responsável Familiar</label><br />
                    <input id="CNES" className="campo_preenchimento" type="text" placeholder="Digite o nome do responsável familiar"/>
                </div>
                <div>
                    <label>Microarea</label><br />
                    <input id="MicroArea" className="campo_preenchimento" type="text" placeholder="Digite o CNES"/>
                </div>
                <div>
                    <input id="FA" className="campo_preenchimento" type="checkbox"/>
                    <label>FA</label>
                </div>
            </div>
            <div id="Linha2" style={{display:'flex'}}>
                <div>
                    <label>Nome Completo</label><br />
                    <input id="NomeCompleto" className="campo_preenchimento" type="text" placeholder="Nome do Cidadão"/>
                </div>
                <div>
                    <label>Nome Social</label><br />
                    <input id="Nome Social" className="campo_preenchimento" type="text" placeholder="Nome Social"/>
                </div>
                <div>
                    <label>Data de Nascimento</label><br />
                    <input id="CNES" className="campo_preenchimento" type="date"/>
                </div>
                <div>
                    <label>Sexo</label><br />
                    <input id="CNES" list= "browsers" className="campo_preenchimento" placeholder="M"/>
                        <datalist id="browsers">
                            <option value="M" />
                            <option value="F" />
                            <option value="-" />
                        </datalist>
                </div>
            </div>
            <div id="Linha3" style={{display:'flex'}}>
                <div>
                    <label>Raça/Cor</label><br />
                    <input id="RacaCor" list= "browsers" className="campo_preenchimento" placeholder="M"/>
                        <datalist id="browsers">
                            <option value="Indígena" />
                            <option value="Negro" />
                            <option value="Branco" />
                        </datalist>
                </div>
                <div>
                    <label>Etnia</label><br />
                    <input id="Etnia" className="campo_preenchimento" type="text" placeholder="Etnia"/>
                </div>
                <div>
                    <label>Nº PIS (PIS/PASEP)</label><br />
                    <input id="PIS_PASEP" className="campo_preenchimento" type="text" placeholder="XXXXXXXXXX"/>
                </div>
                <div>
                    <label>Nacionalidade</label><br />
                    <input id="Nacionalidade" list= "browsers" className="campo_preenchimento" placeholder="M"/>
                        <datalist id="browsers">
                            <option value="Brasileiro" />
                            <option value="Estrangeiro" />
                        </datalist>
                </div>
                <div>
                    <label>País</label><br />
                    <input id="Pais" list= "browsers" className="campo_preenchimento" placeholder="M"/>
                        <datalist id="browsers">
                            <option value="Brasil" />
                            <option value="Outros" />
                            <option value="etc" />
                        </datalist>
                </div>
                <div>
                    <label>Data da Naturalização</label><br />
                    <input id="DataNaturalizacao" className="campo_preenchimento" type="date"/>
                </div>
            </div>
            <div id="Linha4" style={{display:'flex'}}>
                <div>
                    <label>Portaria Naturalização</label><br />
                    <input id="CNES" className="campo_preenchimento" type="text" placeholder="Digite o CNES"/>
                </div>
                <div>
                    <label>UF e Município do Nascimento</label><br />
                    <input id="UF" list= "browsers" className="campo_preenchimento" placeholder="SP"/>
                    <datalist id="browsers">
                            <option value="Brasil" />
                            <option value="Outros" />
                            <option value="etc" />
                        </datalist>
                    <input id="Municipio" list= "browsers" className="campo_preenchimento" placeholder="Guarulhos"/>
                    <datalist id="browsers">
                            <option value="Guarulhos" />
                            <option value="São Paulo" />
                            <option value="Cotia" />
                        </datalist>
                </div>
                <div>
                    <label>Data Ent. no Brasil</label><br />
                    <input id="EntBrasil" className="campo_preenchimento" type="text" placeholder="Digite o CNES"/>
                </div>
                <div>   
                    <label>Celular</label><br />
                    <input id="Celular" className="campo_preenchimento" type="date" placeholder="XX XXXXX XXXX"/>
                </div>
            </div>
            <div id="Linha5" style={{display:'flex'}}>
                <div>
                    <label>E-mail</label><br />
                    <input id="Email" className="campo_preenchimento" type="text" placeholder="nome@provedor.com"/>
                </div>
                <div>
                    <label>Nome completo da mãe</label><br />
                    <input id="NomeMae" className="campo_preenchimento" type="text" placeholder="Digite o nome completo da mãe"/>
                </div>
                <div>
                    <label>Nome completo da mãe</label><br />
                    <input id="NomePai" className="campo_preenchimento" type="text" placeholder="Digite o nome completo do pai"/>
                </div>
            </div>
        </div>
    </div>
    )
}

function SaidaCadastro(){
    return  (
        <div id="SaidaCadastro">
            <h3> Saída do Cidadão do Cadastro </h3>
            <div  className="bloco" style={{display:'flex'}}>
            <div>
                <label>Motivo</label><br />
                <input id="CNESCidadao" list="browsers" className="campo_preenchimento" placeholder="Mudança de Território"/>
                    <datalist id="browsers">
                            <option value="M" />
                            <option value="F" />
                            <option value="-" />
                    </datalist>
            </div>
            <div>
                <label>Data do Óbito</label><br />
                <input id="Obito" className="campo_preenchimento" type="date"/>
            </div>
            <div>
                <label>Número da D.D.</label><br />
                <input id="NumeroDD" className="campo_preenchimento" type="text" placeholder="XXXXXXXXXXXX"/>
            </div>
            </div>
        </div>
    )
}

function InfoSocioDemo (){
    return (
        <div style={{width:'50%'}}>
            <h3>Informações Socio Demográficas</h3>
            <div  className="bloco">
                <div id="Linha1" style={{display:'flex'}}>
                    <div>
                        <label>Relação de Parentesco</label>
                        <p>(com o responsável familiar)</p>
                        <input id="RelacaoParentesco" className="campo_preenchimento" type="text" placeholder="Digite o CNES"/>
                    </div>
                    <div>
                        <label>Ocupação</label><br />
                        <input id="Ocupacao" className="campo_preenchimento" type="text" placeholder="Digite a ocupação do Cidadão"/>
                    </div>
                </div>
                <div id="Linha2" style={{display:'flex'}}> 
                    <div>
                        <div>
                            <label>Curso mais elevado que frequenta(ou)</label><br />
                                <input id="Curso" list= "browsers" className="campo_preenchimento" placeholder="Creche"/>
                                    <datalist id="browsers">
                                        <option value="Creche" />
                                        <option value="Fund I" />
                                        <option value="Fund II" />
                                        <option value="Ensino Médio" />
                                        <option value="Ensino Superior" />
                                        <option value="Pós Graduação" />
                                        
                                    </datalist>
                        </div>
                        <div>
                            <label>Curso mais elevado que frequenta(ou)</label><br />
                                <input id="Curso" list= "browsers" className="campo_preenchimento" placeholder="Empregador"/>
                                    <datalist id="browsers">
                                        <option value="Empregador" />
                                        <option value="Funcionário" />
                                        <option value="PJ" />
                                    </datalist>
                        </div>
                    
                        <div>
                            <input id="EscolaOuCreche" className="campo_preenchimento" type="checkbox"/><br />
                                <label>Frequente escola ou creche</label>
                            <input id="GrupoComunitario" className="campo_preenchimento" type="checkbox"/><br />
                                <label>Participa de algum grupo comunitário</label>
                            <input id="PlanoSaude" className="campo_preenchimento" type="checkbox"/><br />
                                <label>Possui Plano de Saúde</label>
                        </div>
                    </div>
                </div>
                <div id="Linha3" style={{display:'flex'}}>
                    <p>Criança de 9 anos, com quem fica?</p>
                    <div>
                    <input id="Adulto Responsável" className="campo_preenchimento" type="checkbox"/>
                        <label>Adulto Responsável</label>
                    <input id="OutrasCrianças" className="campo_preenchimento" type="checkbox"/>
                        <label>OutrasCrianças</label>
                    <input id="Adolescente" className="campo_preenchimento" type="checkbox"/>
                        <label>Adolescente</label>
                    <input id="Sozinha" className="campo_preenchimento" type="checkbox"/>
                        <label>Sozinha</label>
                    <input id="Creche" className="campo_preenchimento" type="checkbox"/>
                        <label>Creche</label>
                    <input id="Outro" className="campo_preenchimento" type="checkbox"/>
                        <label>Outro</label>
                    </div>
                </div>
                <div id="Linha4" style={{display:'flex'}}>
                    <div>
                        <input id="EnergiaEletrica" className="campo_preenchimento" type="checkbox"/>
                            <label>Disponibilidade de energia elétrica</label>
                    </div>
                </div>
                <div id="Linha5" style={{display:'flex'}}>   
                    <div>
                        <div>
                            <label>Deseja informar a Orientação Sexual</label><br />
                                <input id="CheckSex" className="campo_preenchimento" type="checkbox" />
                                <input id="Sexualidade" list="browsers" className="campo_preenchimento" placeholder="Heterossexual"/>
                                    <datalist id="browsers">
                                        <option value="Indígena" />
                                        <option value="Negro" />
                                        <option value="Branco" />
                                    </datalist>
                        </div>
                        <div>
                            <label>Tem alguma deficiência?</label><br />
                                <input id="CheckDef" className="campo_preenchimento" type="checkbox" />
                                <input id="Deficiência" list="browsers" className="campo_preenchimento" placeholder="Heterossexual"/>
                                    <datalist id="browsers">
                                        <option value="Indígena" />
                                        <option value="Negro" />
                                        <option value="Branco" />
                                    </datalist>
                        </div>
                    </div>
                </div>
                <div id="Linha6" style={{display:'flex'}}>
                    <div>
                    <label>Deseja Informar Identidade de Gênero?</label><br />
                            <input id="CheckDef" className="campo_preenchimento" type="checkbox" />
                            <input id="Deficiência" list="browsers" className="campo_preenchimento" placeholder="Mulher Cis"/>
                                <datalist id="browsers">
                                    <option value="Homem Trans" />
                                    <option value="Homem Cis" />
                                    <option value="Mulher Cis" />
                                </datalist>
                    </div>
                </div>
            </div>
        </div>
    )
}

    export default Pag3