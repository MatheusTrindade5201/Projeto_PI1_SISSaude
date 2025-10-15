import { handleDataChange } from "../../../Helpers/handleDataChange";
import SelectInput from "../../Inputs/SelectInput";
import TextInput from "../../Inputs/TextInput";
import Checkbox from "../../Inputs/Checkbox";

function CondicoesSaude({ formData, setFormData }) {
    return (
        <div className="section-wrapper">
            <h2>Condições/Situação de saúde gerais</h2>
            <div className="form-section-card">

                <div className="flex-container">
                    <div className="checkbox-column">
                        <Checkbox label="Fumante" checked={formData.fumante} onChange={(e) => handleDataChange(formData, setFormData, "fumante", e.target.checked)} />
                        <Checkbox label="Faz uso de álcool" checked={formData.uso_de_alcool} onChange={(e) => handleDataChange(formData, setFormData, "uso_de_alcool", e.target.checked)} />
                        <Checkbox label="Faz uso de outras drogas" checked={formData.uso_de_outras_drogas} onChange={(e) => handleDataChange(formData, setFormData, "uso_de_outras_drogas", e.target.checked)} />
                        <Checkbox label="Tem hipertensão arterial" checked={formData.tem_hipertensao_arterial} onChange={(e) => handleDataChange(formData, setFormData, "tem_hipertensao_arterial", e.target.checked)} />
                    </div>
                    <div className="checkbox-column">
                        <Checkbox label="Tem diabetes" checked={formData.tem_diabetes} onChange={(e) => handleDataChange(formData, setFormData, "tem_diabetes", e.target.checked)} />
                        <Checkbox label="Teve AVC/Derrame" checked={formData.teve_avc_derrame} onChange={(e) => handleDataChange(formData, setFormData, "teve_avc_derrame", e.target.checked)} />
                        <Checkbox label="Teve infarto" checked={formData.teve_infarto} onChange={(e) => handleDataChange(formData, setFormData, "teve_infarto", e.target.checked)} />
                        <Checkbox label="Está acamado" checked={formData.esta_acamado} onChange={(e) => handleDataChange(formData, setFormData, "esta_acamado", e.target.checked)} />
                    </div>
                    <div className="checkbox-column">
                        <Checkbox label="Está com hanseníase" checked={formData.tem_hanseniase} onChange={(e) => handleDataChange(formData, setFormData, "tem_hanseniase", e.target.checked)} />
                        <Checkbox label="Está com tuberculose" checked={formData.tem_tuberculose} onChange={(e) => handleDataChange(formData, setFormData, "tem_tuberculose", e.target.checked)} />
                        <Checkbox label="Tem ou teve câncer" checked={formData.tem_ou_teve_cancer} onChange={(e) => handleDataChange(formData, setFormData, "tem_ou_teve_cancer", e.target.checked)} />
                        <Checkbox label="Está domiciliado" checked={formData.esta_domiciliado} onChange={(e) => handleDataChange(formData, setFormData, "esta_domiciliado", e.target.checked)} />
                    </div>
                </div>

                <div className="flex-container">
                    <div className="form-group" style={{ flexBasis: 'calc(25% - 18px)', flexGrow: 0 }}>
                        <label>Sobre seu peso</label>
                        <SelectInput items={["Abaixo do peso", "Peso adequado", "Acima do peso"]} value={formData.peso} onChange={(e) => handleDataChange(formData, setFormData, "peso", e.target.value)} />
                    </div>
                </div>
                <div className="flex-container">
                    <div className="form-group">
                        <Checkbox label="Teve alguma internação nos últimos 12 meses?" checked={formData.teve_internacao_12_meses} onChange={(e) => handleDataChange(formData, setFormData, "teve_internacao_12_meses", e.target.checked)} />
                        <TextInput placeholder="Causa" value={formData.motivo_internacao} onChange={(e) => handleDataChange(formData, setFormData, "motivo_internacao", e.target.value)} />
                    </div>
                    <div className="form-group">
                        <Checkbox label="Usa plantas medicinais?" checked={formData.usa_plantas_medicinais} onChange={(e) => handleDataChange(formData, setFormData, "usa_plantas_medicinais", e.target.checked)} />
                        <TextInput placeholder="Quais?" value={formData.plantas_medicinais_quais} onChange={(e) => handleDataChange(formData, setFormData, "plantas_medicinais_quais", e.target.value)} />
                    </div>
                    <div className="form-group">
                        <Checkbox label="Gestante?" checked={formData.gestante} onChange={(e) => handleDataChange(formData, setFormData, "gestante", e.target.checked)} />
                        <TextInput placeholder="Maternidade de Referência" value={formData.maternidade_referencia} onChange={(e) => handleDataChange(formData, setFormData, "maternidade_referencia", e.target.value)} />
                    </div>
                    <div className="form-group">
                        <Checkbox label="Doença respiratória no pulmão?" checked={!!formData.doenca_respiratoria} onChange={(e) => handleDataChange(formData, setFormData, "doenca_respiratoria", e.target.checked ? "Asma" : "")} />
                        <SelectInput items={["Asma", "Enfisema", "Outra", "Não tem"]} value={formData.doenca_respiratoria} onChange={(e) => handleDataChange(formData, setFormData, "doenca_respiratoria", e.target.value)} />
                    </div>
                </div>
                <div className="flex-container">
                    <div className="form-group">
                        <Checkbox label="Tem ou teve problemas nos rins?" checked={!!formData.problemas_rins} onChange={(e) => handleDataChange(formData, setFormData, "problemas_rins", e.target.checked ? "Insuficiência renal" : "")} />
                        <SelectInput items={["Insuficiência renal", "Outro", "Não tem"]} value={formData.problemas_rins} onChange={(e) => handleDataChange(formData, setFormData, "problemas_rins", e.target.value)} />
                    </div>
                    <div className="form-group">
                        <Checkbox label="Tem ou teve doença cardíaca/do coração?" checked={!!formData.doenca_cardiaca} onChange={(e) => handleDataChange(formData, setFormData, "doenca_cardiaca", e.target.checked ? "Insuficiência cardíaca" : "")} />
                        <SelectInput items={["Insuficiência cardíaca", "Outra", "Não tem"]} value={formData.doenca_cardiaca} onChange={(e) => handleDataChange(formData, setFormData, "doenca_cardiaca", e.target.value)} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CondicoesSaude;