import { useState } from "react";
import TextInput from "../../Inputs/TextInput";
import Checkbox from "../../Inputs/Checkbox";
import { FiPlus, FiTrash2, FiEdit, FiX } from "react-icons/fi";
import "../../../styles/styleFamilia.css";

function Familia() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.Individuo && formData.Data_Resid && formData.Renda_Familiar && formData.N_Membros) {
      setDadosTabela([...dadosTabela, formData]);
      setFormData({ Individuo: '', Responsavel: false, Data_Resid: '', Mudou: false, Renda_Familiar: '', N_Membros: '' });
      setModal(false);
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
    <div className="secao-form-container">
      <div className="header-secao">
        <h3 className="titulos-secoes">Familias</h3>
        <button
          type="button"
          onClick={toggleModal}
          className="btn-adicionar"
          aria-label="Adicionar familia"
        >
          <FiPlus />
        </button>
      </div>

      <div>
        <table>
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
            {dadosTabela.map((item, index) => (
              <tr key={index}>
                <td>{item.Individuo}</td>
                <td>{item.Data_Resid}</td>
                <td>{item.N_Membros}</td>
                <td>{item.Renda_Familiar}</td>
                <td>{item.Responsavel ? 'Sim' : 'Não'}</td>
                <td>{item.Mudou ? 'Sim' : 'Não'}</td>
                <td>
                  <button type="button" className="edit-btn">
                    <FiEdit />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(index)}
                    className="btn-remover-simples"
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modal && (
        <div className="overlay">
          <form onSubmit={handleSubmit} className="modal-content">
            <div className="modal-header">
              <h3>Novo Membro Família</h3>
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
                name="Responsavel" // Adicionado o 'name'
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
                name="Mudou" // Adicionado o 'name'
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
                    setFormData({ Individuo: '', Responsavel: false, Data_Resid: '', Mudou: false, Renda_Familiar: '', N_Membros: '' });
                  }
                }}
                className="btn-cancelar"
              >
                Cancelar
              </button>
              <button type="submit" className="btn-salvar">
                Salvar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Familia;
