import React from "react"

const Button = (props)=>{
    return(
        <div>
        <button onClick = {props.buttrouge}  className="btn btn-danger">Le button rouge preferé de gramos</button>
        <button onClick = {props.buttbleu}  className="btn btn-primary">Le button bleu preferé de gramos</button>
        </div>
    )
}

export default Button