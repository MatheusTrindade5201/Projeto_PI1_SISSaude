import "./styles/styleLogin.css";

import "./App.css";
import { useAuth } from "./Context/AuthContext.jsx";
import PrivateRoutes from "./Routes/privateRoutes.jsx";
import CommonRoutes from "./Routes/commonRoutes.jsx";
import { BrowserRouter } from "react-router";

function AppRoutes() {
  const { isAuthenticated } = useAuth();
  return (
    <BrowserRouter>
      {isAuthenticated ? <PrivateRoutes /> : <CommonRoutes />}
    </BrowserRouter>
  );
}

export default AppRoutes;
