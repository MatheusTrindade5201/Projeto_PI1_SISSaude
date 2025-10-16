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


function Familia({ formData, setFormData }) {
  const[modal,setModal] = useState(false);

  const toggleModal = ()  => {
    setModal(!modal)
  }

  return (
      // Box do Menu suspenso para adicionar as famílias
      <div className="secao-form-container">
        <div className="header-secao">
          <h3 className="titulos-secoes">Familias</h3>
          {/* Botão de para adicionar família */}
          <button
          type="button"   
          // Atualizar os dados do on click para familia
          onClick={()  => {
              setModal(!modal)
              }
          }
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

          {/* Se modal for TRUE, então ele exibe o que estiver abaixo dentro de parenteses */}
    {modal && (
      <div className="overlay">
        <div>
          <h3>Novo Membro Família</h3>
          <button
            onClick={toggleModal}>
            <FiX />
          </button>
        </div>
        <TextInput
                id=""
                label="Indivíduo"
                value=""
                placeholder="Buscar pelo nome no CNIS"  
                onChange={(e) =>
                  handleDataChange(
                    formData,
                    setFormData,
                    "animais",
                    e.target.value,
                    index,
                    "quantidade"
                  )
                }
        />
        <div>
          <Checkbox
            id="energia-eletrica"
            label="Responsável?"
            />
        </div>

                <TextInput
                id=""
                label="Data Residência"
                value=""
                placeholder="12/10/2024"
                onChange={(e) =>
                  handleDataChange(
                    formData,
                    setFormData,
                    "animais",
                    e.target.value,
                    index,
                    "quantidade"
                  )
                }
        />
            <Checkbox
            id="energia-eletrica"
            label="Mudou-se??"
            />

        <TextInput
                id=""
                label="Renda Familiar (SM)"
                value=""
                placeholder="0.000.000 R$"
                onChange={(e) =>
                  handleDataChange(
                    formData,
                    setFormData,
                    "animais",
                    e.target.value,
                    index,
                    "quantidade"
                  )
                }
        />
        <TextInput
                id=""
                label="N Membros Familia"
                value=""
                placeholder="00"
                onChange={(e) =>
                  handleDataChange(
                    formData,
                    setFormData,
                    "animais",
                    e.target.value,
                    index,
                    "quantidade"
                  )
                }
        />
      <div className="">
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
          type="button"   
          // Atualizar os dados do on click para familia
          onClick={() =>
            setFormData({
              ...formData,
              animais: [...formData.animais, { animal: "", quantidade: 0 }],
            })
          }
          className="btn-adicionar"
          // Criar um label para adicionar familia e trocar o texto de animal para familia
          aria-label="Adicionar animal"
          >
            {/* Ícone de + na imagem */}
          Salvar
          </button>
      </div>
      </div>
    )
    }
        </div>
        <div>
             {/* Usando tabelas React --> https://v4.mui.com/pt/components/tables/ */}
      <table>
        <thead>
          <td>Nome</td> 
          <td>Data de Residência</td> 
          <td>Nº Membros familia</td> 
          <td>Renda Familiar (9M)</td> 
          <td>Responável</td> 
          <td>Opções</td> 
        </thead>
        <tbody>
        <tr>
          <td>Célula 1</td> 
          <td>Célula 2</td>
          <td>Célula 1</td> 
          <td>Célula 2</td>
          <td>Célula 1</td> 
          <td><button
          type="button"   
          // Atualizar os dados do on click para familia
          onClick={() =>
            setFormData({
              ...formData,
              animais: [...formData.animais, { animal: "", quantidade: 0 }],
            })
          }
          className="edit-btn"
          // Criar um label para adicionar familia e trocar o texto de animal para familia
          aria-label="Adicionar animal"
          >
            {/* Ícone de + na imagem */}
            <FiEdit />
          </button>
          <button
          type="button"   
          // Atualizar os dados do on click para familia
          onClick={() =>
            window.confirm("Tem certeza que deseja deletar esta família?")
          }
          className="btn-remover-simples"
          // Criar um label para adicionar familia e trocar o texto de animal para familia
          aria-label="Adicionar animal"
          >
            {/* Ícone de + na imagem */}
            <FiTrash2 />
          </button>
          </td>
        </tr>
        <tr>
          <td>Célula 3</td>
          <td>Célula 4</td>
          <td>Célula 1</td> 
          <td>Célula 2</td>
          <td>Célula 1</td> 
          <td><button
          type="button"   
          // Atualizar os dados do on click para familia
          onClick={() =>
            setFormData({
              ...formData,
              animais: [...formData.animais, { animal: "", quantidade: 0 }],
            })
          }
          className="edit-btn"
          // Criar um label para adicionar familia e trocar o texto de animal para familia
          aria-label="Adicionar animal"
          >
            {/* Ícone de + na imagem */}
            <FiEdit />
          </button>
          <button
          type="button"   
          // Atualizar os dados do on click para familia
          onClick={() =>
            window.confirm("Tem certeza que deseja deletar esta família?")
          }
          className="btn-remover-simples"
          // Criar um label para adicionar familia e trocar o texto de animal para familia
          aria-label="Adicionar animal"
          >
            {/* Ícone de + na imagem */}
            <FiTrash2 />
          </button>
          </td>
        </tr>
        </tbody>
      </table>
        </div>
      </div>
  );
}

export default Familia;
