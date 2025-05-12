    //import './Pag1.js'; 
    function Login(){
        return (
          <form>
            <div class="container">
                <div align="left">
                    <p><img src="./assets/logotipo_sissaude_v01.png" alt="Logotipo Sissaude"/></p>
                    <p>SIS Saúde</p>
                    <p>Cadastro de Dados de sistema de saúde</p>
                </div>
                <div>
                    <input class="login" type="text" placeholder="Matrícula" name="matricula" required/>
                </div>
                <div>
                    <input class="login" type="password" placeholder="Senha" name="senha" required/>
                </div>
                <div>
                    <button type="submit" onclick="myFunction()">Login</button>

                </div>
                <div align="right">
                    <a href="https://stackoverflow.com/questions/47875730/how-can-i-fix-jsx-a11y-anchor-is-valid-when-using-the-link-component-in-react">Esqueci minha senha</a>
                </div>
            </div>
            </form>
        )
    }

    export default Login