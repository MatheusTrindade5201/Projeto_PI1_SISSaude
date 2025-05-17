import "./App.css";
import React, { useState } from "react";

import Login from "./Pages/login.jsx";
import Pag1 from "./Componentes/Tabs/Tab1.jsx";
import Pag2 from "./Componentes/Tabs/Tab2.jsx";
import Pag3 from "./Componentes/Tabs/Tab3.jsx";
import Pag4 from "./Componentes/Tabs/Tab4.jsx";
import Cabecalho from "./Componentes/Cabecalho.jsx";
import Rodape from "./Componentes/Rodape.jsx";
import TabsWrapper from "./Componentes/Tabs/TabsWrapper.jsx";

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
      <button type="submit" onClick={() => setLogin("true")}>
        logout
      </button>
    </div>
  );
}

export default App;
