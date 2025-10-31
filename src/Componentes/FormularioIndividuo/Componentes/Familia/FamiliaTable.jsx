import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function FamiliaTable({ dados, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Indivíduo</th>
          <th>Data de Residência</th>
          <th>Nº Membros</th>
          <th>Renda Familiar (SM)</th>
          <th>Responsável</th>
          <th>Mudou?</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item, index) => (
          <tr key={index}>
            <td>{item.nome}</td>
            <td>{item.data_residencia}</td>
            <td>{item.n_membros_familia}</td>
            <td>{item.renda_familia_salario_minimos}</td>
            <td>{item.responsavel ? "Sim" : "Não"}</td>
            <td>{item.mudou ? "Sim" : "Não"}</td>
            <td>
              <button
                type="button"
                className="edit-btn"
                onClick={() => onEdit(index)}
              >
                <FiEdit />
              </button>
              <button
                type="button"
                className="btn-remover-simples"
                onClick={() => onDelete(index)}
              >
                <FiTrash2 />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
