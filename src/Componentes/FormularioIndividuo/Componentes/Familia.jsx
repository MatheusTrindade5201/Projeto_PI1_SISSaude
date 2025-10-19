import { useState } from "react";
import { handleDataChange } from "../../../Helpers/handleDataChange";
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
} from "../../../Utils/constants";
import SelectInput from "../../Inputs/SelectInput";
import "../../../styles/styleFormularioIndividuo.css";
import TextInput from "../../Inputs/TextInput";
import Checkbox from "../../Inputs/Checkbox";
import "../../../styles/styleCondMoradia.css";
import { FiPlus, FiTrash2, FiEdit, FiX } from "react-icons/fi";
import "../../../styles/styleAnimaisDomicilio.css";
import "../../../styles/styleFormularioIndividuo.css";
import "../../../styles/styleFamilia.css";
import { BsDisplay } from "react-icons/bs";
import TabelaDinamica from "./tabela.jsx";

function Familia() {
  const[modal,setModal] = useState(false);

  const toggleModal = ()  => {
    setModal(!modal)
  };
  const [formData, setFormData] = useState({
    Individuo: '',
    Responsavel: false,
    Data_Resid: '',
    Mudou: false,
    Renda_Familiar: '',
    N_Membros: ''
  });// Estado para armazenar as linhas da tabela (uma lista de objetos)
    const [dadosTabela, setDadosTabela] = useState([]);
  
    // Função para lidar com a mudança nos campos do formulário
    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData({ ...formData, [name]: value });
    // };
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      const newValue = type === 'checkbox' ? checked : value;
      setFormData({ ...formData, [name]: newValue });
    };

    // Função para lidar com o envio do formulário
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
      // Box do Menu suspenso para adicionar as famílias
      <div className="secao-form-container">
        <div className="header-secao">
          <h3 className="titulos-secoes">Familias</h3>
          {/* Botão de para adicionar família */}
          <button
          type="button"   
          // Atualizar os dados do on click para familia
          onClick={toggleModal}
          className="btn-adicionar"
          // Criar um label para adicionar familia e trocar o texto de animal para familia
          aria-label="Adicionar animal"
          >
            {/* Ícone de + na imagem */}
            <FiPlus />
          </button>
        </div>
        {/* Menu suspenso para adicionar as famílias*/}

        <div className="">
    <div>
      {/* Tabela para exibir os dados */}
      <table>
        <thead>
          <tr>
            <th>Indivíduo</th>
            <th>Data de Residência</th>
            <th>Nº Membros familia</th>
            <th>Renda Familiar (9M)</th>
            <th>Responável</th>
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
              <td>{item.Responsavel}</td>
              <td><button
          type="button"   
          // Atualizar os dados do on click para familia
          onClick={() =>
            setFormData({
              ...formData,
              animais: [...formData.animais, { animal: "", quantidade: 0 }],
            })
          }
          className="edit-btn" // Criar um label para adicionar familia e trocar o texto de animal para familia
          aria-label="Adicionar animal"
          >
            <FiEdit /> {/* Ícone de + na imagem */}
          </button>
          <button
          type="button"   
          // Atualizar os dados do on click para familia
          onClick={() => handleDelete(index)}
          className="btn-remover-simples"
          // Criar um label para adicionar familia e trocar o texto de animal para familia
          aria-label="Adicionar animal"
          >
            {/* Ícone de + na imagem */}
            <FiTrash2 />
          </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

          {/* Se modal for TRUE, então ele exibe o que estiver abaixo dentro de parenteses */}
   
    
    {modal && (
      <form onSubmit={handleSubmit} className="overlay"> 

        <div style={{ display: 'flex' }}>
          <h3>Novo Membro Família</h3>
          <button
            onClick={toggleModal}>
            <FiX />
          </button>
        </div>
        <TextInput
                id="Responsavel"
                label="Indivíduo"
                value={formData.Individuo}
                placeholder="Buscar pelo nome no CNIS"  
                onChange={handleChange}
                name="Individuo"
                type="text"
        />
        <div>
          <Checkbox
            id="Responsavel"
            label="Responsável?"
            // checked={formData.Responsavel}
            // name="Responsavel"
            // onChange={handleChange}
            />
        </div>

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
              label="Mudou-se??"
              // checked={formData.Mudou}
              // onChange={handleChange}
              // name="Responsavel"
            />

        <TextInput
                id="Renda_Familiar"
                label="Renda Familiar (SM)"
                value={formData.Renda_Familiar}
                placeholder="0.000.000 R$"
                name="Renda_Familiar"
                onChange={handleChange}
                type="number"
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
        <div className="" style={{ display: 'flex' }}>
          <button
          type="button"   
          // Atualizar os dados do on click para familia
          onClick={()  => {
            if(window.confirm("Tem certeza que deseja perder as informações?"))
            setModal(!modal)
          }}
          className="btn-adicionar"
          // Criar um label para adicionar familia e trocar o texto de animal para familia
          aria-label="Adicionar animal"
          >
            {/* Ícone de + na imagem */}
          Cancelar
          </button>
          <button
          type="submit"   
          // Atualizar os dados do on click para familia
          // onClick={() =>
          //   setFormData({
          //     ...formData,
          //     animais: [...formData.animais, { animal: "", quantidade: 0 }],
          //   })
          // }
          className="btn-adicionar"
          // Criar um label para adicionar familia e trocar o texto de animal para familia
          // aria-label="Adicionar animal"
          >
            {/* Ícone de + na imagem */}
          Salvar
          </button>
      </div>
      </form>
    )
    }
        </div>
      </div>
  );
}

export default Familia;
