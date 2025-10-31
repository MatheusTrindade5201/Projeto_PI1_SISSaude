import { handleDataChange } from "../../../Helpers/handleDataChange";
import SelectInput from "../../Inputs/SelectInput";
import TextInput from "../../Inputs/TextInput";
import Checkbox from "../../Inputs/Checkbox";
import { pesoOpcoes, doencaCardiacaOpcoes, problemasRenaisOpcoes, doencaRespiratoriaOpcoes } from '../../../Utils/constants';

function CondicoesSaude({ formData, setFormData }) {

    const handleDoencaCardiacaChange = (e) => {
        const value = e.target.value;
        const temDoenca = value !== "Não tem" && value !== "";
        setFormData({
            ...formData,
            doenca_cardiaca: temDoenca,
            _doenca_cardiaca_tipo: value
        });
    };


    const handleProblemasRenaisChange = (e) => {
        const value = e.target.value;
        const temProblema = value !== "Não tem" && value !== "";
        setFormData({
            ...formData,
            problemas_renais: temProblema,
            _problemas_renais_tipo: value
        });
    };

    const handleDoencaRespiratoriaChange = (e) => {
        const value = e.target.value;
        const temDoenca = value !== "Não tem" && value !== "";
        setFormData({
            ...formData,
            doenca_respiratoria: temDoenca,
            _doenca_respiratoria_tipo: value
        });
    };

    return (
        <div className="section-wrapper">
            <h2>Condições/Situação de saúde gerais</h2>
            <div className="form-section-card">

                <div className="flex-container">
                    <div className="checkbox-column">
                        <Checkbox label="Fumante" checked={!!formData.fumante} onChange={(e) => handleDataChange(formData, setFormData, "fumante", e.target.checked)} />
                        <Checkbox label="Faz uso de álcool" checked={!!formData.uso_alcool} onChange={(e) => handleDataChange(formData, setFormData, "uso_alcool", e.target.checked)} />
                        <Checkbox label="Faz uso de outras drogas" checked={!!formData.uso_drogas} onChange={(e) => handleDataChange(formData, setFormData, "uso_drogas", e.target.checked)} />
                        <Checkbox label="Tem hipertensão arterial" checked={!!formData.hipertensao} onChange={(e) => handleDataChange(formData, setFormData, "hipertensao", e.target.checked)} />
                    </div>
                    <div className="checkbox-column">
                        <Checkbox label="Tem diabetes" checked={!!formData.diabetes} onChange={(e) => handleDataChange(formData, setFormData, "diabetes", e.target.checked)} />
                        <Checkbox label="Teve AVC/Derrame" checked={!!formData.avc_derrame} onChange={(e) => handleDataChange(formData, setFormData, "avc_derrame", e.target.checked)} />
                        <Checkbox label="Teve infarto" checked={!!formData.infarto} onChange={(e) => handleDataChange(formData, setFormData, "infarto", e.target.checked)} />
                        <Checkbox label="Está acamado" checked={!!formData.acamado} onChange={(e) => handleDataChange(formData, setFormData, "acamado", e.target.checked)} />
                    </div>
                    <div className="checkbox-column">
                        <Checkbox label="Está com hanseníase" checked={!!formData.hanseniase} onChange={(e) => handleDataChange(formData, setFormData, "hanseniase", e.target.checked)} />
                        <Checkbox label="Está com tuberculose" checked={!!formData.tuberculose} onChange={(e) => handleDataChange(formData, setFormData, "tuberculose", e.target.checked)} />
                        <Checkbox label="Tem ou teve câncer" checked={!!formData.cancer} onChange={(e) => handleDataChange(formData, setFormData, "cancer", e.target.checked)} />
                        <Checkbox label="Está domiciliado" checked={!!formData.domiciliado} onChange={(e) => handleDataChange(formData, setFormData, "domiciliado", e.target.checked)} />
                    </div>
                </div>
                <hr />
                <br />
                <div className="flex-container">
                    <div className="form-group">
                        <Checkbox label="Teve internação nos últimos 12 meses?" checked={!!formData.internacao_recente} onChange={(e) => handleDataChange(formData, setFormData, "internacao_recente", e.target.checked)} />
                        {formData.internacao_recente && (
                            <TextInput
                                placeholder="Causa"
                                value={formData.internacao_motivo || ""}
                                onChange={(e) => handleDataChange(formData, setFormData, "internacao_motivo", e.target.value)}
                                maxLength={60}
                            />
                        )}
                    </div>
                    <div className="form-group">
                        <Checkbox label="Gestante?" checked={!!formData.gestante} onChange={(e) => handleDataChange(formData, setFormData, "gestante", e.target.checked)} />
                        {formData.gestante && (
                            <TextInput
                                placeholder="Maternidade de Referência"
                                value={formData.maternidade_referencia || ""}
                                onChange={(e) => handleDataChange(formData, setFormData, "maternidade_referencia", e.target.value)}
                                maxLength={60}
                            />
                        )}
                    </div>
                    <div className="form-group">
                        <label>Doença respiratória?</label>
                        <SelectInput
                            items={doencaRespiratoriaOpcoes}
                            value={formData._doenca_respiratoria_tipo || ""}
                            onChange={handleDoencaRespiratoriaChange}
                            placeholder="Selecione..."
                        />
                    </div>
                    <div className="form-group">
                        <Checkbox label="Usa plantas medicinais?" checked={!!formData.praticas_ingestivas_complementares} onChange={(e) => handleDataChange(formData, setFormData, "praticas_ingestivas_complementares", e.target.checked)} />
                    </div>
                </div>
                <hr />

                <div className="flex-container">
                    <div className="form-group">
                        <label>Doença cardíaca?</label>
                        <SelectInput
                            items={doencaCardiacaOpcoes}
                            value={formData._doenca_cardiaca_tipo || ""}
                            onChange={handleDoencaCardiacaChange}
                            placeholder="Selecione..."
                        />
                    </div>
                    <div className="form-group">
                        <label>Problemas nos rins?</label>
                        <SelectInput
                            items={problemasRenaisOpcoes}
                            value={formData._problemas_renais_tipo || ""}
                            onChange={handleProblemasRenaisChange}
                            placeholder="Selecione..."
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CondicoesSaude;