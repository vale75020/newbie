import React from "react";

const Info = (props)=>{
    console.log(props);
    return(
        <div>
            <h3> depuis Info </h3>
        {props.nom}
        <br/>
        {props.prenom}
        <br/>
        {props.age}
         <br/>
        {props.hello}
        <br/>
        </div>
    )
}

export default Info;