import { handleDataChange } from "../../../Helpers/handleDataChange";
import { UFs } from "../../../Utils/constants";
import SelectInput from "../../Inputs/SelectInput";
import TextInput from "../../Inputs/TextInput";
import Checkbox from "../../Inputs/Checkbox";
import { sexoOpcoes, racaCorOpcoes, nacionalidadeOpcoes, paisNascimentoOpcoes, etniaOpcoes } from '../../../Utils/constants';

function IdentificacaoUsuario({ formData, setFormData }) {
       return (
              <div className="section-wrapper">
                     <h2>Identificação do usuário/cidadão</h2>
                     <div className="form-section-card">
                            <div className="flex-container">
                                   <div className="form-group" style={{ flex: '1 1 240px' }}>
                                          <label>CNS do cidadão *</label>
                                          <TextInput
                                                 value={formData.cns || ''}
                                                 onChange={(e) => handleDataChange(formData, setFormData, "cns", e.target.value)}
                                                 placeholder="XXXXXXXXX"
                                                 maxLength={60}
                                          />
                                   </div>
                                   <div className="form-group" style={{ flex: '1 1 240px' }}>
                                          <label>CPF *</label>
                                          <TextInput
                                                 value={formData.cpf || ''}
                                                 onChange={(e) => handleDataChange(formData, setFormData, "cpf", e.target.value)}
                                                 placeholder="000.000.000-00"
                                                 maxLength={60}
                                          />
                                   </div>
                                   <div className="form-group" style={{ flex: '1 1 240px' }}>
                                          <label>ID Domicílio Associado *</label>
                                          <TextInput
                                                 type="number"
                                                 value={formData.domicilio || ''}
                                                 onChange={(e) => handleDataChange(formData, setFormData, "domicilio", e.target.value)}
                                                 placeholder="Digite o ID do domicílio"
                                                 maxLength={60}
                                          />
                                   </div>
                            </div>
                            <div className="flex-container">
                                   <div className="form-group" style={{ flex: '2 1 200px' }}>
                                          <label>Nome Completo *</label>
                                          <TextInput
                                                 placeholder="Nome do cidadão"
                                                 value={formData.nome || ''}
                                                 onChange={(e) => handleDataChange(formData, setFormData, "nome", e.target.value)}
                                                 maxLength={60}
                                          />
                                   </div>
                                   <div className="form-group" style={{ flex: '2 1 200px' }}>
                                          <label>Nome Social</label>
                                          <TextInput
                                                 placeholder="Nome Social"
                                                 value={formData.nome_social || ''}
                                                 onChange={(e) => handleDataChange(formData, setFormData, "nome_social", e.target.value)}
                                                 maxLength={60}
                                          />
                                   </div>
                                   <div className="form-group" style={{ flex: '1 1 120px' }}>
                                          <label>Data Nascimento *</label>
                                          <TextInput type="date" value={formData.data_nascimento || ''} onChange={(e) => handleDataChange(formData, setFormData, "data_nascimento", e.target.value)} />
                                   </div>
                                   <div className="form-group" style={{ flex: '0 1 80px' }}>
                                          <label>Sexo *</label>
                                          <SelectInput items={sexoOpcoes} value={formData.sexo || ''} onChange={(e) => handleDataChange(formData, setFormData, "sexo", e.target.value)} />
                                   </div>
                                   <div className="form-group" style={{ flex: '1 1 120px' }}>
                                          <label>Raça/Cor *</label>
                                          <SelectInput items={racaCorOpcoes} value={formData.raca_cor || ''} onChange={(e) => handleDataChange(formData, setFormData, "raca_cor", e.target.value)} />
                                   </div>
                                   <div className="form-group" style={{ flex: '1 1 120px' }}>
                                          <label>Etnia *</label>
                                          <SelectInput items={etniaOpcoes} value={formData.etnia || ''} onChange={(e) => handleDataChange(formData, setFormData, "etnia", e.target.value)} />
                                   </div>
                            </div>
                            <div className="flex-container">
                                   <div className="form-group">
                                          <label>Nacionalidade *</label>
                                          <SelectInput items={nacionalidadeOpcoes} value={formData.nacionalidade || 'Brasileira'} onChange={(e) => handleDataChange(formData, setFormData, "nacionalidade", e.target.value)} />
                                   </div>
                                   <div className="form-group">
                                          <label>País Nascimento *</label>
                                          <SelectInput items={paisNascimentoOpcoes} value={formData.pais || 'Brasil'} onChange={(e) => handleDataChange(formData, setFormData, "pais", e.target.value)} />
                                   </div>
                                   <div className="form-group" style={{ flex: '0 1 80px' }}>
                                          <label>UF Nasc. *</label>
                                          <SelectInput items={UFs} value={formData.uf_nascimento || ''} onChange={(e) => handleDataChange(formData, setFormData, "uf_nascimento", e.target.value)} />
                                   </div>
                                   <div className="form-group">
                                          <label>Cidade Nascimento *</label>
                                          <TextInput
                                                 value={formData.municipio_nascimento || ''}
                                                 onChange={(e) => handleDataChange(formData, setFormData, "municipio_nascimento", e.target.value)}
                                                 maxLength={60}
                                          />
                                   </div>
                                   {formData.nacionalidade === 'Naturalizado' && (
                                          <>
                                                 <div className="form-group"><label>Data Naturalização</label><TextInput type="date" value={formData.data_naturalizacao || ''} onChange={(e) => handleDataChange(formData, setFormData, "data_naturalizacao", e.target.value)} /></div>
                                                 <div className="form-group">
                                                        <label>Portaria Naturalização</label>
                                                        <TextInput
                                                               value={formData.naturalizacao_portaria || ''}
                                                               onChange={(e) => handleDataChange(formData, setFormData, "naturalizacao_portaria", e.target.value)}
                                                               maxLength={20}
                                                        />
                                                 </div>
                                          </>
                                   )}
                                   {formData.nacionalidade === 'Estrangeiro' && (
                                          <div className="form-group"><label>Data Ent no Brasil</label><TextInput type="date" value={formData.entrada_brasil_data || ''} onChange={(e) => handleDataChange(formData, setFormData, "entrada_brasil_data", e.target.value)} /></div>
                                   )}
                            </div>
                            <div className="flex-container">
                                   <div className="form-group">
                                          <label>Celular *</label>
                                          <TextInput
                                                 value={formData.celular || ''}
                                                 onChange={(e) => handleDataChange(formData, setFormData, "celular", e.target.value)}
                                                 placeholder="(00) 00000-0000"
                                                 maxLength={15}
                                          />
                                   </div>
                                   <div className="form-group">
                                          <label>E-mail *</label>
                                          <TextInput
                                                 type="email"
                                                 value={formData.email || ''}
                                                 onChange={(e) => handleDataChange(formData, setFormData, "email", e.target.value)}
                                                 placeholder="email@exemplo.com"
                                                 maxLength={60}
                                          />
                                   </div>
                                   <div className="form-group" style={{ flex: '2 1 200px' }}>
                                          <label>Nome completo da mãe</label>
                                          <TextInput
                                                 value={formData.nome_mae || ''}
                                                 onChange={(e) => handleDataChange(formData, setFormData, "nome_mae", e.target.value)}
                                                 maxLength={60}
                                          />
                                   </div>
                                   <div className="form-group" style={{ flex: '2 1 200px' }}>
                                          <label>Nome completo do pai</label>
                                          <TextInput
                                                 value={formData.nome_pai || ''}
                                                 onChange={(e) => handleDataChange(formData, setFormData, "nome_pai", e.target.value)}
                                                 maxLength={60}
                                          />
                                   </div>
                            </div>
                     </div>
              </div>
       );
}
export default IdentificacaoUsuario;