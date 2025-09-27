import "./styles/styleLogin.css";

import "./App.css";
import "./reset.css";
import React, { useState } from "react";

import Login from "./Pages/login.jsx";
import Cabecalho from "./Componentes/Cabecalho.jsx";
import Rodape from "./Componentes/Rodape.jsx";
import TabsWrapper from "./Componentes/FormularioIndividuo/index.tsx.jsx";

function App() {
  let [currentTabIndex, setCurrentTabIndex] = useState(0);
  let [login, setLogin] = useState("true");

  function Conf() {
    if (login === "true")
      return (
        <>
          <Login setLogin={setLogin} />
        </>
      );
    if (login === "false")
      return (
        <>
          {/* <Rodape/> */}
          <div>
            <Cabecalho />
            <TabsWrapper currentTabIndex={currentTabIndex} />
            <Rodape setNumber={setCurrentTabIndex} />
          </div>
        </>
      );
  }

  return (
    <div className="App">
      <Conf />
    </div>
  );
}

export default App;
