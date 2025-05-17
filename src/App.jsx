import "./styles/styleLogin.css";

import "./App.css";
import React, { useState } from "react";

import Login from "./Componentes/login.jsx";
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
      {/* <div>
              <button type="submit" onClick={()=>setLogin("false")}>login</button>
              <button type="submit" onClick={()=>setLogin("true")}>logout</button>
              <p>teste {login}</p>
            </div>
            <div style={{display: "inline-block"}}>
              <button type="submit" className="botoesmenu" onClick= {()=>setCurrentTabIndex(1)} color="#f194ff"></button>
              <button type="submit" className="botoesmenu" onClick= {()=>setCurrentTabIndex(2)}></button>
              <button type="submit" className="botoesmenu" onClick= {()=>setCurrentTabIndex(3)}></button>
              <button type="submit" className="botoesmenu" onClick= {()=>setCurrentTabIndex(4)}></button>
              <p>teste {currentTabIndex}</p>
            </div>

        <Teste  setLogin={setLogin}/> */}
      <Conf />
    </div>
  );
}

export default App;
