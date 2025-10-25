import { handleDataChange } from "../../../Helpers/handleDataChange";
import SelectInput from "../../Inputs/SelectInput";
import TextInput from "../../Inputs/TextInput";
import Checkbox from "../../Inputs/Checkbox";
import InlineCheckbox from "../../Inputs/InlineCheckbox";
import { refeicoesOpcoes, tempoRuaOpcoes } from '../../../Utils/constants';

function SituacaoDeRua({ formData, setFormData }) {
    return (
        <div className="section-wrapper">
            <h2>Cidadão em situação de rua</h2>
            <div className="form-section-card">
                <Checkbox
                    label="Está em situação de rua?"
                    checked={!!formData._em_situacao_de_rua}
                    onChange={(e) => handleDataChange(formData, setFormData, "_em_situacao_de_rua", e.target.checked)}
                />

                {formData._em_situacao_de_rua && (
                    <>
                        <div className="flex-container">
                            <div className="form-group flex-item-50">
                                <label>Quanto tempo?</label>
                                <SelectInput
                                    items={tempoRuaOpcoes}
                                    value={formData._tempo_situacao_rua || ''}
                                    onChange={(e) => handleDataChange(formData, setFormData, "_tempo_situacao_rua", e.target.value)}
                                    placeholder="Selecione..."
                                />
                            </div>
                            <div className="form-group flex-item-50">
                                <Checkbox label="É acompanhado por outra instituição?" checked={!!formData._acompanhado_por_instituicao} onChange={(e) => handleDataChange(formData, setFormData, "_acompanhado_por_instituicao", e.target.checked)} />
                                {formData._acompanhado_por_instituicao && (
                                    <TextInput
                                        placeholder="Qual?"
                                        value={formData._nome_instituicao || ''}
                                        onChange={(e) => handleDataChange(formData, setFormData, "_nome_instituicao", e.target.value)}
                                        maxLength={60}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="flex-container align-baseline">
                            <div className="form-group" style={{ flexBasis: 'calc(50% - 12px)' }}>
                                <label>Quantas vezes se alimenta ao dia?</label>
                                <SelectInput items={refeicoesOpcoes} value={formData._refeicoes_ao_dia || ''} onChange={(e) => handleDataChange(formData, setFormData, "_refeicoes_ao_dia", e.target.value)} placeholder="Selecione..." />
                            </div>
                            <div className="form-group" style={{ flexBasis: 'calc(50% - 12px)' }}>
                                <div className="checkbox-group-horizontal">
                                    <InlineCheckbox label="Recebe algum benefício?" checked={!!formData._recebe_beneficio} onChange={(e) => handleDataChange(formData, setFormData, "_recebe_beneficio", e.target.checked)} />
                                    <InlineCheckbox label="Possui referência familiar?" checked={!!formData._possui_referencia_familiar} onChange={(e) => handleDataChange(formData, setFormData, "_possui_referencia_familiar", e.target.checked)} />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <p className="form-group-title">Qual a origem da alimentação?</p>
                            <div className="checkbox-group-horizontal">
                                <InlineCheckbox label="Restaurante Popular" checked={!!formData._origem_alimentacao_restaurante_popular} onChange={(e) => handleDataChange(formData, setFormData, "_origem_alimentacao_restaurante_popular", e.target.checked)} />
                                <InlineCheckbox label="Doação Grupo Religioso" checked={!!formData._origem_alimentacao_doacao_grupo_religioso} onChange={(e) => handleDataChange(formData, setFormData, "_origem_alimentacao_doacao_grupo_religioso", e.target.checked)} />
                                <InlineCheckbox label="Doação Restaurante" checked={!!formData._origem_alimentacao_doacao_restaurante} onChange={(e) => handleDataChange(formData, setFormData, "_origem_alimentacao_doacao_restaurante", e.target.checked)} />
                                <InlineCheckbox label="Doação Popular" checked={!!formData._origem_alimentacao_doacao_popular} onChange={(e) => handleDataChange(formData, setFormData, "_origem_alimentacao_doacao_popular", e.target.checked)} />
                                <InlineCheckbox label="Outras" checked={!!formData._origem_alimentacao_outros} onChange={(e) => handleDataChange(formData, setFormData, "_origem_alimentacao_outros", e.target.checked)} />
                            </div>
                        </div>
                        <br /><hr /><br />
                        <div className="flex-container section-spacer">
                            <div className="form-group flex-item-50">
                                <Checkbox label="Visita algum familiar com frequência?" checked={!!formData._visita_familiar} onChange={(e) => handleDataChange(formData, setFormData, "_visita_familiar", e.target.checked)} />
                                {formData._visita_familiar && (
                                    <TextInput
                                        placeholder="Grau de parentesco"
                                        value={formData._grau_parentesco_visita || ''}
                                        onChange={(e) => handleDataChange(formData, setFormData, "_grau_parentesco_visita", e.target.value)}
                                        maxLength={20}
                                    />
                                )}
                            </div>
                        </div>
                        <hr />
                        <br />
                        <div className="form-group">
                            <p className="form-group-title">Tem acesso à higiene pessoal?</p>
                            <div className="checkbox-group-horizontal">
                                <InlineCheckbox label="Banho" checked={!!formData._acesso_higiene_banho} onChange={(e) => handleDataChange(formData, setFormData, "_acesso_higiene_banho", e.target.checked)} />
                                <InlineCheckbox label="Acesso ao sanitário" checked={!!formData._acesso_higiene_sanitario} onChange={(e) => handleDataChange(formData, setFormData, "_acesso_higiene_sanitario", e.target.checked)} />
                                <InlineCheckbox label="Higiene Bucal" checked={!!formData._acesso_higiene_bucal} onChange={(e) => handleDataChange(formData, setFormData, "_acesso_higiene_bucal", e.target.checked)} />
                                <InlineCheckbox label="Outras" checked={!!formData._acesso_higiene_outros} onChange={(e) => handleDataChange(formData, setFormData, "_acesso_higiene_outros", e.target.checked)} />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default SituacaoDeRua;