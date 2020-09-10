import React from 'react'

const Carasole = (props) => {
    return(
        <>
            <div className="card" style={{width:300}}>
                <div className="cr">
                    <img src={props.image} class="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <p class="card-text">{props.text1} <br/> {props.text2} </p>
                </div>
            </div>
        </>
    )
}

export default Carasole;