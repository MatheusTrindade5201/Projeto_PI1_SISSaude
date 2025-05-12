import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import './styleLogin.css'

// Importando os componentes que o Edgard criou
import Login from './Componentes/login.jsx';
//import Pag1 from './Componentes/Pag1.js';
//import Pag2 from './Componentes/Pag2.js';
//import Pag3 from './Componentes/Pag3.js';
//import Pag4 from './Componentes/Pag4.js';


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
