    import '../styles/styleLogin.css';
    //import './Pag1.js'; 
    function Login({setLogin}){
        return (
           <form className = "form">
            <div class="container">
                <div align="left">
                    <p><img src="./src/assets/logotipo_sissaude_v01.png" alt="Logotipo Sissaude" width="180"/></p>
                    <p id="paragraphLogin">Cadastro de dados de Sistema de Saúde</p>
                </div>
                <div>
                    <input class="login" type="text" placeholder="Matrícula" name="matricula" required/>
                </div>
                <div>
                    <input class="login" type="password" placeholder="Senha" name="senha" required/>
                </div>
                <div align="right">    
                    <button className="buttonLogin" type="submit" onClick={(e)=>setLogin("false")}>Login</button>
                </div>
                <div align="right">
                    <a href="https://stackoverflow.com/questions/47875730/how-can-i-fix-jsx-a11y-anchor-is-valid-when-using-the-link-component-in-react">Esqueci minha senha</a>
                </div>
            </div>
            </form>
        )
    }

    export default Login