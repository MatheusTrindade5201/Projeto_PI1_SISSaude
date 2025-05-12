    import react, {useState} from 'react';
    import './Pag1.jsx'; 

    function Login({setLogin}){
        
        return (
          <form>
            <div class="container">
                <div align="left">
                    <p>SIS Saúde2</p>
                    <p>Cadastro de Dados de sistema de saúde</p>
                </div>
                <div>
                    <input class="login" type="text" placeholder="Matrícula" name="matricula" required/>
                </div>
                <div>
                    <input class="login" type="password" placeholder="Senha" name="senha" required/>
                </div>
                
                <div>
                    <button type="submit" onClick={(e)=>setLogin("false")}>login</button>

                </div>
                <div align="right">
                    <a href="https://stackoverflow.com/questions/47875730/how-can-i-fix-jsx-a11y-anchor-is-valid-when-using-the-link-component-in-react">Esqueci minha senha</a>
                </div>
            </div>
            </form>
        )
    }

    export default Login