import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContainer } from "./styled";

const Login = () => {

    let navigate = useNavigate()

    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const handleEmail = (e) => {
        setUserEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setUserPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("email", JSON.stringify(userEmail))
    }

    return(
        <LoginContainer>
            <div className="login-main-text-container">
                <h3 className="login-main-text">
                    Melhor Sistema de Gestão Agro 4.0 
                    com Tecnologia Embarcada e IoT para 
                    Máquinas Florestais e Agrícolas
                </h3>
                <p className="login-main-button">
                    Saiba Mais
                </p>
            </div>
            <div className="login-form-container">
                <p className="login-form-title">
                    Login
                </p>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div>
                        <label>E-mail</label><br/>
                        <input className="login-form-input" 
                            name="E-mail"
                            type="text" 
                            value={userEmail}
                            onChange={handleEmail}
                        />
                    </div>
                    <div>
                        <label>Senha</label><br/>
                        <input className="login-form-input" 
                            name="Senha"
                            type="password"
                            value={userPassword}
                            onChange={handlePassword}
                        />
                    </div>
                    <button className="login-button"
                        onClick={() => navigate("/home")}>
                        Login
                    </button>
                </form>
            </div>
        </LoginContainer>
    )
}

export default Login