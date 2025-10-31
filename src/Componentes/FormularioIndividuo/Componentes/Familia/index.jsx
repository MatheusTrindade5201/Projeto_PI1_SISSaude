import { useState } from "react";
import FamiliaModal from "./FamiliaModal";
import FamiliaTable from "./FamiliaTable";
import { FiPlus } from "react-icons/fi";
import "../../../../styles/styleFamilia.css";
import { deleteCidadaoDomicilio } from "../../../../services/cidadao";
import { useAlert } from "../../../../Context/AlertContext";

export default function Familia({ residence, fetchResidence }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentData, setCurrentData] = useState(null);

  const handleAdd = () => {
    setCurrentData(null);
    setIsEditing(false);
    setModalOpen(true);
  };

  const handleEdit = (index) => {
    setCurrentData(residence.individuos[index]);
    setIsEditing(true);
    setModalOpen(true);
  };

  const { handleSuccess } = useAlert();

  const handleDelete = async (index) => {
    if (window.confirm("Tem certeza que deseja excluir este registro?")) {
      const individuo = residence.individuos[index];

      if (individuo) {
        await deleteCidadaoDomicilio(individuo.individuo_id, residence.id);
        await fetchResidence(residence.id);

        handleSuccess("Familia desassociada com sucesso!");
      }
    }
  };

  return (
    <div className="secao-form-container">
      <div className="header-secao">
        <h3 className="titulos-secoes">Famílias</h3>
        <button className="btn-adicionar" onClick={handleAdd}>
          <FiPlus />
        </button>
      </div>

      <FamiliaTable
        dados={residence.individuos}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {modalOpen && (
        <FamiliaModal
          isEditing={isEditing}
          initialData={currentData}
          onClose={() => setModalOpen(false)}
          residence={residence}
          fetchResidence={fetchResidence}
        />
      )}
    </div>
  );
}
