import React from "react";
import "../styles/styleHome.css";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Gerenciar Domicílios</h1>
      <div className="button-group">
        <NavLink className="home-button" to={"/adicionar"}>
          Adicionar Domicílio
        </NavLink>
        <NavLink className="home-button secondary" to={"/listar"}>
          Ver Domicílios
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
