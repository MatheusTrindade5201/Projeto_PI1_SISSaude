import { Route, Routes } from "react-router";
import PortalHome from "../Pages/Portal/PortalHome";
import PortalRegister from "../Pages/Portal/PortalRegister";
import PortalLogin from "../Pages/Portal/PortalLogin";
import PortalVerify from "../Pages/Portal/PortalVerify";
import PortalKeys from "../Pages/Portal/PortalKeys";
import PortalDocs from "../Pages/Portal/PortalDocs";

const PortalRoutes = () => {
  return (
    <Routes>
      <Route path="/portal" element={<PortalHome />} />
      <Route path="/portal/registro" element={<PortalRegister />} />
      <Route path="/portal/login" element={<PortalLogin />} />
      <Route path="/portal/verify" element={<PortalVerify />} />
      <Route path="/portal/chaves" element={<PortalKeys />} />
      <Route path="/portal/docs" element={<PortalDocs />} />
    </Routes>
  );
};

export default PortalRoutes;
