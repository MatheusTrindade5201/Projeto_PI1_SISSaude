import '../styles/stylePags.css';
//import Cabecalho from './Pag1.jsx';

function Pag2(){
    return (
    <div className="background">
        <div id="termo de recusa">
            <h3 className='titulosSecoes'>Termo de recusa do cadastro domiciliar de atenção básica</h3>
            <div  style={{display:'flex'}} className="bloco" >
            <div style={{display:'flex'}}>
                <p>Eu, </p>
                <input id="NomeCidadao" className="campo_preenchimento" type="text" placeholder="Nome do Cidadão"/>
                <p>portador(a) do RG nº </p>    
                <input id="NomeCidadao" className="campo_preenchimento" type="text" placeholder="Número do RG"/>
                <p>, gozando de plena consciência dos meus atos, recuso este cadastro, mesmo que isso facilite o acompanhamento da minha saúde e de meus familiares. Estou ciente de que esta recusa não implicará no não atendimento da unidade de Saúde.</p>
            </div>
            <div>
                <h3>Assinatura</h3>
                <canvas id="board"></canvas>
            </div>
            </div>
        </div>
        <div>
            <h3 className='titulosSecoes'>Instituição de Permanência</h3>
        <div style={{display:'flex'}} className="bloco" >
                
                <div>
                    <label>Nome da Instituição de Permanência</label><br />
                    <input id="InstPerma" className="campo_preenchimento" type="text" placeholder="Digite o nome da IP"/>
                </div>
                
                <div>
                    <label>CNS do Responsável</label><br />
                    <input id="CNSResponsavel" className="campo_preenchimento" type="text" placeholder="Digite o CNS do Responsável"/>
                </div>
                
                <div>
                    <label>CNES</label><br />
                    <input id="CNES" className="campo_preenchimento" type="text" placeholder="Digite o Cargo"/>
                </div>
                
                <div>
                    <label>CNES</label><br />
                    <input id="CNES" className="campo_preenchimento" type="text" placeholder="(00) 00000-0000"/>
                </div>
        </div>
        </div>
        <div>
            <h3 className='titulosSecoes'>Termo de recusa do cadastro domiciliar de atenção básica</h3>
            <div  style={{display:'flex'}} className="bloco" >
                <div>
                <p>Eu, </p>
                <input id="NomeCidadao" className="campo_preenchimento" type="text" placeholder="Nome do Cidadão"/>
                <p>portador(a) do RG nº </p>    
                <input id="NomeCidadao" className="campo_preenchimento" type="text" placeholder="Número do RG"/>
                <p>, responsável técnico pela Instituição, recuso este cadastro mesmo que esta recusa dificulte o acompanhamento da saúde das pessoas abrigadas/residentes nesta Instituição. Estou ciente de que esta recusa não implicará no não atendimento da unidade de Saúde.</p>
            </div>
            <div>
                <h3>Assinatura</h3>
                <canvas id="board"></canvas>
                </div>
            </div>
        </div>
    </div>
    )
    
}

export default Pag2;