//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import './styles/styleLogin.css'

// Importando os componentes que o Edgard criou
//import Login from './Componentes/login.jsx';
//import Pag1 from './Componentes/Pag1.js';
//import Pag2 from './Componentes/Pag2.js';
//import Pag3 from './Componentes/Pag3.js';
//import Pag4 from './Componentes/Pag4.js';


import './App.css';
import React,{useState} from 'react';

// Use // para comentar nos códigos Reacr e {/**/} para comentar nos códigos HRTML
import Login from './Componentes/login.jsx';
import Pag1 from './Componentes/Pag1.jsx';
import Pag2 from './Componentes/Pag2.jsx';
import Pag3 from './Componentes/Pag3.jsx';
import Pag4 from './Componentes/Pag4.jsx';
import Teste from './Componentes/teste.jsx';


function App() {  
    let [number,setNumber] = useState(1);
    let [login,setLogin] = useState("true");

    function Conf() {
      
      if (login === "true")
        return <div> <Login setLogin={setLogin}/>
          
        </div>
      if (login === "false")

        var b = number
  
        if (b===1)
          return <div><Pag1/></div>
        if (b===2)
          return <div><Pag2/></div>
        if (b===3)
          return <div><Pag3/></div>
        if (b===4)
          return <div><Pag4/></div>

    }
    
    return (
      <div className="App">
            <div>
              <button type="submit" onClick={()=>setLogin("false")}>login</button>
              <button type="submit" onClick={()=>setLogin("true")}>logout</button>
              <p>teste {login}</p>
            </div>
            <div style={{display: "inline-block"}}>
              <button type="submit" className="botoesmenu" onClick= {()=>setNumber(1)} color="#f194ff"></button>
              <button type="submit" className="botoesmenu" onClick= {()=>setNumber(2)}></button>
              <button type="submit" className="botoesmenu" onClick= {()=>setNumber(3)}></button>
              <button type="submit" className="botoesmenu" onClick= {()=>setNumber(4)}></button>
              <p>teste {number}</p>
          </div>
        <Teste  setLogin={setLogin}/>
        <Conf/>

      </div>  
  );  
}

export default App;


/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>SIS Saúde - Sistema de Cadastramento de Dados em Saúde</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR, Raphael
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/