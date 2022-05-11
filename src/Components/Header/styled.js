import styled from 'styled-components'
import { FIRST_COLOR, FIRST_COLOR_ALT } from '../../Constants/colors'

export const HeaderContainer = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px 20px 20px;
    background-color: ${FIRST_COLOR};


    #header-img{
        width: 150px;
    }

    #header-button{
        padding: 15px;
        background-color: white;
        border: none;
        color: ${FIRST_COLOR_ALT};
        border-radius: 4px;
        font-weight: var(--font-semi-bold);
        font-size: 1rem;
    }

    #header-button:hover{
        background-color: ${FIRST_COLOR_ALT};
        cursor: pointer;
        color: white;
    }
`