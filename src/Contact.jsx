import React from 'react'
import { NavLink } from "react-router-dom";

const Carasole = () => {
    return(
        <>
            <div className="main">
                <div style={{width: 2000,}} className="container py-5 mx-5 py-auto">
                    <input className="form-control my-3 mx-auto" type="text"/>
                    <input className="form-control my-3 mx-auto" type="email"/>
                    <input className="form-control my-3 mx-auto" type="number"/>
                    <textarea style={{height: 200,}} className="form-control my-3 mx-auto" type="text"/>
                    <input type="submit" value="Send" style={{fontSize: 20,borderRadius:50,padding: 10,paddingRight:30,paddingLeft:30}} className="btn btn-outline-primary"/>
                </div>
            </div>
        </>
    )
}

export default Carasole;