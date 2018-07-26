import React from 'react'

const Input = (props) =>{

    return(
        <div>
<div className="input-group mb-3">
  <div className="input-group-prepend">
    <button onClick={props.aff} className="btn btn-outline-secondary" type="button">GO !!!</button>
  </div>
  <input onChange={props.reg} type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
</div>

        </div>

    )
}

export default Input 