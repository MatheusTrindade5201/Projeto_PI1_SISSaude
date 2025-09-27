import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/styleLogin.css";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { AlertProvider } from "./Context/AlertContext.jsx";
import AppRoutes from "./routes.jsx";
import UserWayWidget from "./Componentes/UserWay/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AlertProvider>
      <AuthProvider>
        <UserWayWidget />
        <AppRoutes />
      </AuthProvider>
    </AlertProvider>
  </StrictMode>
);
