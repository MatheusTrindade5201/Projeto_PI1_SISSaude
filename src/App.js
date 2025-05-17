import "./App.css";
import React, { useState } from "react";

import Login from "./Componentes/login.js";
import Pag1 from "./Componentes/Tabs/Tab1.jsx";
import Pag2 from "./Componentes/Tabs/Tab2.jsx";
import Pag3 from "./Componentes/Tabs/Tab3.jsx";
import Pag4 from "./Componentes/Tabs/Tab4.jsx";
import Cabecalho from "./Componentes/Cabecalho.jsx";
import Rodape from "./Componentes/Rodape.jsx";

function App() {
  let [number, setNumber] = useState(1);
  let [login, setLogin] = useState("true");

  function Conf2() {
    var b = number;
    if (b === 1)
      return (
        <>
          <Pag1 />
        </>
      );
    if (b === 2)
      return (
        <>
          <Pag2 />
        </>
      );
    if (b === 3)
      return (
        <>
          <Pag3 />
        </>
      );
    if (b === 4)
      return (
        <>
          <Pag4 />
        </>
      );
  }
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
            <Conf2 />
            <Rodape setNumber={setNumber} />
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
