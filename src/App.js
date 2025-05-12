import './App.css';
import React,{useState} from 'react';

// Use // para comentar nos códigos Reacr e {/**/} para comentar nos códigos HRTML
// import cabecalho from './Componentes/CabecalhoRodape.js';
// import Rodape from './Componentes/CabecalhoRodape.js';

import Login from './Componentes/login.js';
import Pag1 from './Componentes/Pag1.js';
import Pag2 from './Componentes/Pag2.js';
import Pag3 from './Componentes/Pag3.js';
import Pag4 from './Componentes/Pag4.js';
//import Teste from './Componentes/teste.js';
import Cabecalho from './Componentes/CabecalhoRodape.js';


function App() {  
    let [number,setNumber] = useState(1);
    let [login,setLogin] = useState("true");

    function Rodape(){
      return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' } }>
        <div>
          <button type="submit" className="botoesmenu" onClick= {()=>setNumber(1)} color="#f194ff"></button><br/>
          <label>1</label>
        </div>
        <div>
          <button type="submit" className="botoesmenu" onClick= {()=>setNumber(2)}></button><br/>
          <label>2</label>
        </div>
        <div> 
          <button type="submit" className="botoesmenu" onClick= {()=>setNumber(3)}></button><br/>
          <label>3</label>
        </div>
        <div>
          <button type="submit" className="botoesmenu" onClick= {()=>setNumber(4)}></button><br/>
          <label>4</label>
        </div>
       </div>
  }

    function Conf2(){
      var b = number
      if (b===1)
        return <><Pag1/></>
      if (b===2)
        return <><Pag2/></>
      if (b===3)
        return <><Pag3/></>
      if (b===4)
        return <><Pag4/></>
    }
    function Conf() {
      
      if (login === "true")
        return <>
          <Login setLogin={setLogin}/>
        </>
      if (login === "false")
          return <>
            {/* <Rodape/> */}
            <div>
              <Cabecalho/>
              <Conf2/>
              <Rodape/>
            </div>
          </>   

    }
    
    return (
      <div className="App">
            {/* <div>
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

        <Teste  setLogin={setLogin}/> */}
        <Conf/>
        <button type="submit" onClick={()=>setLogin("true")}>logout</button>

      </div>  
  );  
}

export default App;