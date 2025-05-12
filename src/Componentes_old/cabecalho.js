
function Cabecalho(){
    return (
    <div>
        <div>
            <div>
                <label>CNS do PRofissional</label><br />
                <input id="CNS" class="campo_preenchimento" type="text" placeholder="Digite o CNS" />
            </div>
            <div>
                <label>CBO</label><br />
                <input id="CBO" class="campo_preenchimento" type="text" placeholder="Digite o CBO" />
            </div>
            <div>
                <label>CNES</label><br />
                <input id="CNES" class="campo_preenchimento" type="text" placeholder="Digite o CNES" />
            </div>
            <div>
                <label>INE</label><br />
                <input id="INE" class="campo_preenchimento" type="text" placeholder="Digite o INE" />
            </div>
            <div>
                <label>Data</label><br />
                <input id="data_preenchimento" class="campo_preenchimento" type="date" placeholder="dd/mm/aaaa" />
            </div>
        </div>
    </div>
    
    )   
    
}

export default Cabecalho;