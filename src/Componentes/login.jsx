    import react, {useState} from 'react';
    import './Pag1.jsx'; 
    import '../styles/styleLogin.css';
    //import Alert from '@mui/material/Alert';


    function Login({setLogin}){ 
        const [Matricula, setMatricula] = useState('');
        const handleMatriculaChange = (event) => {
            setMatricula(event.target.value);
        };
        const [senha, setSenhaValue] = useState('');
        const handleSenhaChange = (event) => {
          setSenhaValue(event.target.value);
        };
        function ValidacaoLogin(){
            if (senha==="123"    && Matricula==="funcionario@sissaude.gov.br"  ) 
                return (event)=>setLogin("false")
            else
                return (event) => {alert("Senha incorreta")}
        }
        return (
          <form className = "form">
            <div class="container">
                <div align="left">
                    <p><img src="./src/assets/logotipo_sissaude_v01.png" alt="Logotipo Sissaude" width="180"/></p>
                    <p id="paragraphLogin">Cadastro de dados de Sistema de Saúde</p>
                </div>
                <div> <input class="login"
                        type="text"
                        placeholder="Matrícula"
                        name="matricula"
                        required
                        value={Matricula}
                        onChange={handleMatriculaChange}
                    />
                </div>
                <div> <input class="login"
                    type="password"
                    placeholder="Senha"
                    name="senha"
                    required
                    value={senha}
                    onChange={handleSenhaChange}
                    />
                </div>
                <div align="right">
                    <button
                        className="buttonLogin"
                        type="submit"
                        onClick={ValidacaoLogin(Matricula,senha)}
                        >Login
                    </button>
                </div>
                <div align="right">
                    <a href="https://stackoverflow.com/questions/47875730/how-can-i-fix-jsx-a11y-anchor-is-valid-when-using-the-link-component-in-react">Esqueci minha senha</a>
                </div>
            </div>
            </form>
        )
    }

    export default Login