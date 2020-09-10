import React from 'react'
import { NavLink } from "react-router-dom";

const Page = (props) => {
    return(
        <>
            <div className="main">
                <h1 style={{width: 500}} className="mx-auto px-5 mx-5">{props.name}</h1>
                <div className="container py-5 px-3">
                    <section className="row">
                        <div className="col-lg-6 col-sm-12 my-5">
                            <p>{props.text}</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-img">
                                <img className="col-lg-12" src={props.image} />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Page;