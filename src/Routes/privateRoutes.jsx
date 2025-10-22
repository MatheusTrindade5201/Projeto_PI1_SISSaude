import StandardPage from "../Pages/standardPage";
import Home from "../Pages/home";
import { Route, Routes } from "react-router";
import AddResidence from "../Pages/addResidence";
import ResidenceList from "../Pages/residences";
import UpdateResidence from "../Pages/updateResidence";
import AddCidadao from "../Pages/addCidadao";
import CidadaoList from "../Pages/cidadaos";
import UpdateCidadao from "../Pages/updateCidadao";

const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StandardPage />}>
          <Route index element={<Home />} />
          <Route path="domicilios/adicionar" element={<AddResidence />} />
          <Route path="domicilios/listar" element={<ResidenceList />} />
          <Route path="domicilios/editar/:id" element={<UpdateResidence />} />

          <Route path="cidadaos/adicionar" element={<AddCidadao />} />
          <Route path="cidadaos/listar" element={<CidadaoList />} />
          <Route path="cidadaos/editar/:id" element={<UpdateCidadao />} />
        </Route>
      </Routes>
    </>
  );
};

export default PrivateRoutes;