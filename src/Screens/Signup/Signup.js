import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignupContainer } from "./styled";

const Signup = () => {

    let navigate = useNavigate()

    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const handleName = (e) => {
        setUserName(e.target.value)
    }

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
        <SignupContainer>
            <div className="signup-main-text-container">
                <h3 className="signup-main-text">
                    Melhor Sistema de Gestão Agro 4.0 
                    com Tecnologia Embarcada e IoT para 
                    Máquinas Florestais e Agrícolas
                </h3>
                <p className="signup-main-button">
                    Saiba Mais
                </p>
            </div>
            <div className="signup-form-container">
                <p className="signup-form-title">
                    Cadastro
                </p>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <div>
                        <label>Nome Completo</label><br/>
                        <input className="signup-form-input" 
                            name="Nome"
                            type="text" 
                            value={userName}
                            onChange={handleName}
                        />
                    </div>
                    <div>
                        <label>E-mail</label><br/>
                        <input className="signup-form-input" 
                            name="E-mail"
                            type="text" 
                            value={userEmail}
                            onChange={handleEmail}
                        />
                    </div>
                    <div>
                        <label>Senha</label><br/>
                        <input className="signup-form-input" 
                            name="Senha"
                            type="password"
                            value={userPassword}
                            onChange={handlePassword}
                        />
                    </div>
                    <button className="signup-button"
                        onClick={() => navigate("/")}>
                        Cadastrar
                    </button>
                </form>
            </div>
        </SignupContainer>
    )
}

export default Signup