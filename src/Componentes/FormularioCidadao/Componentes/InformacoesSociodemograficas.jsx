import { handleDataChange } from "../../../Helpers/handleDataChange";
import SelectInput from "../../Inputs/SelectInput";
import TextInput from "../../Inputs/TextInput";
import Checkbox from "../../Inputs/Checkbox";
import InlineCheckbox from "../../Inputs/InlineCheckbox";

function InformacoesSociodemograficas({ formData, setFormData }) {
    return (
        <div className="section-wrapper">
            <h2>Informações sociodemográficas</h2>
            <div className="form-section-card">
                <div className="flex-container">
                    <div className="form-group"><label>Relação de parentesco</label><SelectInput items={["Cônjuge/Companheiro(a)", "Filho(a)", "Outro"]} value={formData.relacao_parentesco} onChange={(e) => handleDataChange(formData, setFormData, "relacao_parentesco", e.target.value)} /></div>
                    <div className="form-group"><label>Ocupação</label><TextInput placeholder="Nome do cidadão" value={formData.ocupacao} onChange={(e) => handleDataChange(formData, setFormData, "ocupacao", e.target.value)} /></div>
                    <div className="form-group"><label>Escolaridade</label><SelectInput items={["Creche", "Fundamental", "Médio"]} value={formData.escolaridade} onChange={(e) => handleDataChange(formData, setFormData, "escolaridade", e.target.value)} /></div>
                    <div className="form-group"><label>Situação no mercado de trabalho</label><SelectInput items={["Empregador", "Assalariado", "Autônomo"]} value={formData.situacao_mercado_trabalho} onChange={(e) => handleDataChange(formData, setFormData, "situacao_mercado_trabalho", e.target.value)} /></div>
                    <div className="form-group"><label>Data Ent no Brasil</label><TextInput type="date" value={formData.data_entrada_brasil} onChange={(e) => handleDataChange(formData, setFormData, "data_entrada_brasil", e.target.value)} /></div>
                </div>
                <div className="flex-container" style={{ alignItems: 'flex-start' }}>
                    <div className="form-group checkbox-column-vertical" style={{ flex: '1 1 30%' }}>
                        <Checkbox label="Frequenta escola ou creche" checked={formData.frequenta_escola} onChange={(e) => handleDataChange(formData, setFormData, "frequenta_escola", e.target.checked)} />
                        <Checkbox label="Participa de algum grupo comunitário" checked={formData.participa_grupo_comunitario} onChange={(e) => handleDataChange(formData, setFormData, "participa_grupo_comunitario", e.target.checked)} />
                        <Checkbox label="Possui plano de saúde privado" checked={formData.plano_saude_privado} onChange={(e) => handleDataChange(formData, setFormData, "plano_saude_privado", e.target.checked)} />
                        <Checkbox label="Disponibilidade de energia elétrica" checked={formData.disponibilidade_energia_eletrica} onChange={(e) => handleDataChange(formData, setFormData, "disponibilidade_energia_eletrica", e.target.checked)} />
                    </div>
                    <div className="form-group" style={{ flex: '2 1 65%' }}>
                        <p className="form-group-title">Criança de 0 a 9 anos, com quem fica?</p>
                        <div className="checkbox-group-horizontal">
                            {/* Usando o NOVO InlineCheckbox aqui para ficarem LADO A LADO */}
                            <InlineCheckbox label="Adulto Responsável" checked={formData.fica_com_adulto_responsavel} onChange={(e) => handleDataChange(formData, setFormData, "fica_com_adulto_responsavel", e.target.checked)} />
                            <InlineCheckbox label="Outra(s) Criança(s)" checked={formData.fica_com_outras_criancas} onChange={(e) => handleDataChange(formData, setFormData, "fica_com_outras_criancas", e.target.checked)} />
                            <InlineCheckbox label="Adolescente" checked={formData.fica_com_adolescente} onChange={(e) => handleDataChange(formData, setFormData, "fica_com_adolescente", e.target.checked)} />
                            <InlineCheckbox label="Sozinha" checked={formData.fica_sozinho} onChange={(e) => handleDataChange(formData, setFormData, "fica_sozinho", e.target.checked)} />
                            <InlineCheckbox label="Creche" checked={formData.fica_em_creche} onChange={(e) => handleDataChange(formData, setFormData, "fica_em_creche", e.target.checked)} />
                            <InlineCheckbox label="Outro" checked={formData.fica_em_outro_lugar} onChange={(e) => handleDataChange(formData, setFormData, "fica_em_outro_lugar", e.target.checked)} />
                        </div>
                    </div>
                </div>
                <div className="sub-section">
                    <div className="flex-container">
                        <div className="form-group flex-item-33">
                            <Checkbox label="Deseja informar Orientação sexual?" checked={formData.deseja_informar_orientacao_sexual} onChange={(e) => handleDataChange(formData, setFormData, "deseja_informar_orientacao_sexual", e.target.checked)} />
                            <SelectInput items={["Heterossexual", "Homossexual", "Bissexual"]} value={formData.orientacao_sexual} onChange={(e) => handleDataChange(formData, setFormData, "orientacao_sexual", e.target.value)} />
                        </div>
                        <div className="form-group flex-item-33">
                            <Checkbox label="Deseja informar Identidade de gênero?" checked={formData.deseja_informar_identidade_genero} onChange={(e) => handleDataChange(formData, setFormData, "deseja_informar_identidade_genero", e.target.checked)} />
                            <SelectInput items={["Homem Transexual", "Mulher Transexual", "Travesti"]} value={formData.identidade_genero} onChange={(e) => handleDataChange(formData, setFormData, "identidade_genero", e.target.value)} />
                        </div>
                        <div className="form-group flex-item-33">
                            <Checkbox label="Tem alguma deficiência?" checked={formData.tem_deficiencia} onChange={(e) => handleDataChange(formData, setFormData, "tem_deficiencia", e.target.checked)} />
                            <SelectInput items={["Auditiva", "Visual", "Física", "Intelectual"]} value={formData.tipo_deficiencia} onChange={(e) => handleDataChange(formData, setFormData, "tipo_deficiencia", e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default InformacoesSociodemograficas;