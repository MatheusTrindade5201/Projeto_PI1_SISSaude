import { Route, Routes } from "react-router";
import Login from "../Pages/login";

const CommonRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default CommonRoutes;
