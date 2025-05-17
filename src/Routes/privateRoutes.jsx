import StandardPage from "../Pages/standardPage";
import Home from "../Pages/home";
import { Route, Routes } from "react-router";
import AddResidence from "../Pages/addResidence";
import ResidenceList from "../Pages/residences";

const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StandardPage />}>
          <Route index element={<Home />} />
          <Route path="adicionar" element={<AddResidence />} />
          <Route path="listar" element={<ResidenceList />} />
          <Route path="editar/:id" element={<p>editar</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default PrivateRoutes;
