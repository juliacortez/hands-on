import React from "react";
import { FormContainer } from "./styled";

const CreatePolygonForm = (props) => {
    return(
        <div>
            <form onSubmit={props.submit}>
                <FormContainer>
                <div>
                <label>Nome da área: </label><br />
                    <input 
                        type="text"
                        value={props.nameValue}
                        onChange={props.nameOnChange}
                    />
                </div>
                <div>
                    <label>Escolha a cor da área: </label><br />
                    <input 
                        type="color"
                        value={props.colorValue}
                        onChange={props.colorOnChange}
                    />
                </div>
                </FormContainer>
            </form>
        </div>
    )
}

export default CreatePolygonForm