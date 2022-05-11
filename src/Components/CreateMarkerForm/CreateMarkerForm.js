import React from "react"

const CreateMarkerForm = (props) => {

    return(
        <form onSubmit={props.submit}>
            <div>
                <label>Nome do Ponto:</label>
                    <br />
                    <input 
                        type="text"
                        value={props.value}
                        onChange={props.onChange}
                    />
            </div>
        </form>
    )
}

export default CreateMarkerForm