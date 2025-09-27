import React from "react";
import { NavLink } from "react-router";
import "../styles/styleHome.css";
import { FiPlus } from "react-icons/fi";
import { FiList } from "react-icons/fi";

const Home = () => {
  return (
    <main className="home-container">
      {/* Cadastro Domiciliar */}
      <section className="home-section" aria-labelledby="domicilios-title">
        <header className="home-section-header">Cadastro Domiciliar</header>
        <h2 id="domicilios-title" className="home-title">
          Gerenciar Domicílios
        </h2>
        <div className="button-group">
          <NavLink className="home-button primary" to="/domicilios/adicionar">
            Adicionar Domicílio <FiPlus />
          </NavLink>
          <NavLink className="home-button secondary" to="/domicilios/listar">
            Ver Domicílios <FiList />
          </NavLink>
        </div>
      </section>

      {/* Cadastro Individual */}
      <section className="home-section" aria-labelledby="cidadaos-title">
        <header className="home-section-header">Cadastro Individual</header>
        <h2 id="cidadaos-title" className="home-title">
          Gerenciar Cidadãos
        </h2>
        <div className="button-group">
          <NavLink className="home-button primary" to="/cidadaos/adicionar">
            Adicionar Cidadão <FiPlus />
          </NavLink>
          <NavLink className="home-button secondary" to="/cidadaos/listar">
            Ver Cidadãos <FiList />
          </NavLink>
        </div>
      </section>
    </main>
  );
};

export default Home;
