import React from "react";
import logo from "../../Resources/logo.png";
import { HeaderContainer } from "./styled";

const Header = () => {
    return(
        <HeaderContainer>
            <img src={logo} id="header-img" />
            {/* <button id="header-button">Sobre nós</button> */}
        </HeaderContainer>
    )
}

export default Header