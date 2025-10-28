import { useState } from "react";
import { handleDataChange } from "../../../../Helpers/handleDataChange.js";
import {
  abastecimentoAgua,
  acessoDomicilio,
  aguaConsumo,
  destinoLixo,
  formaEscoamento,
  localizacao,
  materialPredominante,
  posseTerra,
  situacaoMoradia,
  tipoDomicilio,
} from "../../../../Utils/constants.js";
import SelectInput from "../../../Inputs/SelectInput/index.jsx";
import "../../../styles/styleFormularioIndividuo.css";
import TextInput from "../../../Inputs/TextInput/index.jsx";
import Checkbox from "../../../Inputs/Checkbox/index.jsx";
import "../../../styles/styleCondMoradia.css";
import { FiPlus, FiTrash2, FiEdit, FiX } from "react-icons/fi";
import "../../../styles/styleAnimaisDomicilio.css";
import "../../../styles/styleFormularioIndividuo.css";
import "../../../styles/styleFamilia.css";
import { BsDisplay } from "react-icons/bs";
import TabelaDinamica from "../tabela.jsx";



import { useState } from "react";
import TextInput from "../../../Inputs/TextInput/index.jsx";
import Checkbox from "../../../Inputs/Checkbox/index.jsx";
import { FiPlus, FiTrash2, FiEdit, FiX } from "react-icons/fi";
import "../../../styles/styleFamilia.css";

function Familia() {
  const [modal, setModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const toggleModal = () => {
    setModal(!modal);
    if (!modal) {
      // Limpa o formulário e reseta o estado de edição ao abrir o modal
      setFormData({ Individuo: '', Responsavel: false, Data_Resid: '', Mudou: false, Renda_Familiar: '', N_Membros: '' });
      setIsEditing(false);
      setEditingIndex(null);
    }
  };

  const [formData, setFormData] = useState({
    Individuo: '',
    Responsavel: false,
    Data_Resid: '',
    Mudou: false,
    Renda_Familiar: '',
    N_Membros: ''
  });

  const [dadosTabela, setDadosTabela] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleEdit = (index) => {
    const itemToEdit = dadosTabela[index];
    setFormData(itemToEdit);
    setEditingIndex(index);
    setIsEditing(true);
    setModal(true);
  };

  const handleAddOrUpdate = (e) => {
    e.preventDefault();
    if (formData.Individuo && formData.Data_Resid && formData.Renda_Familiar && formData.N_Membros) {
      if (isEditing) {
        // Atualiza item existente
        const novosDadosTabela = [...dadosTabela];
        novosDadosTabela[editingIndex] = formData;
        setDadosTabela(novosDadosTabela);
      } else {
        // Adiciona novo item
        setDadosTabela([...dadosTabela, formData]);
      }
      setModal(false);
      setFormData({ Individuo: '', Responsavel: false, Data_Resid: '', Mudou: false, Renda_Familiar: '', N_Membros: '' });
      setIsEditing(false);
      setEditingIndex(null);
    } else {
      alert('Preencha todos os campos obrigatórios.');
    }
  };

  const handleDelete = (index) => {
    if (window.confirm("Tem certeza que deseja deletar esta família?")) {
      const novosDadosTabela = dadosTabela.filter((_, i) => i !== index);
      setDadosTabela(novosDadosTabela);
    }
  };

  return (
    // Box do Menu suspenso para adicionar as famílias
    <div className="secao-form-container">
      <div className="header-secao">
        <h3 className="titulos-secoes">Familias</h3>
        <button
          type="button"
          // Atualizar os dados do on click para familia
          onClick={toggleModal}
          className="btn-adicionar"
          // Criar um label para adicionar familia e trocar o texto de animal para familia
          aria-label="Adicionar familia"
        > {/* Botão de para adicionar família */}
          <FiPlus />{/* Ícone de + na imagem */}
        </button>
      </div>

      <div>
        <table> {/* Tabela para exibir os dados */}
          <thead>
            <tr>
              <th>Indivíduo</th>
              <th>Data de Residência</th>
              <th>Nº Membros familia</th>
              <th>Renda Familiar (9M)</th>
              <th>Responsável</th>
              <th>Mudou?</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapeia o array de dados para renderizar as linhas */}
            {dadosTabela.map((item, index) => (
              <tr key={index}>
                <td>{item.Individuo}</td>
                <td>{item.Data_Resid}</td>
                <td>{item.N_Membros}</td>
                <td>{item.Renda_Familiar}</td>
                <td>{item.Responsavel ? 'Sim' : 'Não'}</td>
                <td>{item.Mudou ? 'Sim' : 'Não'}</td>
                <td>
                  {/* chama a função handleEdit com o index */}
                  <button type="button"
                  onClick={() =>
                  handleEdit(index)}
                  className="edit-btn" // Criar um label para adicionar familia e trocar o texto de animal para familia
                  > 
                    <FiEdit />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(index)}
                    className="btn-remover-simples"
                    // Criar um label para adicionar familia e trocar o texto de animal para familia
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        
      {/* Se modal for TRUE, então ele exibe o que estiver abaixo dentro de parenteses */}
      {modal && (
        <div className="overlay">
          <form onSubmit={handleAddOrUpdate} className="modal-content">
            <div className="modal-header">
              <h3>{isEditing ? 'Editar Membro Família' : 'Novo Membro Família'}</h3>
              <button type="button" onClick={toggleModal}>
                <FiX />
              </button>
            </div>
            <div className="modal-body">
              <TextInput
                id="Individuo"
                label="Indivíduo"
                value={formData.Individuo}
                placeholder="Buscar pelo nome no CNIS"
                onChange={handleChange}
                name="Individuo"
              />
              <Checkbox
                id="Responsavel"
                label="Responsável?"
                checked={formData.Responsavel}
                name="Responsavel"
                onChange={handleChange}
              />
              <TextInput
                id="Data_Resid"
                label="Data Residência"
                value={formData.Data_Resid}
                placeholder="DD/MM/AAAA"
                name="Data_Resid"
                onChange={handleChange}
                type="date"
              />
              <Checkbox
                id="Mudou"
                label="Mudou-se?"
                checked={formData.Mudou}
                name="Mudou"
                onChange={handleChange}
              />
              <TextInput
                id="Renda_Familiar"
                label="Renda Familiar (SM)"
                value={formData.Renda_Familiar}
                placeholder="0.000.000 R$"
                name="Renda_Familiar"
                onChange={handleChange}
              />
              <TextInput
                id="N_Membros"
                label="N Membros Familia"
                value={formData.N_Membros}
                placeholder="00"
                name="N_Membros"
                onChange={handleChange}
                type="number"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={() => {
                  if (window.confirm("Tem certeza que deseja perder as informações?")) {
                    setModal(false);
                    setIsEditing(false);
                    setEditingIndex(null);
                    setFormData({ Individuo: '', Responsavel: false, Data_Resid: '', Mudou: false, Renda_Familiar: '', N_Membros: '' });
                  }
                }}
                className="btn-cancelar"
              >
                Cancelar
              </button>
              <button type="submit" className="btn-salvar">
                {isEditing ? 'Atualizar' : 'Salvar'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Familia;
