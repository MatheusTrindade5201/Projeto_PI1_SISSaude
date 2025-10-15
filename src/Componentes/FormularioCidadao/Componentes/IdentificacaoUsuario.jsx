import { handleDataChange } from "../../../Helpers/handleDataChange";
import { UFs } from "../../../Utils/constants";
import SelectInput from "../../Inputs/SelectInput";
import TextInput from "../../Inputs/TextInput";
import Checkbox from "../../Inputs/Checkbox";

function IdentificacaoUsuario({ formData, setFormData }) {
  return (
    <div className="section-wrapper">
      <h2>Identificação do usuário/cidadão</h2>
      <div className="form-section-card">
        <div className="flex-container">
          <div className="form-group" style={{ flex: '1 1 240px' }}><label>CNS do cidadão</label><TextInput value={formData.cns_cidadao} onChange={(e) => handleDataChange(formData, setFormData, "cns_cidadao", e.target.value)} /></div>
          <div className="form-group checkbox-item"><Checkbox label="Responsável Familiar" checked={formData.responsavel_familiar} onChange={(e) => handleDataChange(formData, setFormData, "responsavel_familiar", e.target.checked)} /></div>
          <div className="form-group" style={{ flex: '1 1 240px' }}><label>CNS do responsável Familiar</label><TextInput value={formData.cns_responsavel_familiar} onChange={(e) => handleDataChange(formData, setFormData, "cns_responsavel_familiar", e.target.value)} /></div>
          <div className="form-group" style={{ flex: '0 1 80px' }}><label>Microárea</label><TextInput value={formData.microarea} onChange={(e) => handleDataChange(formData, setFormData, "microarea", e.target.value)} /></div>
          <div className="form-group checkbox-item"><Checkbox label="FA" checked={formData.fa} onChange={(e) => handleDataChange(formData, setFormData, "fa", e.target.checked)} /></div>
        </div>
        <div className="flex-container">
          <div className="form-group" style={{ flex: '2 1 200px' }}><label>Nome Completo</label><TextInput placeholder="Nome do cidadão" value={formData.nome_completo} onChange={(e) => handleDataChange(formData, setFormData, "nome_completo", e.target.value)} /></div>
          <div className="form-group" style={{ flex: '2 1 200px' }}><label>Nome Social</label><TextInput placeholder="Nome Social" value={formData.nome_social} onChange={(e) => handleDataChange(formData, setFormData, "nome_social", e.target.value)} /></div>
          <div className="form-group" style={{ flex: '1 1 120px' }}><label>Data Nascimento</label><TextInput type="date" value={formData.data_nascimento} onChange={(e) => handleDataChange(formData, setFormData, "data_nascimento", e.target.value)} /></div>
          <div className="form-group" style={{ flex: '0 1 80px' }}><label>Sexo</label><SelectInput items={["M", "F"]} value={formData.sexo} onChange={(e) => handleDataChange(formData, setFormData, "sexo", e.target.value)} /></div>
          <div className="form-group" style={{ flex: '1 1 120px' }}><label>Raça/Cor</label><SelectInput items={["Indígena", "Branca", "Preta"]} value={formData.raca_cor} onChange={(e) => handleDataChange(formData, setFormData, "raca_cor", e.target.value)} /></div>
          <div className="form-group" style={{ flex: '1 1 120px' }}><label>Etnia</label><SelectInput items={["Etnia 1", "Etnia 2"]} value={formData.etnia} onChange={(e) => handleDataChange(formData, setFormData, "etnia", e.target.value)} /></div>
          <div className="form-group" style={{ flex: '1 1 150px' }}><label>N NIS(PIS/PASEP)</label><TextInput value={formData.nis_pis_pasep} onChange={(e) => handleDataChange(formData, setFormData, "nis_pis_pasep", e.target.value)} /></div>
        </div>
        <div className="flex-container">
          <div className="form-group"><label>Nacionalidade</label><SelectInput items={["Brasileira", "Estrangeira"]} value={formData.nacionalidade} onChange={(e) => handleDataChange(formData, setFormData, "nacionalidade", e.target.value)} /></div>
          <div className="form-group"><label>País Nascimento</label><SelectInput items={["Brasil", "Outro"]} value={formData.pais_nascimento} onChange={(e) => handleDataChange(formData, setFormData, "pais_nascimento", e.target.value)} /></div>
          <div className="form-group" style={{ flex: '0 1 80px' }}><label>UF</label><SelectInput items={UFs} value={formData.uf_nascimento} onChange={(e) => handleDataChange(formData, setFormData, "uf_nascimento", e.target.value)} /></div>
          <div className="form-group"><label>Cidade Nascimento</label><TextInput value={formData.cidade_nascimento} onChange={(e) => handleDataChange(formData, setFormData, "cidade_nascimento", e.target.value)} /></div>
          <div className="form-group"><label>Data Naturalização</label><TextInput type="date" value={formData.data_naturalizacao} onChange={(e) => handleDataChange(formData, setFormData, "data_naturalizacao", e.target.value)} /></div>
          <div className="form-group"><label>Portaria Naturalização</label><TextInput value={formData.portaria_naturalizacao} onChange={(e) => handleDataChange(formData, setFormData, "portaria_naturalizacao", e.target.value)} /></div>
          <div className="form-group"><label>Data Ent no Brasil</label><TextInput type="date" value={formData.data_entrada_brasil} onChange={(e) => handleDataChange(formData, setFormData, "data_entrada_brasil", e.target.value)} /></div>
        </div>
        <div className="flex-container">
          <div className="form-group"><label>Celular</label><TextInput value={formData.celular} onChange={(e) => handleDataChange(formData, setFormData, "celular", e.target.value)} /></div>
          <div className="form-group"><label>E-mail</label><TextInput type="email" value={formData.email} onChange={(e) => handleDataChange(formData, setFormData, "email", e.target.value)} /></div>
          <div className="form-group" style={{ flex: '2 1 200px' }}><label>Nome completo da mãe</label><TextInput value={formData.nome_completo_mae} onChange={(e) => handleDataChange(formData, setFormData, "nome_completo_mae", e.target.value)} /></div>
          <div className="form-group" style={{ flex: '2 1 200px' }}><label>Nome completo do pai</label><TextInput value={formData.nome_completo_pai} onChange={(e) => handleDataChange(formData, setFormData, "nome_completo_pai", e.target.value)} /></div>
        </div>
      </div>
    </div>
  );
}
export default IdentificacaoUsuario;