import './App.css';
import React,{useState} from 'react';

// Use // para comentar nos códigos Reacr e {/**/} para comentar nos códigos HRTML
import Login from './Componentes/login.js';
import Pag1 from './Componentes/Pag1.jsx';
import Pag2 from './Componentes/Pag2.js';
import Pag3 from './Componentes/Pag3.jsx';
import Pag4 from './Componentes/Pag4.js';
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