import styled from 'styled-components'
import { FIRST_COLOR, FIRST_COLOR_ALT } from '../../Constants/colors'
import loginBackgroundImg from '../../Resources/loginBackgroundImg.jpg'

export const LoginContainer = styled.div`
    max-width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${loginBackgroundImg});
    background-blend-mode: darken;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .login-main-text-container{
        width: 700px;
    }

    .login-main-text{
        color: white;
        font-size: 2.5rem;
    }

    .login-main-button{
        border: 1px solid white;
        margin-top: 20px;
        width: 110px;
        padding: 10px;
        color: white;
        border-radius: 4px;
        cursor: pointer;
        text-align: center;
    }

    .login-main-button:hover{
        background-color: white;
        color: black;
    }

    .login-form-container{
        margin: 10px;
        padding: 50px;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 10);

    }

    .login-form-title{
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 30px;
        margin-top: -10px;
    }

    .login-form{
        display: grid;
        row-gap: 20px;

    }

    .login-form-input{
        padding: 5px;
        border-radius: 4px;
        border: 1px solid grey;
    }

    .login-button{
        padding: 15px;
        background-color: ${FIRST_COLOR};
        border: none;
        color: white;
        border-radius: 4px;
        font-weight: var(--font-semi-bold);
        font-size: 1rem;
        margin-top: 10px;
    }

        .login-button:hover{
            background-color: ${FIRST_COLOR_ALT};
            cursor: pointer;
        }
`