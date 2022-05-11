import styled from 'styled-components'
import { FIRST_COLOR, FIRST_COLOR_ALT } from '../../Constants/colors'

export const PageBodyContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 50px;

    .map-container{

        margin: 0 auto;
    }

    .buttons-container{
        display: grid;
        row-gap: 20px;
        margin: 0 auto; 


        button{
            background-color: white;
            border: 1px solid ${FIRST_COLOR};
            padding: 10px;
            border-radius: 4px;
            color: ${FIRST_COLOR};
            cursor: pointer;
            font-size: 1rem;
            font-weight: bold;
        }

        button:hover{
            background-color: ${FIRST_COLOR};
            color: white;
        }
    }

    .form-buttons{
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        align-items: center;
    }

    #save-button{
        background-color: ${FIRST_COLOR};
        padding: 10px;
        color: white;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 4px;
    }

    #save-button:hover{
        background-color: ${FIRST_COLOR_ALT};
        
    }
`

export const SaveButtonForm = styled.div`

    #save-button{
        background-color: ${FIRST_COLOR};
        padding: 5px;
        color: white;
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
        width: 100px;
        border-radius: 4px;
        cursor: pointer;
}
`
