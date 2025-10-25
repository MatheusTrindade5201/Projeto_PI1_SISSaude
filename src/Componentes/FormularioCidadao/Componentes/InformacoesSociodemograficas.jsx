import { handleDataChange } from "../../../Helpers/handleDataChange";
import SelectInput from "../../Inputs/SelectInput";
import TextInput from "../../Inputs/TextInput";
import Checkbox from "../../Inputs/Checkbox";
import InlineCheckbox from "../../Inputs/InlineCheckbox";
import { escolaridadeOpcoes, situacaoMercadoTrabalhoOpcoes, orientacaoSexualOpcoes, identidadeGeneroOpcoes, relacaoParentescoOpcoes, deficienciaOpcoes } from '../../../Utils/constants';


function InformacoesSociodemograficas({ formData, setFormData }) {

    const handleDeficienciaChange = (e) => {
        const value = e.target.value;
        const temDeficiencia = value !== "Não" && value !== "";
        setFormData({
            ...formData,
            _tem_deficiencia: temDeficiencia,
            _tipo_deficiencia: value
        });
    };

    return (
        <div className="section-wrapper">
            <h2>Informações sociodemográficas</h2>
            <div className="form-section-card">
                <div className="flex-container">
                    <div className="form-group">
                        <label>Relação de parentesco c/ Resp. Familiar</label>
                        <SelectInput items={relacaoParentescoOpcoes} value={formData.relacao_responsavel || ''} onChange={(e) => handleDataChange(formData, setFormData, "relacao_responsavel", e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Ocupação</label>
                        <TextInput
                            placeholder="Ex: Estudante, Dona de casa"
                            value={formData.ocupacao || ''}
                            onChange={(e) => handleDataChange(formData, setFormData, "ocupacao", e.target.value)}
                            maxLength={60}
                        />
                    </div>
                    <div className="form-group">
                        <label>Escolaridade</label>
                        <SelectInput items={escolaridadeOpcoes} value={formData.escolaridade || ''} onChange={(e) => handleDataChange(formData, setFormData, "escolaridade", e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Situação no mercado de trabalho</label>
                        <SelectInput items={situacaoMercadoTrabalhoOpcoes} value={formData.situacao_mercado_trabalho || ''} onChange={(e) => handleDataChange(formData, setFormData, "situacao_mercado_trabalho", e.target.value)} />
                    </div>
                </div>
                <div className="flex-container" style={{ alignItems: 'flex-start' }}>
                    <div className="form-group checkbox-column-vertical" style={{ flex: '1 1 30%' }}>
                        <Checkbox label="Frequenta escola ou creche" checked={!!formData.frequenta_escola_creche} onChange={(e) => handleDataChange(formData, setFormData, "frequenta_escola_creche", e.target.checked)} />
                        <Checkbox label="Participa de algum grupo comunitário" checked={!!formData.participa_grupo_comunitario} onChange={(e) => handleDataChange(formData, setFormData, "participa_grupo_comunitario", e.target.checked)} />
                        <Checkbox label="Possui plano de saúde privado" checked={!!formData.plano_saude} onChange={(e) => handleDataChange(formData, setFormData, "plano_saude", e.target.checked)} />
                        <Checkbox label="Frequenta Cuidador" checked={!!formData.frequenta_cuidador} onChange={(e) => handleDataChange(formData, setFormData, "frequenta_cuidador", e.target.checked)} />
                        <Checkbox label="Membro de Povo/Comunidade Tradicional" checked={!!formData.membro_povo_comunidade_tradicional} onChange={(e) => handleDataChange(formData, setFormData, "membro_povo_comunidade_tradicional", e.target.checked)} />
                    </div>
                </div>
                <hr />
                <div className="sub-section">
                    <div className="flex-container">
                        <div className="form-group flex-item-33">
                            <Checkbox label="Deseja informar Orientação sexual?" checked={formData._deseja_informar_orientacao_sexual} onChange={(e) => handleDataChange(formData, setFormData, "_deseja_informar_orientacao_sexual", e.target.checked)} />
                            {formData._deseja_informar_orientacao_sexual && (
                                <SelectInput items={orientacaoSexualOpcoes} value={formData.orientacao_sexual || ''} onChange={(e) => handleDataChange(formData, setFormData, "orientacao_sexual", e.target.value)} placeholder="Selecione..." />
                            )}
                        </div>
                        <div className="form-group flex-item-33">
                            <Checkbox label="Deseja informar Identidade de gênero?" checked={formData._deseja_informar_identidade_genero} onChange={(e) => handleDataChange(formData, setFormData, "_deseja_informar_identidade_genero", e.target.checked)} />
                            {formData._deseja_informar_identidade_genero && (
                                <SelectInput items={identidadeGeneroOpcoes} value={formData.identidade_genero || ''} onChange={(e) => handleDataChange(formData, setFormData, "identidade_genero", e.target.value)} placeholder="Selecione..." />
                            )}
                        </div>
                        <div className="form-group flex-item-33">
                            <label>Tem alguma deficiência?</label>
                            <SelectInput
                                items={deficienciaOpcoes}
                                value={formData._tipo_deficiencia || ""}
                                onChange={handleDeficienciaChange}
                                placeholder="Selecione..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default InformacoesSociodemograficas;