import styled from 'styled-components'
import { FIRST_COLOR, FIRST_COLOR_ALT } from '../../Constants/colors'
import pcDataSignup from '../../Resources/pcDataSignup.jpg'

export const SignupContainer = styled.div`
    max-width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${pcDataSignup});
    background-blend-mode: darken;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-evenly;


    .signup-main-text-container{
        width: 700px;
    }

    .signup-main-text{
        color: white;
        font-size: 2.5rem;
    }

    .signup-main-button{
        border: 1px solid white;
        margin-top: 20px;
        width: 110px;
        padding: 10px;
        color: white;
        border-radius: 4px;
        cursor: pointer;
        text-align: center;
    }

    .signup-main-button:hover{
        background-color: white;
        color: black;
    }

    .signup-form-container{
        margin: 10px;
        padding: 50px;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 10);
        width: 300px;
        display: flex;
        align-items: center;
        flex-direction: column;

    }

    .signup-form-title{
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 30px;
        margin-top: -10px;
    }

    .signup-form{
        display: grid;
        row-gap: 20px;

    }

    .signup-form-input{
        padding: 5px;
        border-radius: 4px;
        border: 1px solid grey;
    }

    .signup-button{
        padding: 15px;
        background-color: ${FIRST_COLOR};
        border: none;
        color: white;
        border-radius: 4px;
        font-weight: var(--font-semi-bold);
        font-size: 1rem;
        margin-top: 10px;
    }

        .signup-button:hover{
            background-color: ${FIRST_COLOR_ALT};
            cursor: pointer;
        }
`