import { useEffect } from "react";
import TabsWrapper from "../Componentes/FormularioIndividuo/index.tsx";
import { useGetResidences } from "../Hooks/useGetResidences";
import { useParams } from "react-router";

function UpdateResidence() {
  const { id } = useParams();

  const { fetchResidenceById, loading, residence } = useGetResidences();

  useEffect(() => {
    fetchResidenceById(id);
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="loader">Carregando...</div>
      ) : !residence ? (
        <div className="loader">Nenhum domicílio encontrado.</div>
      ) : (
        <div>
          <TabsWrapper
            residence={residence}
            fetchResidence={fetchResidenceById}
          />
        </div>
      )}
    </>
  );
}

export default UpdateResidence;
