import { handleDataChange } from "../../../Helpers/handleDataChange";
import SelectInput from "../../Inputs/SelectInput";
import TextInput from "../../Inputs/TextInput";
import Checkbox from "../../Inputs/Checkbox";
import InlineCheckbox from "../../Inputs/InlineCheckbox";

function SituacaoDeRua({ formData, setFormData }) {
    return (
        <div className="section-wrapper">
            <h2>Cidadão em situação de rua</h2>
            <div className="form-section-card">
                <div className="flex-container">
                    <div className="form-group flex-item-50">
                        <Checkbox label="Está em situação de rua?" checked={formData.em_situacao_de_rua} onChange={(e) => handleDataChange(formData, setFormData, "em_situacao_de_rua", e.target.checked)} />
                        <TextInput placeholder="Quanto tempo?" value={formData.tempo_situacao_rua} onChange={(e) => handleDataChange(formData, setFormData, "tempo_situacao_rua", e.target.value)} />
                    </div>
                    <div className="form-group flex-item-50">
                        <Checkbox label="É acompanhado por outra instituição?" checked={formData.acompanhado_por_instituicao} onChange={(e) => handleDataChange(formData, setFormData, "acompanhado_por_instituicao", e.target.checked)} />
                        <TextInput placeholder="Qual?" value={formData.nome_instituicao} onChange={(e) => handleDataChange(formData, setFormData, "nome_instituicao", e.target.value)} />
                    </div>
                </div>
                <div className="flex-container align-baseline">
                    <div className="form-group" style={{ flexBasis: 'calc(50% - 12px)' }}>
                        <label>Quantas vezes se alimenta ao dia?</label>
                        <SelectInput items={["1", "2", "3", "Mais de 3"]} value={formData.refeicoes_ao_dia} onChange={(e) => handleDataChange(formData, setFormData, "refeicoes_ao_dia", e.target.value)} />
                    </div>
                    <div className="form-group" style={{ flexBasis: 'calc(50% - 12px)' }}>
                        <div className="checkbox-group-horizontal">
                            <InlineCheckbox label="Recebe algum benefício?" checked={formData.recebe_beneficio} onChange={(e) => handleDataChange(formData, setFormData, "recebe_beneficio", e.target.checked)} />
                            <InlineCheckbox label="Possui referência familiar?" checked={formData.possui_referencia_familiar} onChange={(e) => handleDataChange(formData, setFormData, "possui_referencia_familiar", e.target.checked)} />
                        </div>
                    </div>

                </div>

                <div className="form-group">
                    <p className="form-group-title">Qual a origem da alimentação?</p>
                    <div className="checkbox-group-horizontal">
                        <InlineCheckbox label="Restaurante Popular" checked={formData.origem_alimentacao_restaurante_popular} onChange={(e) => handleDataChange(formData, setFormData, "origem_alimentacao_restaurante_popular", e.target.checked)} />
                        <InlineCheckbox label="Doação Grupo Religioso" checked={formData.origem_alimentacao_doacao_grupo_religioso} onChange={(e) => handleDataChange(formData, setFormData, "origem_alimentacao_doacao_grupo_religioso", e.target.checked)} />
                        <InlineCheckbox label="Doação Restaurante" checked={formData.origem_alimentacao_doacao_restaurante} onChange={(e) => handleDataChange(formData, setFormData, "origem_alimentacao_doacao_restaurante", e.target.checked)} />
                        <InlineCheckbox label="Doação Popular" checked={formData.origem_alimentacao_doacao_popular} onChange={(e) => handleDataChange(formData, setFormData, "origem_alimentacao_doacao_popular", e.target.checked)} />
                        <InlineCheckbox label="Outras" checked={formData.origem_alimentacao_outros} onChange={(e) => handleDataChange(formData, setFormData, "origem_alimentacao_outros", e.target.checked)} />
                    </div>
                </div>

                <div className="flex-container section-spacer">
                    <div className="form-group flex-item-50"><br></br>
                        <Checkbox label="Visita algum familiar com frequência?" checked={formData.visita_familiar} onChange={(e) => handleDataChange(formData, setFormData, "visita_familiar", e.target.checked)} />
                        <TextInput placeholder="Grau de parentesco" value={formData.grau_parentesco_visita} onChange={(e) => handleDataChange(formData, setFormData, "grau_parentesco_visita", e.target.value)} />
                    </div>
                </div>

                <div className="form-group">
                    <p className="form-group-title">Tem acesso à higiene pessoal?</p>
                    <div className="checkbox-group-horizontal">
                        <InlineCheckbox label="Banho" checked={formData.acesso_higiene_banho} onChange={(e) => handleDataChange(formData, setFormData, "acesso_higiene_banho", e.target.checked)} />
                        <InlineCheckbox label="Acesso ao sanitário" checked={formData.acesso_higiene_sanitario} onChange={(e) => handleDataChange(formData, setFormData, "acesso_higiene_sanitario", e.target.checked)} />
                        <InlineCheckbox label="Higiene Bucal" checked={formData.acesso_higiene_bucal} onChange={(e) => handleDataChange(formData, setFormData, "acesso_higiene_bucal", e.target.checked)} />
                        <InlineCheckbox label="Outras" checked={formData.acesso_higiene_outros} onChange={(e) => handleDataChange(formData, setFormData, "acesso_higiene_outros", e.target.checked)} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SituacaoDeRua; 