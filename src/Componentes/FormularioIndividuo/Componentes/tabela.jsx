import React, { useState } from 'react';

function TabelaDinamica(modal) {

  modal = modal;

  // Estado para armazenar os dados do formulário com chaves corrigidas
  const [formData, setFormData] = useState({
    Individuo: '',
    Responsavel: '',
    Data_Resid: '',
    Mudou: '',
    Renda_Familiar: '',
    N_Membros: ''
  });

  // Estado para armazenar as linhas da tabela
  const [dadosTabela, setDadosTabela] = useState([]);

  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que a página seja recarregada
    if (formData.Individuo && formData.Responsavel && formData.Data_Resid && formData.Mudou && formData.Renda_Familiar && formData.N_Membros) {
      // Adiciona o novo objeto ao array de dados da tabela
      setDadosTabela([...dadosTabela, formData]);
      // Limpa os campos do formulário após o envio
      setFormData({
        Individuo: '',
        Responsavel: '',
        Data_Resid: '',
        Mudou: '',
        Renda_Familiar: '',
        N_Membros: ''
      });
    }
  };

  return (
    <div>
      {/* Formulário para adicionar novos dados */}
      {modal && (
      <form onSubmit={handleSubmit}>
        {/* CORREÇÃO 1: 'name' do input corresponde à chave do estado */}
        <input
          type="text"
          name="Individuo"
          placeholder="Individuo"
          value={formData.Individuo}
          onChange={handleChange}
        />
        {/* CORREÇÃO 2: Adicionei os inputs que faltavam */}
        <input
          type="text"
          name="Responsavel"
          placeholder="Responsavel"
          value={formData.Responsavel}
          onChange={handleChange}
        />
        <input
          type="date" // Tipo 'date' é mais apropriado
          name="Data_Resid"
          placeholder="Data de Residência"
          value={formData.Data_Resid}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Mudou"
          placeholder="Mudou? (Sim/Não)"
          value={formData.Mudou}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Renda_Familiar"
          placeholder="Renda Familiar"
          value={formData.Renda_Familiar}
          onChange={handleChange}
        />
        <input
          type="number" // Tipo 'number' é mais apropriado
          name="N_Membros"
          placeholder="Nº Membros"
          value={formData.N_Membros}
          onChange={handleChange}
        />
        <button type="submit">Adicionar à Tabela</button>
      </form>)}

      {/* Tabela para exibir os dados */}
      <table>
        <thead>
          <tr>
            <th>Individuo</th>
            <th>Data de Residência</th>
            <th>Nº Membros familia</th>
            <th>Renda Familiar (9M)</th>
            <th>Responsável</th>
            <th>Mudou?</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapeia o array de dados para renderizar as linhas */}
          {dadosTabela.map((item, index) => (
            <tr key={index}>
              {/* CORREÇÃO 3: Renderiza todas as células com os dados corretos */}
              <td>{item.Individuo}</td>
              <td>{item.Data_Resid}</td>
              <td>{item.N_Membros}</td>
              <td>{item.Renda_Familiar}</td>
              <td>{item.Responsavel}</td>
              <td>{item.Mudou}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabelaDinamica;
