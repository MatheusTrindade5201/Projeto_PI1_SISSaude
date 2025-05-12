import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import './styles/styleLogin.css'
import App from './App.jsx'
import Login from './Componentes/login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
