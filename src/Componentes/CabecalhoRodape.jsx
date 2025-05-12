import '../styles/styleCabecalhoRodape.css';


function Cabecalho(){
    return (

        
        <div id="cabecalho" className="cabecalho">
            <div id='sissaude' className="sissaudeLogotipo" align="left">
                <img src="./src/assets/logotipo_sissaude_v01.png" alt="Logotipo Sissaude" width="180"/>
                <p id="paragraphCabecalho">Cadastro de dados de Sistema de Saúde</p>
        </div>
        <div className="form-title" align='left'>
            <p className='cadastroDomiciliar'>Cadastro Domiciliar</p>
        </div>
        <form className="linha">
            <div id="Cadastro_domiciliar">
                <label>CNS do Profissional</label>
                <input id="CNS" className="campo_preenchimento" type="text" placeholder="Digite o CNS"/>
            </div>
            <div id="Cadastro_domiciliar">
                <label>CBO</label>
                <input id="CBO" className="campo_preenchimento" type="text" placeholder="Digite o CBO"/>
            </div>
            <div id="Cadastro_domiciliar">
                <label>CNES</label>
                <input id="CNES" className="campo_preenchimento" type="text" placeholder="Digite o CNES"/>
            </div>
            <div id="Cadastro_domiciliar">
                <label>INE</label>
                <input id="INE" className="campo_preenchimento" type="text" placeholder="Digite o INE"/>
            </div>
            <div id="Cadastro_domiciliar">
                <label>Data</label>
                <input id="data_preenchimento" className="campo_preenchimento" type="date" placeholder="dd/mm/aaaa"/>
                </div>  
        </form>
    </div>
    
    )   
    
}

function Rodape({setNumber}){
    <div style={{display: "inline-block"}}>
        <button type="submit" className="botoesmenu" onClick= {()=>setNumber(1)} color="#f194ff"></button>
        <button type="submit" className="botoesmenu" onClick= {()=>setNumber(2)}></button>
        <button type="submit" className="botoesmenu" onClick= {()=>setNumber(3)}></button>
        <button type="submit" className="botoesmenu" onClick= {()=>setNumber(4)}></button>
    </div>
}

export default Cabecalho;