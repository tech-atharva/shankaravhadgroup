import React from 'react'
import { NavLink } from "react-router-dom";

const Carasole = () => {
    return(
        <>
            <main>
                <div className="menu">
                    <NavLink className="menu-items" exact to="/"><NavLink className="nav-link" exact to="/">Our Mantra</NavLink></NavLink>
                    <NavLink className="menu-items" exact to="/story"><NavLink className="nav-link" exact to="/story">Our Stories</NavLink></NavLink>
                    <NavLink className="menu-items" exact to="/business"><NavLink className="nav-link" exact to="/business">Our Business</NavLink></NavLink>
                    <NavLink className="menu-items" exact to="/about"><NavLink className="nav-link" exact to="/about">About Us</NavLink></NavLink>
                    <NavLink className="menu-items" exact to="/contact"><NavLink className="nav-link" exact to="/contact">Contact Us</NavLink></NavLink>
                </div>
            </main>
        </>
    )
}

export default Carasole;